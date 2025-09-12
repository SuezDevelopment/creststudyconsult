import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Study in New Zealand - Top Universities & Programs | Crest Study Consult",
  description: "Experience world-class education in New Zealand. Expert guidance for New Zealand university admissions, student visas, and academic programs. Get personalized consultation for studying in New Zealand.",
  keywords: [
    "study in New Zealand",
    "New Zealand universities",
    "New Zealand student visa",
    "study abroad New Zealand",
    "New Zealand education system",
    "University of Auckland",
    "University of Otago",
    "Victoria University Wellington",
    "study visa New Zealand",
    "New Zealand colleges",
    "New Zealand study programs",
    "international students New Zealand",
    "New Zealand higher education",
    "post-study work visa New Zealand",
    "NZQA qualifications"
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
    canonical: "/study-destinations/study-in-new-zealand",
  },
  openGraph: {
    title: "Study in New Zealand - Top Universities & Programs | Crest Study Consult",
    description: "Experience world-class education in New Zealand. Expert guidance for New Zealand university admissions, student visas, and academic programs.",
    url: "https://creststudyconsult.com/study-destinations/study-in-new-zealand",
    siteName: "Crest Study Consult",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/hero_image.png",
        width: 1200,
        height: 630,
        alt: "Study in New Zealand - Crest Study Consult",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Study in New Zealand - Top Universities & Programs | Crest Study Consult",
    description: "Experience world-class education in New Zealand. Expert guidance for New Zealand university admissions, student visas, and academic programs.",
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

export default function StudyInNewZealandLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}