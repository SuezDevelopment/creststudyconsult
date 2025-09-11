import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use - Crest Study Consult",
  description: "Read the terms of use for the Crest Study Consult website.",
};

export default function TermsOfUseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
