import type { Metadata } from "next";
import SEO from "@/components/SEO";

export const metadata: Metadata = {
  title: "Disclaimer - Crest Study Consult",
  description:
    "Read the disclaimer for the Crest Study Consult website. Understand the terms of use, accuracy of information, and our responsibilities.",
  keywords:
    "disclaimer, website disclaimer, terms of use, accuracy of information, Crest Study Consult disclaimer",
  openGraph: {
    title: "Disclaimer - Crest Study Consult",
    description:
      "Read the disclaimer for the Crest Study Consult website. Understand the terms of use, accuracy of information, and our responsibilities.",
    url: "https://creststudyconsult.com/disclaimer",
    type: "website",
    images: [
      {
        url: "https://creststudyconsult.com/og-image-disclaimer.jpg",
        width: 1200,
        height: 630,
        alt: "Crest Study Consult Disclaimer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Disclaimer - Crest Study Consult",
    description:
      "Read the disclaimer for the Crest Study Consult website. Understand the terms of use, accuracy of information, and our responsibilities.",
    images: ["https://creststudyconsult.com/twitter-image-disclaimer.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SEO
        title={metadata.title as string}
        description={metadata.description as string}
        keywords={metadata.keywords as string}
        ogImage={
          (metadata.openGraph?.images as { url: string }[])?.[0]?.url as string
        }
        url={metadata.openGraph?.url as string}
      />
      {children}
    </>
  );
}
