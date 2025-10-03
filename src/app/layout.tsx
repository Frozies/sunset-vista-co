import { Inter } from "next/font/google";
import "./globals.css";
import { Taviraj } from 'next/font/google'
import { Rubik } from 'next/font/google'
import Head from "next/head";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

const taviraj = Taviraj({
  subsets: ['latin'],
  display: 'swap',
  weight: "400",
  variable: '--font-taviraj'
})

const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rubik',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-SKLCFXSXKY" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SKLCFXSXKY');
          `}
        </Script>
      </head>
      <body className={inter.className + ' ' + taviraj.variable + ' ' + rubik.variable}>{children}</body>
    </html>
  );
}


