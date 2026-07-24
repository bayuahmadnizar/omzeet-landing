import {
  WifiOff,
  ScanBarcode,
  Printer,
  BarChart3,
  PackageSearch,
  Wallet,
  Users,
  BookUser,
} from 'lucide-react'

const FEATURES = [
  {
    icon: WifiOff,
    title: 'Tetap Jalan Tanpa Internet',
    desc: 'Semua transaksi tersimpan di perangkat. Tidak perlu khawatir sinyal jelek atau internet mati saat toko ramai.',
  },
  {
    icon: ScanBarcode,
    title: 'Cari Produk Secepat Kilat',
    desc: 'Scan barcode produk atau cari lewat nama/SKU — checkout jadi lebih cepat, antrean tidak menumpuk.',
  },
  {
    icon: Printer,
    title: 'Cetak Struk Thermal',
    desc: 'Cetak struk langsung ke printer thermal, lengkap dengan logo toko. Bisa cetak ulang kapan saja.',
  },
  {
    icon: Wallet,
    title: 'Banyak Cara Bayar',
    desc: 'Tunai, QRIS, transfer manual, sampai catat utang pelanggan — semua tercatat rapi dalam satu aplikasi.',
  },
  {
    icon: PackageSearch,
    title: 'Kelola Stok Otomatis',
    desc: 'Stok berkurang otomatis tiap transaksi, lengkap dengan kartu stok untuk pantau keluar-masuk barang.',
  },
  {
    icon: BarChart3,
    title: 'Laporan Real-time',
    desc: 'Omzet harian, laporan shift (Z-report), sampai produk terlaris — semua langsung kelihatan tanpa hitung manual.',
  },
  {
    icon: Users,
    title: 'Multi Kasir dengan PIN',
    desc: 'Tiap kasir punya PIN sendiri. Admin bisa kunci akses ke aksi sensitif seperti hapus produk atau ubah harga.',
  },
  {
    icon: BookUser,
    title: 'Data Pelanggan & Utang',
    desc: 'Simpan data pelanggan dan catat utang mereka rapi, tidak perlu buku catatan terpisah lagi.',
  },
]

export default function Features() {
  return (
    <section id="fitur" className="max-w-6xl mx-auto px-6 py-20 sm:py-28">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Semua yang Warung Kamu Butuhkan
        </h2>
        <p className="mt-4 text-slate-600">
          Dibuat khusus untuk warung, toko, dan UMKM Indonesia — sederhana
          dipakai, lengkap fiturnya.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {FEATURES.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="p-6 rounded-2xl border border-slate-100 hover:border-brand-200 hover:shadow-sm transition-all bg-white"
          >
            <div className="w-11 h-11 rounded-xl bg-brand-50 flex items-center justify-center mb-4">
              <Icon size={22} className="text-brand-700" />
            </div>
            <h3 className="font-bold text-slate-900 mb-1.5">{title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
