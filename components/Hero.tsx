import Image from 'next/image'

const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.omzeet.omzeet_kasir'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-white">
      <div className="max-w-6xl mx-auto px-6 pt-16 pb-20 sm:pt-24 sm:pb-28 text-center">
        <Image
          src="/logo.png"
          alt="Omzeet"
          width={72}
          height={72}
          className="mx-auto mb-6 rounded-2xl shadow-sm"
          priority
        />
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-bold tracking-wide">
          UMKM BERJAYA
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 max-w-3xl mx-auto">
          Kasir Digital yang Bikin Warung & Usaha Kamu{' '}
          <span className="text-brand-700">Makin Rapi</span>
        </h1>
        <p className="mt-5 text-lg text-slate-600 max-w-xl mx-auto">
          Omzeet Kasir mencatat setiap transaksi, cetak struk, dan tetap jalan
          walau tanpa internet. Fokus jualan, biar Omzeet yang catat.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={PLAY_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 bg-brand-700 text-white font-semibold rounded-xl hover:bg-brand-600 transition-colors shadow-sm"
          >
            Unduh di Google Play
          </a>
          <a
            href="#fitur"
            className="w-full sm:w-auto px-7 py-3.5 bg-white text-slate-700 font-semibold rounded-xl border border-slate-200 hover:border-brand-300 hover:text-brand-700 transition-colors"
          >
            Lihat Fitur
          </a>
        </div>
        <p className="mt-4 text-xs text-slate-400">
          Gratis dipakai • Tanpa kartu kredit • Offline-first
        </p>

        <div className="mt-14 max-w-2xl mx-auto">
          <Image
            src="/hero-illustration.png"
            alt="Berbagai jenis usaha UMKM memakai Omzeet Kasir untuk menerima pembayaran"
            width={1024}
            height={1024}
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  )
}
