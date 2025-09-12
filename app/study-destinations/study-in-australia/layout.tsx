import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Study in Australia - Top Universities & Programs | Crest Study Consult",
  description: "Discover excellent education in Australia. Expert guidance for Australian university admissions, student visas, and academic programs. Get personalized consultation for studying in Australia.",
  keywords: [
    "study in Australia",
    "Australian universities",
    "Australia student visa",
    "study abroad Australia",
    "Australian education system",
    "University of Melbourne",
    "Australian National University",
    "University of Sydney",
    "study visa Australia",
    "Australian colleges",
    "Australia study programs",
    "international students Australia",
    "Australian higher education",
    "subclass 500 visa",
    "post-study work visa Australia"
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
    canonical: "/study-destinations/study-in-australia",
  },
  openGraph: {
    title: "Study in Australia - Top Universities & Programs | Crest Study Consult",
    description: "Discover excellent education in Australia. Expert guidance for Australian university admissions, student visas, and academic programs.",
    url: "https://creststudyconsult.com/study-destinations/study-in-australia",
    siteName: "Crest Study Consult",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/hero_image.png",
        width: 1200,
        height: 630,
        alt: "Study in Australia - Crest Study Consult",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Study in Australia - Top Universities & Programs | Crest Study Consult",
    description: "Discover excellent education in Australia. Expert guidance for Australian university admissions, student visas, and academic programs.",
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

export default function StudyInAustraliaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}