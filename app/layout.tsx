import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://omzeet.id"),
  title: "Omzeet Kasir — Aplikasi Kasir Digital untuk UMKM",
  description:
    "Omzeet Kasir adalah aplikasi kasir digital offline-first untuk warung, toko, dan UMKM. Cetak struk, laporan penjualan real-time, kelola stok, dan banyak lagi. UMKM Berjaya.",
  openGraph: {
    title: "Omzeet Kasir — Aplikasi Kasir Digital untuk UMKM",
    description:
      "Kasir digital offline-first untuk warung & UMKM. Cetak struk, laporan real-time, kelola stok, multi kasir.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
