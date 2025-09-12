import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Study in USA - Top Universities & Programs | Crest Study Consult",
  description: "Discover world-class education in the USA. Expert guidance for American university admissions, student visas, and academic programs. Get personalized consultation for studying in America.",
  keywords: [
    "study in USA",
    "American universities",
    "USA student visa",
    "study abroad USA",
    "US education system",
    "Harvard",
    "MIT",
    "Stanford",
    "study in America",
    "US university admission",
    "American colleges",
    "USA study programs",
    "international students USA",
    "US higher education",
    "study visa USA"
  ],
  authors: [{ name: "Crest Study Consult" }],
  creator: "Crest Study Consult",
  publisher: "Crest Study Consult",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://creststudyconsult.com"),
  alternates: {
    canonical: "/study-destinations/study-in-usa",
  },
  openGraph: {
    title: "Study in USA - Top Universities & Programs | Crest Study Consult",
    description: "Discover world-class education in the USA. Expert guidance for American university admissions, student visas, and academic programs.",
    url: "https://creststudyconsult.com/study-destinations/study-in-usa",
    siteName: "Crest Study Consult",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/hero_image.png",
        width: 1200,
        height: 630,
        alt: "Study in USA - Crest Study Consult",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Study in USA - Top Universities & Programs | Crest Study Consult",
    description: "Discover world-class education in the USA. Expert guidance for American university admissions, student visas, and academic programs.",
    images: ["/hero_image.png"],
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
};

export default function StudyInUSALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}