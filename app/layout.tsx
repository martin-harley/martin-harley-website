import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"
import { Inter } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
})

const timestamp = new Date().getTime()

export const metadata: Metadata = {
  title: "Martin Harley | Engineer & Developer",
  description: "Portfolio of Martin Harley, engineer building secure, reliable, and scalable digital infrastructure.",
  metadataBase: new URL("https://martin-harley.vercel.app/"),
  openGraph: {
    title: "Martin Harley | Designer & Developer",
    description: "Portfolio of Martin Harley, engineer building secure, reliable, and scalable digital infrastructure.",
    url: "https://martin-harley.vercel.app/",
    siteName: "Martin Harley | martin-harley.vercel.app",
    images: [
      {
        url: `/images/og-image.png?v=${timestamp}`,
        width: 1200,
        height: 630,
        alt: "Martin Harley",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Martin Harley | Designer & Developer",
    description: "Portfolio of Martin Harley, engineer building secure, reliable, and scalable digital infrastructure.",
    images: [`/images/og-image.png?v=${timestamp}`],
    creator: "@martinharley_oo",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Force refresh of social media cache with timestamp */}
        <meta property="og:image" content={`https://martin-harley.vercel.app/images/og-image.png?v=${timestamp}`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Martin Harley" />
        <meta property="og:image:type" content="image/png" />

        <meta name="twitter:image" content={`https://martin-harley.vercel.app/images/og-image.png?v=${timestamp}`} />
        <meta name="twitter:image:alt" content="Martin Harley" />
        <meta name="twitter:card" content="summary_large_image" />

        {/* LinkedIn specific */}
        <meta property="og:image:secure_url" content={`https://martin-harley.vercel.app/images/og-image.png?v=${timestamp}`} />

        {/* Additional social media tags */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://martin-harley.vercel.app/" />
        <meta property="og:title" content="Martin Harley | Designer & Developer" />
        <meta
          property="og:description"
          content="Portfolio of Martin Harley, engineer building secure, reliable, and scalable digital infrastructure."
        />
        <meta property="og:site_name" content="Martin Harley | martin-harley.vercel.app" />

        {/* Cache control for better refreshing */}
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
