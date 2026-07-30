'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'

// Kode dinormalisasi ke huruf besar (konsisten dengan gaya bos_id) --
// disimpan uppercase di DB, divalidasi case-insensitive juga di RPC
// is_referral_code_valid sisi Omzeet Kasir.
function normalizeCode(raw: string) {
  return raw.trim().toUpperCase().replace(/\s+/g, '')
}

export default function ReferralForm() {
  const [name, setName] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [code, setCode] = useState('')
  const [payoutMethod, setPayoutMethod] = useState<'bank' | 'ewallet'>('bank')
  const [payoutProvider, setPayoutProvider] = useState('')
  const [payoutAccount, setPayoutAccount] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [savedCode, setSavedCode] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)

    const normalizedCode = normalizeCode(code)
    if (!name.trim() || !whatsapp.trim() || !normalizedCode) {
      setError('Nama, WhatsApp, dan Kode Referral wajib diisi.')
      return
    }

    setSubmitting(true)
    const { error: insertError } = await supabase.from('referrals').insert({
      code: normalizedCode,
      name: name.trim(),
      whatsapp: whatsapp.trim(),
      payout_method: payoutMethod,
      payout_provider: payoutProvider.trim() || null,
      payout_account: payoutAccount.trim() || null,
    })
    setSubmitting(false)

    if (insertError) {
      // Kode unik -- Postgres error 23505 kalau kodenya sudah dipakai.
      if (insertError.code === '23505') {
        setError(`Kode "${normalizedCode}" sudah dipakai referral lain. Coba kode lain.`)
      } else {
        setError('Gagal mendaftar. Periksa koneksi internet dan coba lagi.')
      }
      return
    }

    setSavedCode(normalizedCode)
  }

  if (savedCode) {
    return (
      <div className="rounded-2xl border border-brand-100 bg-brand-50 p-6 sm:p-8 text-center">
        <p className="text-sm text-slate-600">Pendaftaran berhasil! Kode referral kamu:</p>
        <p className="mt-2 text-3xl font-extrabold tracking-widest text-brand-700">{savedCode}</p>
        <p className="mt-4 text-sm text-slate-500">
          Simpan kode ini baik-baik (screenshot halaman ini) — kode ini tidak bisa dilihat lagi
          setelah halaman ditutup. Bagikan ke pemilik toko yang mau pakai Omzeet Kasir: kode ini
          diisi di kolom &quot;Kode Referral&quot; saat Setup Wizard. Rekap pendaftar yang pakai
          kode kamu bisa ditanyakan lewat tim Omzeet.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-slate-100 bg-white p-6 sm:p-8 shadow-sm">
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Nama Lengkap</label>
        <input
          type="text"
          required
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
          placeholder="Nama kamu"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Nomor WhatsApp</label>
        <input
          type="tel"
          required
          value={whatsapp}
          onChange={e => setWhatsapp(e.target.value)}
          className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
          placeholder="08xxxxxxxxxx"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">Kode Referral</label>
        <input
          type="text"
          required
          value={code}
          onChange={e => setCode(e.target.value)}
          className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm uppercase focus:outline-none focus:ring-2 focus:ring-brand-500"
          placeholder="Contoh: BUDI2026"
          maxLength={20}
        />
        <p className="mt-1 text-xs text-slate-400">
          Kode unik yang gampang diingat & dibagikan -- ini yang dimasukkan pemilik toko baru saat daftar.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Metode Pencairan</label>
          <select
            value={payoutMethod}
            onChange={e => setPayoutMethod(e.target.value as 'bank' | 'ewallet')}
            className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
          >
            <option value="bank">Rekening Bank</option>
            <option value="ewallet">E-wallet</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">
            {payoutMethod === 'bank' ? 'Nama Bank' : 'Penyedia E-wallet'}
          </label>
          <input
            type="text"
            value={payoutProvider}
            onChange={e => setPayoutProvider(e.target.value)}
            className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
            placeholder={payoutMethod === 'bank' ? 'Contoh: BCA' : 'Contoh: DANA'}
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1">
          {payoutMethod === 'bank' ? 'Nomor Rekening' : 'Nomor E-wallet'}
        </label>
        <input
          type="text"
          value={payoutAccount}
          onChange={e => setPayoutAccount(e.target.value)}
          className="w-full px-3 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-500"
          placeholder="Untuk pencairan reward dari tim Omzeet"
        />
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="w-full py-3 bg-brand-700 text-white font-semibold rounded-lg hover:bg-brand-600 transition-colors disabled:opacity-60"
      >
        {submitting ? 'Mendaftar...' : 'Daftar Jadi Referral'}
      </button>
    </form>
  )
}
