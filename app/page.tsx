import Header from '@/components/Header'
import HeroSlider from '@/components/HeroSlider'
import Features from '@/components/Features'
import Pricing from '@/components/Pricing'
import DownloadCta from '@/components/DownloadCta'
import Footer from '@/components/Footer'

// Halaman ini di-generate statis saat build -- revalidate tiap jam
// supaya perubahan harga paket di Supabase tidak "beku" sampai deploy
// ulang manual.
export const revalidate = 3600

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSlider />
        <Features />
        <Pricing />
        <DownloadCta />
      </main>
      <Footer />
    </>
  )
}
