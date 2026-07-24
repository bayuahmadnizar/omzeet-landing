import { Check } from 'lucide-react'
import { getKasirPlans, formatRupiah } from '@/lib/supabase'

const FREE_FEATURES = [
  'Sampai 30 produk',
  'Sampai 100 transaksi/hari',
  'Cetak struk thermal',
  'Laporan harian',
  '1 kasir',
]

export default async function Pricing() {
  const plans = await getKasirPlans()

  return (
    <section id="harga" className="bg-slate-50 py-20 sm:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Harga Jujur, Tanpa Kejutan
          </h2>
          <p className="mt-4 text-slate-600">
            Mulai gratis, upgrade kapan saja usaha kamu butuh lebih.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Free */}
          <div className="p-8 rounded-2xl border border-slate-200 bg-white">
            <h3 className="font-bold text-lg text-slate-900">Gratis</h3>
            <p className="mt-2 text-3xl font-extrabold text-slate-900">
              Rp0
              <span className="text-sm font-medium text-slate-400"> /selamanya</span>
            </p>
            <ul className="mt-6 space-y-3">
              {FREE_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                  <Check size={16} className="text-brand-600 mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Paid plans from Supabase */}
          {plans.map((plan) => (
            <div
              key={plan.id}
              className="p-8 rounded-2xl border-2 border-brand-600 bg-white relative"
            >
              <span className="absolute -top-3 left-8 px-3 py-1 bg-brand-700 text-white text-xs font-bold rounded-full">
                Rekomendasi
              </span>
              <h3 className="font-bold text-lg text-slate-900">{plan.name}</h3>
              <p className="mt-2 text-3xl font-extrabold text-slate-900">
                {formatRupiah(plan.price_monthly)}
                <span className="text-sm font-medium text-slate-400"> /bulan</span>
              </p>
              <p className="text-xs text-slate-400 mt-1">
                atau {formatRupiah(plan.price_yearly)} /tahun
              </p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <Check size={16} className="text-brand-600 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-slate-400 mt-8">
          Pendaftaran paket & pembayaran dilakukan langsung di dalam aplikasi Omzeet Kasir.
        </p>
      </div>
    </section>
  )
}
