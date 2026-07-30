import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ReferralForm from '@/components/ReferralForm'

export const metadata: Metadata = {
  title: 'Jadi Referral — Omzeet Kasir',
  description: 'Daftar jadi mitra referral Omzeet Kasir, dapat kode unik untuk dibagikan ke calon pelanggan baru.',
}

export default function ReferralPage() {
  return (
    <>
      <Header />
      <main className="flex-1 max-w-xl mx-auto px-6 py-16 sm:py-20 w-full">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Jadi Mitra Referral
        </h1>
        <p className="mt-3 text-slate-500">
          Daftar sekali, dapat kode referral unik. Bagikan ke pemilik toko yang mau pakai Omzeet
          Kasir -- setiap yang daftar pakai kode kamu akan terekam untuk tim Omzeet.
        </p>
        <div className="mt-8">
          <ReferralForm />
        </div>
      </main>
      <Footer />
    </>
  )
}
