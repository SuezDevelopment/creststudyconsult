import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { BookingModalProvider } from "@/hooks/use-booking-modal";
import { BookingModal } from "@/components/bookings-modal";
import { CookieBanner } from "@/components/cookie-banner";
import { ConsentProvider } from "@/hooks/use-consent";
import { ConsentModalProvider } from "@/hooks/use-consent-modal";
import { ConsentModal } from "@/components/consent-modal";
import SEO from "@/components/SEO";
import { MatomoTracker } from "@/components/matomo-tracker";

export const metadata: Metadata = {
  title: "Crest Study Consult - Study Abroad Dreams Made Reality",
  description:
    "Study Abroad Consultants in Nigeria – Scholarships & Visa Guidance | Crest Study Consult. Transform your future with world-class education. We guide ambitious students to top universities across the globe with personalized consulting and comprehensive support.",
  generator: "Next.js",
  applicationName: "Crest Study Consult",
  keywords:
    "study abroad, international education, university consulting, student support, top universities, global education, study overseas, education consulting, visa assistance, scholarship guidance, IELTS TOEFL preparation, university admission, student visa, overseas education, international students, study programs, academic consulting, education abroad, university placement, college admission, study abroad consultancy, international university, student mentorship, career guidance, educational counseling, abroad studies, foreign education, study destination, university application, admission process",
  authors: [{ name: "Crest Study Consult" }],
  creator: "Crest Study Consult",
  publisher: "Crest Study Consult",
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://creststudyconsult.com",
    title: "Crest Study Consult - Study Abroad Dreams Made Reality",
    description:
      "Study Abroad Consultants in Nigeria – Scholarships & Visa Guidance | Crest Study Consult. Transform your future with world-class education. We guide ambitious students to top universities across the globe with personalized consulting and comprehensive support.",
    siteName: "Crest Study Consult",
    images: [
      {
        url: "https://creststudyconsult.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Crest Study Consult - Your Gateway to Global Education",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crest Study Consult - Study Abroad Dreams Made Reality",
    description:
      "Study Abroad Consultants in Nigeria – Scholarships & Visa Guidance | Crest Study Consult. Transform your future with world-class education. We guide ambitious students to top universities across the globe with personalized consulting and comprehensive support.",
    images: ["https://creststudyconsult.com/og-image.jpg"],
    creator: "@creststudyconsult",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon-57x57.png", sizes: "57x57" },
      { url: "/apple-touch-icon-60x60.png", sizes: "60x60" },
      { url: "/apple-touch-icon-72x72.png", sizes: "72x72" },
      { url: "/apple-touch-icon-76x76.png", sizes: "76x76" },
      { url: "/apple-touch-icon-114x114.png", sizes: "114x114" },
      { url: "/apple-touch-icon-120x120.png", sizes: "120x120" },
      { url: "/apple-touch-icon-144x144.png", sizes: "144x144" },
      { url: "/apple-touch-icon-152x152.png", sizes: "152x152" },
      { url: "/apple-touch-icon-180x180.png", sizes: "180x180" },
    ],
    other: [
      { rel: "icon", url: "/favicon.ico" },
      { rel: "shortcut icon", url: "/favicon.ico" },
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#5bbc00ff" },
    ],
  },
  manifest: "/site.webmanifest",
  other: {
    "msapplication-TileColor": "#5bbc00ff",
    "msapplication-TileImage": "/mstile-144x144.png",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#5bbc00ff",
  },
};

export function generateViewport(): Viewport {
  return {
    width: "device-width",
    initialScale: 1,
    themeColor: "#5bbc00ff",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SEO
        title={metadata.title as string}
        description={metadata.description as string}
        keywords={metadata.keywords as string}
        ogImage={
          (metadata.openGraph?.images as { url: string }[])?.[0]?.url as string
        }
        url={metadata.openGraph?.url as string}
      />
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans`}>
        <ConsentProvider>
          <MatomoTracker />
          <ConsentModalProvider>
            <BookingModalProvider>
              <BookingModal />
              <ConsentModal />
              <main>{children}</main>
              <CookieBanner />
            </BookingModalProvider>
          </ConsentModalProvider>
        </ConsentProvider>
      </body>
    </html>
  );
}
