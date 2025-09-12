import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Study Destinations | Crest Study Consult - Your Gateway to Global Education',
  description: 'Explore top study destinations including USA, Canada, UK, Australia, Germany, Ireland, and New Zealand. Get expert guidance for studying abroad with Crest Study Consult.',
  keywords: [
    'study abroad',
    'international education',
    'study destinations',
    'USA education',
    'Canada universities',
    'UK universities',
    'Australia education',
    'Germany study',
    'Ireland universities',
    'New Zealand education',
    'overseas education',
    'global education',
    'study visa',
    'international students'
  ],
  openGraph: {
    title: 'Study Destinations | Crest Study Consult',
    description: 'Discover the best study destinations worldwide. Expert guidance for studying in USA, Canada, UK, Australia, Germany, Ireland, and New Zealand.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Crest Study Consult',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Study Destinations | Crest Study Consult',
    description: 'Explore top study destinations worldwide with expert guidance from Crest Study Consult.',
  },
  alternates: {
    canonical: '/study-destinations',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function StudyDestinationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
    </>
  );
}