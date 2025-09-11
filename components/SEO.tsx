import Head from "next/head";
import React from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  url?: string;
}

const SEO: React.FC<SEOProps> = ({
  title = "Crest Study Consult - Study Abroad Dreams Made Reality",
  description = "Study Abroad Consultants in Nigeria – Scholarships & Visa Guidance | Crest Study Consult. Transform your future with world-class education. We guide ambitious students to top universities across the globe with personalized consulting and comprehensive support.",
  keywords = "uk, usa, canada, australia, germany, ireland, new zealand, study consultation, study abroad, international education, university consulting, student support, top universities, global education, study overseas, education consulting",
  ogImage = "https://creststudyconsult.com/og-image.jpg", 
  url = "https://creststudyconsult.com",
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Crest Study Consult" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Mobile and SEO */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="UTF-8" />
    </Head>
  );
};

export default SEO;