import {Inter, Rubik, Taviraj} from "next/font/google";
import "./globals.css";
import Script from "next/script";
import {SpeedInsights} from "@vercel/speed-insights/next"
import {Analytics} from "@vercel/analytics/next"

const inter = Inter({subsets: ["latin"]});

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
        <Analytics/>
        <SpeedInsights/>
        <head>
            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-SKLCFXSXKY" strategy="afterInteractive"/>
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


