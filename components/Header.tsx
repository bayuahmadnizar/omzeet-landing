import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-100">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="Omzeet" width={32} height={32} className="rounded-lg" />
          <span className="font-bold text-slate-900">Omzeet Kasir</span>
        </Link>
        <nav className="hidden sm:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#fitur" className="hover:text-brand-700 transition-colors">Fitur</a>
          <a href="#harga" className="hover:text-brand-700 transition-colors">Harga</a>
          <a href="#unduh" className="hover:text-brand-700 transition-colors">Unduh</a>
        </nav>
        <a
          href="#unduh"
          className="px-4 py-2 bg-brand-700 text-white text-sm font-semibold rounded-lg hover:bg-brand-600 transition-colors"
        >
          Coba Gratis
        </a>
      </div>
    </header>
  )
}
