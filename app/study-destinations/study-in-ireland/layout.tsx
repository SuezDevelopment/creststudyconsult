import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Study in Ireland - Top Universities & Programs | Crest Study Consult",
  description: "Explore quality education in Ireland. Expert guidance for Irish university admissions, student visas, and academic programs. Get personalized consultation for studying in Ireland.",
  keywords: [
    "study in Ireland",
    "Irish universities",
    "Ireland student visa",
    "study abroad Ireland",
    "Irish education system",
    "Trinity College Dublin",
    "University College Dublin",
    "National University of Ireland",
    "study visa Ireland",
    "Irish colleges",
    "Ireland study programs",
    "international students Ireland",
    "Irish higher education",
    "EU education Ireland",
    "post-study work Ireland"
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
    canonical: "/study-destinations/study-in-ireland",
  },
  openGraph: {
    title: "Study in Ireland - Top Universities & Programs | Crest Study Consult",
    description: "Explore quality education in Ireland. Expert guidance for Irish university admissions, student visas, and academic programs.",
    url: "https://creststudyconsult.com/study-destinations/study-in-ireland",
    siteName: "Crest Study Consult",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/hero_image.png",
        width: 1200,
        height: 630,
        alt: "Study in Ireland - Crest Study Consult",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Study in Ireland - Top Universities & Programs | Crest Study Consult",
    description: "Explore quality education in Ireland. Expert guidance for Irish university admissions, student visas, and academic programs.",
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

export default function StudyInIrelandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}