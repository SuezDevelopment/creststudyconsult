import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Study in UK - Top Universities & Programs | Crest Study Consult",
  description: "Experience prestigious education in the UK. Expert guidance for British university admissions, student visas, and academic programs. Get personalized consultation for studying in United Kingdom.",
  keywords: [
    "study in UK",
    "British universities",
    "UK student visa",
    "study abroad UK",
    "UK education system",
    "Oxford University",
    "Cambridge University",
    "Imperial College",
    "study in England",
    "UK university admission",
    "British colleges",
    "UK study programs",
    "international students UK",
    "UK higher education",
    "Tier 4 visa",
    "student visa UK"
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
    canonical: "/study-destinations/study-in-uk",
  },
  openGraph: {
    title: "Study in UK - Top Universities & Programs | Crest Study Consult",
    description: "Experience prestigious education in the UK. Expert guidance for British university admissions, student visas, and academic programs.",
    url: "https://creststudyconsult.com/study-destinations/study-in-uk",
    siteName: "Crest Study Consult",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/hero_image.png",
        width: 1200,
        height: 630,
        alt: "Study in UK - Crest Study Consult",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Study in UK - Top Universities & Programs | Crest Study Consult",
    description: "Experience prestigious education in the UK. Expert guidance for British university admissions, student visas, and academic programs.",
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

export default function StudyInUKLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}