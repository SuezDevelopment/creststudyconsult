import type { Metadata } from "next";
import SEO from "@/components/SEO";

export const metadata: Metadata = {
  title: "Privacy Policy - Crest Study Consult",
  description:
    "Understand how Crest Study Consult collects, uses, and protects your personal information in compliance with data protection laws. Your privacy is our priority.",
  keywords:
    "privacy policy, data protection, personal information, student data, NDPA compliance, Crest Study Consult privacy",
  openGraph: {
    title: "Privacy Policy - Crest Study Consult",
    description:
      "Understand how Crest Study Consult collects, uses, and protects your personal information in compliance with data protection laws. Your privacy is our priority.",
    url: "https://creststudyconsult.com/privacy-policy",
    type: "website",
    images: [
      {
        url: "https://creststudyconsult.com/og-image-privacy-policy.jpg",
        width: 1200,
        height: 630,
        alt: "Crest Study Consult Privacy Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - Crest Study Consult",
    description:
      "Understand how Crest Study Consult collects, uses, and protects your personal information in compliance with data protection laws. Your privacy is our priority.",
    images: ["https://creststudyconsult.com/twitter-image-privacy-policy.jpg"],
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
