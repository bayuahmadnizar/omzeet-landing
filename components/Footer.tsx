import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="Omzeet" width={24} height={24} className="rounded-md" />
          <span className="text-sm font-semibold text-slate-700">Omzeet Kasir</span>
        </div>
        <p className="text-xs text-slate-400 order-3 sm:order-2">
          © {new Date().getFullYear()} Omzeet. UMKM Berjaya.
        </p>
        <nav className="flex items-center gap-5 text-sm text-slate-500 order-2 sm:order-3">
          <Link href="/privacy" className="hover:text-brand-700 transition-colors">
            Kebijakan Privasi
          </Link>
        </nav>
      </div>
    </footer>
  )
}
