import type { Metadata } from "next";
import SEO from "@/components/SEO";

export const metadata: Metadata = {
  title: "Blog - Crest Study Consult: Study Abroad Insights & Resources",
  description:
    "Discover expert insights, tips, and resources for studying abroad. Read our comprehensive guides on university applications, visa processes, scholarships, and student life in top destinations.",
  keywords:
    "study abroad blog, international education, university guides, visa tips, scholarship opportunities, student life, education abroad, study destinations, application tips, student resources",
  openGraph: {
    title: "Blog - Crest Study Consult: Study Abroad Insights & Resources",
    description:
      "Discover expert insights, tips, and resources for studying abroad. Read our comprehensive guides on university applications, visa processes, scholarships, and student life in top destinations.",
    url: "https://creststudyconsult.com/blog",
    type: "website",
    images: [
      {
        url: "https://creststudyconsult.com/og-image-blog.jpg",
        width: 1200,
        height: 630,
        alt: "Crest Study Consult Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog - Crest Study Consult: Study Abroad Insights & Resources",
    description:
      "Discover expert insights, tips, and resources for studying abroad. Read our comprehensive guides on university applications, visa processes, scholarships, and student life in top destinations.",
    images: ["https://creststudyconsult.com/twitter-image-blog.jpg"],
  },
  alternates: {
    types: {
      'application/rss+xml': [{ url: '/blog/rss.xml', title: 'Crest Study Consult Blog RSS Feed' }],
    },
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Crest Study Consult Blog",
    "description": "Expert insights and resources for studying abroad",
    "url": "https://creststudyconsult.com/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Crest Study Consult",
      "url": "https://creststudyconsult.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://creststudyconsult.com/crest-logo.png",
        "width": 200,
        "height": 60
      },
      "sameAs": [
        "https://facebook.com/creststudyconsult",
        "https://twitter.com/creststudyconsult",
        "https://linkedin.com/company/creststudyconsult",
        "https://instagram.com/creststudyconsult"
      ]
    },
    "inLanguage": "en-US",
    "copyrightYear": new Date().getFullYear(),
    "copyrightHolder": {
      "@type": "Organization",
      "name": "Crest Study Consult"
    }
  };

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogSchema),
        }}
      />
      {children}
    </>
  );
}