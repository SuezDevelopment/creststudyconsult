import type { Metadata } from "next";
import SEO from "@/components/SEO";

export const metadata: Metadata = {
  title: "Privacy Notice - Crest Study Consult",
  description:
    "Read our comprehensive Privacy Notice to understand how Crest Study Consult collects, uses, and protects your personal data in compliance with the Nigeria Data Protection Act, 2023.",
  keywords:
    "privacy notice, privacy policy, data protection, personal data, NDPA compliance, data security, Crest Study Consult privacy",
  openGraph: {
    title: "Privacy Notice - Crest Study Consult",
    description:
      "Read our comprehensive Privacy Notice to understand how Crest Study Consult collects, uses, and protects your personal data in compliance with the Nigeria Data Protection Act, 2023.",
    url: "https://creststudyconsult.com/policies/privacy-notice",
    type: "website",
    images: [
      {
        url: "https://creststudyconsult.com/og-image-privacy-notice.jpg",
        width: 1200,
        height: 630,
        alt: "Crest Study Consult Privacy Notice",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Notice - Crest Study Consult",
    description:
      "Read our comprehensive Privacy Notice to understand how Crest Study Consult collects, uses, and protects your personal data in compliance with the Nigeria Data Protection Act, 2023.",
    images: ["https://creststudyconsult.com/twitter-image-privacy-notice.jpg"],
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