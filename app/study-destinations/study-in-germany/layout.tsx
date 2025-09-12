import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Study in Germany - Top Universities & Programs | Crest Study Consult",
  description: "Experience quality education in Germany. Expert guidance for German university admissions, student visas, and academic programs. Get personalized consultation for studying in Germany.",
  keywords: [
    "study in Germany",
    "German universities",
    "Germany student visa",
    "study abroad Germany",
    "German education system",
    "Technical University of Munich",
    "Heidelberg University",
    "RWTH Aachen",
    "study visa Germany",
    "German colleges",
    "Germany study programs",
    "international students Germany",
    "German higher education",
    "free education Germany",
    "DAAD scholarship"
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
    canonical: "/study-destinations/study-in-germany",
  },
  openGraph: {
    title: "Study in Germany - Top Universities & Programs | Crest Study Consult",
    description: "Experience quality education in Germany. Expert guidance for German university admissions, student visas, and academic programs.",
    url: "https://creststudyconsult.com/study-destinations/study-in-germany",
    siteName: "Crest Study Consult",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/hero_image.png",
        width: 1200,
        height: 630,
        alt: "Study in Germany - Crest Study Consult",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Study in Germany - Top Universities & Programs | Crest Study Consult",
    description: "Experience quality education in Germany. Expert guidance for German university admissions, student visas, and academic programs.",
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

export default function StudyInGermanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}