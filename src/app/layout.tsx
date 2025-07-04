import { Inter } from "next/font/google";
import "./globals.css";
import { Taviraj } from 'next/font/google'
import { Rubik } from 'next/font/google'

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
      <body className={inter.className + ' ' + taviraj.variable + ' ' + rubik.variable}>{children}</body>
    </html>
  );
}
