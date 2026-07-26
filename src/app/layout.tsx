import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/church/Navbar";
import { Footer } from "@/components/church/Footer";
import { GDPRConsentBanner } from "@/components/church/GDPRConsentBanner";
import { WhatsAppChatbot } from "@/components/church/WhatsAppChatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://visionlifeministries.com";
const SITE_NAME = "Vision Life Ministries";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Vision Life Ministries | Church in Uganda, East Africa & Beyond",
    template: "%s | Vision Life Ministries",
  },
  description:
    "Vision Life Ministries is a Spirit-filled Christian church in Rakai, Uganda. We reach, restore and equip people with the Gospel of Jesus Christ through worship, prayer, healing, deliverance, Bible study and missions across East Africa, Africa and the world.",
  applicationName: SITE_NAME,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "church in Uganda",
    "church in Rakai",
    "church in East Africa",
    "church in Africa",
    "church near me Uganda",
    "Christian church Uganda",
    "Spirit-filled church",
    "Pentecostal church Uganda",
    "evangelical church Africa",
    "Vision Life Ministries",
    "Vision Life Ministries LTD",
    "gospel ministry Africa",
    "worship church Uganda",
    "Bible study Uganda",
    "prayer ministry",
    "healing and deliverance",
    "Sunday service Uganda",
    "discipleship Africa",
    "missions Africa",
    "church Rakai District",
    "Jesus Christ church",
    "born again church Uganda",
  ],
  authors: [{ name: "Vision Life Ministries LTD", url: SITE_URL }],
  creator: "Vision Life Ministries LTD",
  publisher: "Vision Life Ministries LTD",
  category: "Religion & Spirituality",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vision Life Ministries | Church in Uganda, East Africa & Beyond",
    description:
      "A Spirit-filled Christian church in Rakai, Uganda reaching, restoring and equipping people with the Gospel of Christ across East Africa, Africa and the world. Worship, prayer, healing, deliverance, Bible study and missions.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_UG",
    alternateLocale: ["en_US", "en_GB", "en_AE"],
    type: "website",
    images: [
      {
        url: "/images/hero-worship.png",
        width: 1200,
        height: 630,
        alt: "Vision Life Ministries church worship service in Rakai, Uganda",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vision Life Ministries | Church in Uganda, East Africa & Beyond",
    description:
      "A Spirit-filled Christian church in Rakai, Uganda reaching, restoring and equipping people with the Gospel of Christ across Africa and the world.",
    images: ["/images/hero-worship.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  manifest: "/site.webmanifest",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["ReligiousOrganization", "Place", "NGO"],
      "@id": `${SITE_URL}/#church`,
      name: "Vision Life Ministries LTD",
      alternateName: "Vision Life Ministries",
      url: SITE_URL,
      logo: `${SITE_URL}/images/logo.png`,
      image: [
        `${SITE_URL}/images/hero-worship.png`,
        `${SITE_URL}/images/church-building.png`,
        `${SITE_URL}/images/community.png`,
      ],
      slogan: "Reaching, Restoring, Equipping",
      description:
        "Vision Life Ministries is a Spirit-filled Christian church and restoration ministry based in Rakai District, Uganda, East Africa. We reach people with the love of God, restore lives to the wholeness of Christ's image, and equip believers to minister effectively across Uganda, East Africa, Africa and the nations of the world through worship, prayer, healing, deliverance, Bible study, discipleship, community outreach and missions.",
      religiousAffiliation: "Christianity",
      knowsAbout: [
        "Christian worship",
        "prayer",
        "healing and deliverance",
        "Bible study",
        "discipleship",
        "missions and evangelism",
        "youth ministry",
        "women's ministry",
        "community outreach",
        "gospel of Jesus Christ",
        "Sunday church services",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Rakai District",
        addressRegion: "Central Region",
        addressCountry: "UG",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -0.65,
        longitude: 31.5,
      },
      telephone: ["+97450769794", "+97451193650"],
      email: "info@visionlifeministries.com",
      areaServed: [
        { "@type": "Place", name: "Rakai District, Uganda" },
        { "@type": "Place", name: "Uganda" },
        { "@type": "Place", name: "East Africa" },
        { "@type": "Place", name: "Africa" },
        { "@type": "Place", name: "Worldwide" },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Sunday",
          opens: "09:00",
          closes: "12:00",
          description: "Sunday Worship Service",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Wednesday",
          opens: "17:00",
          closes: "19:00",
          description: "Midweek Bible Study",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Friday",
          opens: "18:00",
          closes: "20:00",
          description: "Friday Prayer Meeting",
        },
      ],
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description:
        "Official website of Vision Life Ministries, a Spirit-filled Christian church in Rakai, Uganda, reaching, restoring and equipping people with the Gospel across East Africa and the world.",
      publisher: { "@id": `${SITE_URL}/#church` },
      inLanguage: "en-UG",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          key="error-logger"
          dangerouslySetInnerHTML={{
            __html: `
              window.onerror = function(message, source, lineno, colno, error) {
                fetch('/api/log-error', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    type: 'error',
                    message: message,
                    source: source,
                    lineno: lineno,
                    colno: colno,
                    stack: error ? error.stack : null
                  })
                }).catch(err => console.error(err));
                return false;
              };
              window.onunhandledrejection = function(event) {
                fetch('/api/log-error', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    type: 'promise_rejection',
                    reason: event.reason ? (event.reason.message || String(event.reason)) : null,
                    stack: event.reason ? event.reason.stack : null
                  })
                }).catch(err => console.error(err));
              };
            `
          }}
        />
        <script
          key="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-dark text-white`}
        suppressHydrationWarning
      >
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1 min-w-0">
            {children}
          </main>
          <Footer />
          <GDPRConsentBanner />
          <WhatsAppChatbot />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
