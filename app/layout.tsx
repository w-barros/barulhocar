import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.barulhocar.com.br"),
  title: "Barulho Car — Descubra barulhos no seu carro",
  description:
    "Use o Barulho Car para identificar e aprender sobre barulhos no seu carro.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://www.barulhocar.com.br",
    title: "Barulho Car",
    description: "Identifique barulhos do seu carro em segundos.",
    images: [{ url: "/og.png" }], // coloque um 1200x630 em /public/og.png
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* Script global do AdSense (SEM next/script) */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5729046591387079"
          crossOrigin="anonymous"
        ></script>
        <meta
          name="google-adsense-account"
          content="ca-pub-5729046591387079"
        ></meta>
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
