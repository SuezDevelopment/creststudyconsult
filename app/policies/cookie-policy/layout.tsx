import type { Metadata } from "next";
import SEO from "@/components/SEO";

export const metadata: Metadata = {
  title: "Cookie Policy - Crest Study Consult",
  description:
    "Learn about how Crest Study Consult uses cookies to enhance your browsing experience, provide personalized recommendations, and analyze website traffic.",
  keywords:
    "cookie policy, cookies, privacy, data protection, Crest Study Consult",
  openGraph: {
    title: "Cookie Policy - Crest Study Consult",
    description:
      "Learn about how Crest Study Consult uses cookies to enhance your browsing experience, provide personalized recommendations, and analyze website traffic.",
    url: "https://creststudyconsult.com/policies/cookie-policy",
    type: "website",
    images: [
      {
        url: "https://creststudyconsult.com/og-image-cookie-policy.jpg",
        width: 1200,
        height: 630,
        alt: "Crest Study Consult Cookie Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Policy - Crest Study Consult",
    description:
      "Learn about how Crest Study Consult uses cookies to enhance your browsing experience, provide personalized recommendations, and analyze website traffic.",
    images: ["https://creststudyconsult.com/twitter-image-cookie-policy.jpg"],
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
