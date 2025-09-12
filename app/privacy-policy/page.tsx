'use client';

import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <div className="prose prose-lg mx-auto max-w-3xl">
        <h1 className="mb-4 text-4xl font-bold">Privacy Policy</h1>

        <div className="rounded-lg border bg-gray-50 p-6">
          <h2 className="mb-4 text-2xl font-semibold">Privacy Snapshot</h2>
          <p>
            At Crest Study Consult, your privacy is our priority. We collect and
            use your personal information only to provide study abroad services
            such as university admissions, visa applications, and scholarship
            guidance. Your data is kept secure, shared only with trusted
            partners when necessary, and never sold. You also have the right to
            access, correct, or request deletion of your information under the
            Nigeria Data Protection Act, 2023 (NDPA).
          </p>
        </div>

        <h2 className="mt-8 text-2xl font-semibold">Introduction</h2>
        <p>
          We understand that your privacy matters. Crest Study Consult is
          committed to protecting your personal information and complying with
          all relevant data protection laws, including the NDPA.
        </p>
        <p>Our approach is simple:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            We only collect the information necessary to provide our services.
          </li>
          <li>We explain clearly how your data is used—no surprises.</li>
          <li>We do not keep your data longer than necessary.</li>
          <li>
            We do not share your information with third parties for marketing
            without your consent.
          </li>
        </ul>
        <p>
          This Privacy Policy explains how we handle your personal information
          when you use our services.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">Who We Are</h2>
        <p>
          Crest Study Consult is an education consultancy firm helping students
          pursue international study opportunities. Our services include
          counselling, admissions, visa support, scholarship guidance, and
          related student services.
        </p>
        <p>
          As a Data Controller, we decide how and why your personal data is
          processed. In certain cases, we may also act as a joint Data
          Controller with universities, embassies, and service providers where
          applications and compliance require shared responsibility.
        </p>
        <div className="mt-4 rounded-lg border bg-gray-50 p-4">
          <p className="font-semibold">Contact Details</p>
          <p>Data Protection Officer (DPO)</p>
          <p>
            📧{" "}
            <a
              href="mailto:privacyofficer@creststudyconsult.com"
              className="text-blue-600 hover:underline"
            >
              privacyofficer@creststudyconsult.com
            </a>
          </p>
          <p>📍 [Insert Office Address]</p>
          <p>📞 [Insert Phone Number]</p>
        </div>

        <h2 className="mt-8 text-2xl font-semibold">
          Information We Collect
        </h2>
        <p>We may collect the following information:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Personal details:</strong> Name, nationality, date of birth,
            passport details.
          </li>
          <li>
            <strong>Contact details:</strong> Email, phone, address.
          </li>
          <li>
            <strong>Academic records:</strong> Certificates, transcripts, test
            scores.
          </li>
          <li>
            <strong>Financial details:</strong> Sponsorship or bank information
            (when required for visa/university applications).
          </li>
          <li>
            <strong>Sensitive data (only when required):</strong> Health or
            medical information for visa or school compliance.
          </li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold">How We Use Your Data</h2>
        <p>We use your information to:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Process admissions and visa applications.</li>
          <li>
            Connect you to scholarships, institutions, and support services.
          </li>
          <li>Provide study abroad counselling and guidance.</li>
          <li>Keep you informed of your application progress.</li>
          <li>Comply with legal and regulatory obligations.</li>
        </ul>
        <p>We will never sell your data.</p>

        <h2 className="mt-8 text-2xl font-semibold">
          Who We Share Your Data With
        </h2>
        <p>We may share data with:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Universities, colleges, and schools.</li>
          <li>Embassies and visa application centres.</li>
          <li>Scholarship and funding organizations.</li>
          <li>
            Trusted service providers (cloud storage, CRM, IT support).
          </li>
        </ul>
        <p>
          All partners and processors are required to comply with strict data
          protection standards.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">Data Retention</h2>
        <p>We retain your personal data only as long as necessary:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Admissions and visa-related data: up to 5–7 years.</li>
          <li>Legal or regulatory data: as required by law.</li>
        </ul>
        <p>After this period, data will be securely deleted or anonymized.</p>

        <h2 className="mt-8 text-2xl font-semibold">Your Rights</h2>
        <p>You have the right to:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Access and request a copy of your data.</li>
          <li>Correct or update inaccurate information.</li>
          <li>Request deletion of data where applicable.</li>
          <li>Restrict or object to processing.</li>
          <li>Request data portability.</li>
          <li>Withdraw consent at any time.</li>
        </ul>
        <p>
          To exercise your rights, contact:{" "}
          <a
            href="mailto:privacyofficer@creststudyconsult.com"
            className="text-blue-600 hover:underline"
          >
            privacyofficer@creststudyconsult.com
          </a>
        </p>

        <h2 className="mt-8 text-2xl font-semibold">
          How We Protect Your Data
        </h2>
        <p>
          We use technical and organizational safeguards including:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Encryption and secure cloud systems.</li>
          <li>Restricted access controls.</li>
          <li>Staff training on data handling.</li>
          <li>Confidential storage of physical files.</li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold">Data Transfers</h2>
        <p>
          Some of our partners (universities, embassies, service providers) are
          based outside Nigeria. Whenever your data is transferred
          internationally, we ensure it is protected through contracts and
          safeguards.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">
          Cookies & Website Data
        </h2>
        <p>
          We use cookies and tracking technologies to improve your experience.
          For details, please see our{" "}
          <Link href="/policies/cookie-policy" className="text-blue-600 hover:underline">
            Cookie Policy
          </Link>
          .
        </p>

        <h2 className="mt-8 text-2xl font-semibold">Complaints & Contact</h2>
        <p>
          If you have concerns about how your data is handled, contact our DPO
          at{" "}
          <a
            href="mailto:privacyofficer@creststudyconsult.com"
            className="text-blue-600 hover:underline"
          >
            privacyofficer@creststudyconsult.com
          </a>
          .
        </p>
        <p>
          If you are unsatisfied, you may escalate the matter to the Nigeria
          Data Protection Commission (NDPC):{" "}
          <a
            href="https://ndpc.gov.ng/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            www.ndpc.gov.ng
          </a>
        </p>

        <h2 className="mt-8 text-2xl font-semibold">
          Updates to this Policy
        </h2>
        <p>
          This policy may be updated from time to time. The latest version will
          always be published on our website.
        </p>
      </div>
    </main>
  );
}