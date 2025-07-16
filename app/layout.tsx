import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { GeistSans } from "geist/font/sans"

export const metadata: Metadata = {
  title: "TaxOS – Smart Task Flow for Modern Accountants | Automate Everything, Miss Nothing",
  description: "TaxOS automates client communication, document requests, and task tracking",
  keywords:
    "Tax task management, automated client communication, W-9 tracking, tax workflow automation, AI assistant for accountants, client document management, CPE tracker, IRS notice management",
  authors: [{ name: "Nurahex AI Team" }],
  creator: "Nurahex.ai",
  publisher: "Nurahex.ai",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cpaos.com",
    siteName: "TaxOS - Smart Task Flow for Modern Accountants",
    title: "TaxOS – Smart Task Flow for Modern Accountants",
    description: "Stop drowning in admin work. TaxOS automates client communication",
    images: [
      {
        url: "https://cpaos.com/images/og-new.jpeg",
        width: 1200,
        height: 630,
        alt: "CPA OS Smart Task Flow dashboard with automated client communication",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TaxOS – Smart Task Flow for Modern Accountants",
    description: "Never miss a client deadline again. TaxOS automates W-9 requests",
    images: ["https://cpaos.com/images/og-new.jpeg"],
    creator: "@nurahex_ai",
    site: "@cpaos_ai",
  },
  alternates: {
    canonical: "https://cpaos.com",
  },
  category: "Technology",
  classification: "Tax Software",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    other: [{ rel: "manifest", url: "/site.webmanifest" }],
  },
  generator: "Next.js",
  applicationName: "TaxOS - Smart Task Flow for Modern Accountants",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@geist-ui/core@latest/dist/geist-ui.css" />
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Software Application JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "TaxOS - Smart Task Flow for Modern Accountants",
              description:
                "TaxOS automates client communication, document requests, and task tracking for tax professionals. AI-powered workflow intelligence for modern accounting practices.",
              url: "https://cpaos.com",
              applicationCategory: "TaxPreparationSoftware",
              operatingSystem: "Windows, macOS, Linux",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              author: {
                "@type": "Organization",
                name: "Nurahex.ai",
                url: "https://nurahex.ai",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                ratingCount: "1500",
              },
              featureList: [
                "Automated client communication",
                "Smart document request tracking",
                "AI-powered task management",
                "Cross-client workflow intelligence",
                "Agentic CPA chat assistant",
                "Automated task history and audit trails",
              ],
              audience: {
                "@type": "Audience",
                audienceType: "Tax professionals, CPAs, accounting firms",
              },
            }),
          }}
        />

        {/* FAQ JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Can I use this without switching systems?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes — it integrates with your existing tools and fills the gaps in your current workflow.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Will it spam my clients?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "No — all messaging is human-checked before sending to ensure professional communication.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Where is my data stored?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Securely in encrypted cloud storage, fully audit-logged for compliance.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is it free to try?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes. No credit card required for the free trial.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does it work for small firms?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "It's made for solos, side hustlers, and multi-partner setups alike.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
