import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search - Find Study Abroad Information | Crest Study Consult",
  description: "Search our comprehensive database of study abroad information. Find details about universities, programs, visa requirements, and services for studying in USA, Canada, UK, Australia, Germany, Ireland, and New Zealand.",
  keywords: [
    "study abroad search",
    "university search",
    "study destinations",
    "international education",
    "student visa information",
    "university programs",
    "study abroad services",
    "education consultation",
    "overseas education",
    "global universities"
  ],
  openGraph: {
    title: "Search Study Abroad Information | Crest Study Consult",
    description: "Find comprehensive information about studying abroad. Search universities, programs, visa requirements, and expert consultation services.",
    type: "website",
    locale: "en_US",
    url: "https://creststudyconsult.com/search",
    siteName: "Crest Study Consult",
    images: [
      {
        url: "https://creststudyconsult.com/images/search-og.jpg",
        width: 1200,
        height: 630,
        alt: "Search Study Abroad Information - Crest Study Consult",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Search Study Abroad Information | Crest Study Consult",
    description: "Find comprehensive information about studying abroad. Search universities, programs, visa requirements, and expert consultation services.",
    images: ["https://creststudyconsult.com/images/search-twitter.jpg"],
    creator: "@creststudyconsult",
    site: "@creststudyconsult",
  },
  alternates: {
    canonical: "https://creststudyconsult.com/search",
  },
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
  other: {
    "search-engine-optimization": "optimized",
    "content-type": "search-interface",
    "page-type": "search",
  },
};

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}