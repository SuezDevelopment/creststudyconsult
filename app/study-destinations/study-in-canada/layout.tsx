import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Study in Canada - Top Universities & Programs | Crest Study Consult",
  description: "Explore world-class education in Canada. Expert guidance for Canadian university admissions, student visas, and academic programs. Get personalized consultation for studying in Canada.",
  keywords: [
    "study in Canada",
    "Canadian universities",
    "Canada student visa",
    "study abroad Canada",
    "Canadian education system",
    "University of Toronto",
    "McGill University",
    "UBC",
    "study permit Canada",
    "Canadian colleges",
    "Canada study programs",
    "international students Canada",
    "Canadian higher education",
    "immigration Canada students",
    "post-graduation work permit"
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
    canonical: "/study-destinations/study-in-canada",
  },
  openGraph: {
    title: "Study in Canada - Top Universities & Programs | Crest Study Consult",
    description: "Explore world-class education in Canada. Expert guidance for Canadian university admissions, student visas, and academic programs.",
    url: "https://creststudyconsult.com/study-destinations/study-in-canada",
    siteName: "Crest Study Consult",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/hero_image.png",
        width: 1200,
        height: 630,
        alt: "Study in Canada - Crest Study Consult",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Study in Canada - Top Universities & Programs | Crest Study Consult",
    description: "Explore world-class education in Canada. Expert guidance for Canadian university admissions, student visas, and academic programs.",
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

export default function StudyInCanadaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}