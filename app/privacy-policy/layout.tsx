import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Crest Study Consult",
  description: "Read the privacy policy for the Crest Study Consult website.",
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}