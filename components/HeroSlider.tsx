'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import PlayStoreIcon from './PlayStoreIcon'

type Slide = {
  badge: string
  title: React.ReactNode
  desc: string
  playStoreUrl: string
  secondaryHref: string
  secondaryLabel: string
}

const SLIDES: Slide[] = [
  {
    badge: 'OMZEET KASIR',
    title: (
      <>
        Kasir Digital yang Bikin Warung & Usaha Kamu{' '}
        <span className="text-brand-700">Makin Rapi</span>
      </>
    ),
    desc: 'Omzeet Kasir mencatat setiap transaksi, cetak struk, dan tetap jalan walau tanpa internet. Fokus jualan, biar Omzeet yang catat.',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.omzeet.omzeet_kasir',
    secondaryHref: '#fitur',
    secondaryLabel: 'Lihat Fitur',
  },
  {
    badge: 'OMZEET BOS',
    title: (
      <>
        Pantau Omzet Tokomu{' '}
        <span className="text-brand-700">Dari Mana Saja</span>
      </>
    ),
    desc: 'Omzeet BOS memberi kamu pantauan omzet real-time, laporan penjualan tiap cabang, dan kelola karyawan — langsung dari genggaman, di mana saja kamu berada.',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.omzeet.omzeet_owner',
    secondaryHref: '#harga',
    secondaryLabel: 'Lihat Harga',
  },
]

export default function HeroSlider() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [])

  const slide = SLIDES[active]

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
          {slide.badge}
        </span>

        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 max-w-3xl mx-auto min-h-[1.2em] sm:min-h-[2.4em]">
          {slide.title}
        </h1>

        <p className="mt-5 text-lg text-slate-600 max-w-xl mx-auto min-h-[3.5em]">
          {slide.desc}
        </p>

        <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={slide.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-brand-700 text-white font-semibold rounded-xl hover:bg-brand-600 transition-colors shadow-sm"
          >
            <PlayStoreIcon className="w-5 h-5 shrink-0" />
            Unduh di Google Play
          </a>
          <a
            href={slide.secondaryHref}
            className="w-full sm:w-auto px-7 py-3.5 bg-white text-slate-700 font-semibold rounded-xl border border-slate-200 hover:border-brand-300 hover:text-brand-700 transition-colors"
          >
            {slide.secondaryLabel}
          </a>
        </div>

        <p className="mt-4 text-xs text-slate-400">
          Gratis dipakai • Tanpa kartu kredit • Offline-first
        </p>

        <div className="mt-10 flex items-center justify-center gap-2">
          {SLIDES.map((s, i) => (
            <button
              key={s.badge}
              onClick={() => setActive(i)}
              aria-label={`Tampilkan ${s.badge}`}
              className={`h-2 rounded-full transition-all ${
                i === active ? 'w-8 bg-brand-700' : 'w-2 bg-brand-200 hover:bg-brand-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
