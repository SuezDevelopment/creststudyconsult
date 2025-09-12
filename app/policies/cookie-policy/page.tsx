"use client";

import { useConsentModal } from "@/hooks/use-consent-modal";
import { Button } from "@/components/ui/button";

export default function CookiePolicy() {
  const { openModal } = useConsentModal();
    
  return (
    <main className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <div className="prose prose-lg mx-auto max-w-3xl">
        <h1 className="mb-4 text-4xl font-bold">Cookie Policy</h1>
        <p className="text-muted-foreground">
          <strong>Effective Date:</strong> September 12, 2025
        </p>

        <p>
          At Crest Study Consult, we use cookies and similar technologies to
          enhance your browsing experience, provide personalized study abroad
          recommendations, and analyze website traffic. This Cookie Policy
          explains what cookies are, how we use them, and how you can manage
          your cookie preferences.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">
          1. What Are Cookies?
        </h2>
        <p>
          Cookies are small text files stored on your device (computer, tablet,
          or phone) when you visit a website. They help websites function
          properly, remember your preferences, and improve user experience.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">
          2. Types of Cookies We Use
        </h2>
        <p>We use the following categories of cookies:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <h3 className="font-semibold">Strictly Necessary Cookies</h3>
            <p>
              These are essential for our website to function (e.g., security,
              load balancing, form submissions). Without them, some services
              cannot be provided.
            </p>
          </li>
          <li>
            <h3 className="font-semibold">Performance & Analytics Cookies</h3>
            <p>
              Collect information about how visitors use our site (e.g., pages
              visited, time spent). Help us improve site performance and
              content.
            </p>
          </li>
          <li>
            <h3 className="font-semibold">Functionality Cookies</h3>
            <p>
              Remember your preferences (e.g., language, study destination
              interests). Enhance personalization of services.
            </p>
          </li>
          <li>
            <h3 className="font-semibold">Targeting & Advertising Cookies</h3>
            <p>
              Used to show relevant study abroad services, events, or partner
              ads. May be placed by third parties like Google or Facebook.
            </p>
          </li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold">
          3. Third-Party Cookies
        </h2>
        <p>
          Some cookies may be set by trusted third parties to deliver services
          such as:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Website analytics (Google Analytics, Meta Pixel).</li>
          <li>Social media integrations (Facebook, LinkedIn).</li>
          <li>Advertising and retargeting platforms.</li>
        </ul>
        <p>
          We do not control these third-party cookies. Please check their
          privacy policies for details.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">
          4. How We Use Cookies
        </h2>
        <p>Cookies help us:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Keep our website secure and functional.</li>
          <li>Understand how users interact with our site.</li>
          <li>Personalize counselling session offers and content.</li>
          <li>
            Provide targeted information about universities, scholarships, and
            visa services.
          </li>
        </ul>

        <h2 className="mt-8 text-2xl font-semibold">
          5. Managing Your Cookie Preferences
        </h2>
        <p>
          You can manage your cookie choices in the following ways:
        </p>
        <div className="mt-4">
          <h3 className="font-semibold">On Our Website:</h3>
          <p>
            Use the Cookie Consent Banner at the bottom of the page to Accept
            All, Reject Non-Essential, or Customize Settings.
          </p>
          <Button onClick={openModal} className="mt-2">
            Open Cookie Preferences Panel
          </Button>
        </div>
        <div className="mt-4">
          <h3 className="font-semibold">Through Your Browser:</h3>
          <p>
            Most browsers allow you to block or delete cookies in settings.
            Examples:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Chrome: Settings &gt; Privacy and Security &gt; Cookies.
            </li>
            <li>
              Safari: Preferences &gt; Privacy &gt; Manage Website Data.
            </li>
            <li>
              Firefox: Options &gt; Privacy & Security &gt; Cookies and Site
              Data.
            </li>
          </ul>
          <p>
            Blocking cookies may affect site performance and limit features.
          </p>
        </div>

        <h2 className="mt-8 text-2xl font-semibold">
          6. Updates to This Policy
        </h2>
        <p>
          We may update this Cookie Policy from time to time to reflect changes
          in technology, law, or our practices. The latest version will always
          be available on our website.
        </p>

        <h2 className="mt-8 text-2xl font-semibold">7. Contact Us</h2>
        <p>
          For questions about this Cookie Policy or how we use cookies:
        </p>
        <div className="mt-4 rounded-lg border bg-gray-50 p-4">
          <p className="font-semibold">Data Protection Officer (DPO)</p>
          <p>Crest Study Consult</p>
          <p>
            📧{" "}
            <a
              href="mailto:privacyofficer@creststudyconsult.com"
              className="text-blue-600 hover:underline"
            >
              privacyofficer@creststudyconsult.com
            </a>
          </p>
          <p>
            📞 <span className="font-semibold">[Insert Phone]</span>
          </p>
        </div>
      </div>
    </main>
  );
}
