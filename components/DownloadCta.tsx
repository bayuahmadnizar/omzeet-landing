import PlayStoreIcon from './PlayStoreIcon'

const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.omzeet.omzeet_kasir'

export default function DownloadCta() {
  return (
    <section id="unduh" className="max-w-6xl mx-auto px-6 py-20 sm:py-28">
      <div className="rounded-3xl bg-brand-700 px-8 py-14 sm:py-20 text-center relative overflow-hidden">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white max-w-xl mx-auto">
          Saatnya UMKM Kamu Berjaya
        </h2>
        <p className="mt-4 text-brand-50 max-w-lg mx-auto">
          Unduh Omzeet Kasir sekarang, gratis dipakai untuk warung, toko, dan
          usaha kecil kamu.
        </p>
        <a
          href={PLAY_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 mt-8 px-8 py-4 bg-white text-brand-700 font-bold rounded-xl hover:bg-brand-50 transition-colors"
        >
          <PlayStoreIcon className="w-5 h-5 shrink-0" />
          Unduh di Google Play
        </a>
      </div>
    </section>
  )
}
