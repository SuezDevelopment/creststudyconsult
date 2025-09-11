import type { Metadata } from "next";
import SEO from "@/components/SEO";

export const metadata: Metadata = {
  title: "FAQ - Crest Study Consult",
  description:
    "Find answers to frequently asked questions about studying abroad with Crest Study Consult. Get information on university applications, visas, scholarships, and more.",
  keywords:
    "faq, study abroad faq, university application faq, student visa faq, scholarship faq, Crest Study Consult faq",
  openGraph: {
    title: "FAQ - Crest Study Consult",
    description:
      "Find answers to frequently asked questions about studying abroad with Crest Study Consult. Get information on university applications, visas, scholarships, and more.",
    url: "https://creststudyconsult.com/faq",
    type: "website",
    images: [
      {
        url: "https://creststudyconsult.com/og-image-faq.jpg",
        width: 1200,
        height: 630,
        alt: "Crest Study Consult FAQ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ - Crest Study Consult",
    description:
      "Find answers to frequently asked questions about studying abroad with Crest Study Consult. Get information on university applications, visas, scholarships, and more.",
    images: ["https://creststudyconsult.com/twitter-image-faq.jpg"],
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
