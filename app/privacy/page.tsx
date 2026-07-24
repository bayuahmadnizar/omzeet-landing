import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Kebijakan Privasi — Omzeet Kasir',
  description: 'Kebijakan privasi aplikasi Omzeet Kasir.',
}

const LAST_UPDATED = '24 Juli 2026'

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-1 max-w-3xl mx-auto px-6 py-16 sm:py-20">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Kebijakan Privasi
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          Terakhir diperbarui: {LAST_UPDATED}
        </p>

        <div className="mt-10 space-y-10 text-slate-700 leading-relaxed">
          <section>
            <p>
              Kebijakan Privasi ini menjelaskan bagaimana Omzeet Kasir
              (&ldquo;Aplikasi&rdquo;, &ldquo;kami&rdquo;) mengumpulkan, menggunakan, dan melindungi
              data Anda. Dengan menggunakan Aplikasi, Anda menyetujui
              praktik yang dijelaskan di sini.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              1. Data yang Kami Kumpulkan
            </h2>
            <p className="mb-3">Saat Anda mendaftar dan menggunakan Aplikasi, kami mengumpulkan:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-semibold">Data akun &amp; toko</span> —
                email, nomor HP, password (tersimpan terenkripsi), nama
                toko/usaha, nama pemilik/PIC, jenis usaha, dan alamat/wilayah
                (kalau diisi).
              </li>
              <li>
                <span className="font-semibold">Identitas perangkat</span> —
                ID perangkat Android digunakan untuk mengaitkan akun toko
                dengan satu perangkat aktif (mencegah penyalahgunaan akun di
                banyak perangkat sekaligus).
              </li>
              <li>
                <span className="font-semibold">Data transaksi &amp; katalog</span>{' '}
                — produk, harga, stok, dan riwayat transaksi yang Anda catat
                di Aplikasi. Data ini{' '}
                <span className="font-semibold">tersimpan di perangkat Anda</span>{' '}
                (offline-first) — bukan otomatis dikirim ke server kami.
              </li>
              <li>
                <span className="font-semibold">Cadangan data (khusus pelanggan Pro)</span>{' '}
                — kalau berlangganan paket berbayar, sebagian data toko
                (katalog, pengaturan, logo) dapat dicadangkan ke server kami
                supaya bisa dipulihkan saat ganti perangkat.
              </li>
              <li>
                <span className="font-semibold">Bukti pembayaran</span> — saat
                mendaftar paket berbayar lewat transfer bank manual, bukti
                transfer yang Anda unggah disimpan untuk keperluan verifikasi
                oleh tim kami.
              </li>
              <li>
                <span className="font-semibold">Akses kamera</span> —
                digunakan hanya untuk memindai barcode/QR produk. Kami tidak
                menyimpan foto atau rekaman dari kamera.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              2. Bagaimana Data Digunakan
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Menjalankan fungsi inti Aplikasi (kasir, laporan, cetak struk, dll).</li>
              <li>Memverifikasi akun dan mengelola langganan/pembayaran Anda.</li>
              <li>Memulihkan data toko Anda saat berganti perangkat (khusus pelanggan Pro).</li>
              <li>Mencegah penyalahgunaan akun (kunci satu akun ke satu perangkat aktif).</li>
              <li>Memberikan dukungan pelanggan bila Anda menghubungi kami.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              3. Penyimpanan &amp; Keamanan Data
            </h2>
            <p>
              Data transaksi dan katalog toko Anda utamanya tersimpan secara{' '}
              <span className="font-semibold">lokal di perangkat Anda</span>.
              Data akun, langganan, dan cadangan (untuk pelanggan Pro)
              disimpan di server Supabase dengan akses dibatasi lewat
              kebijakan keamanan tingkat baris (Row Level Security) — akun
              Anda hanya bisa mengakses data milik toko Anda sendiri.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              4. Berbagi Data ke Pihak Ketiga
            </h2>
            <p>
              Kami{' '}
              <span className="font-semibold">tidak menjual atau membagikan</span>{' '}
              data Anda ke pihak ketiga untuk keperluan iklan. Data Anda
              hanya diproses oleh penyedia infrastruktur yang kami pakai
              untuk menjalankan layanan (mis. Supabase sebagai penyedia
              basis data &amp; autentikasi), dan tidak digunakan untuk
              tujuan lain di luar itu.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              5. Hak Anda
            </h2>
            <p>
              Anda dapat meminta penghapusan akun dan data terkait dengan
              menghubungi kami lewat kontak di bawah. Data transaksi yang
              tersimpan lokal di perangkat Anda dapat dihapus kapan saja
              lewat pengaturan Aplikasi atau dengan menghapus data
              aplikasi/uninstall dari perangkat Anda.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              6. Perubahan Kebijakan
            </h2>
            <p>
              Kebijakan ini dapat diperbarui sewaktu-waktu. Perubahan
              signifikan akan kami tandai lewat tanggal &quot;terakhir
              diperbarui&quot; di halaman ini.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900 mb-3">
              7. Kontak
            </h2>
            <p>
              Ada pertanyaan soal privasi atau ingin meminta penghapusan
              data? Hubungi kami lewat email di{' '}
              <a href="mailto:halo@omzeet.id" className="text-brand-700 font-medium hover:underline">
                halo@omzeet.id
              </a>
              .
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
