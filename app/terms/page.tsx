import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service"
};

const SUPPORT_EMAIL = process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "info@indieplantmarketing.com";
const BUILD_DATE = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

export default function TermsOfServicePage() {
  return (
    <article className="content-article">
      <h1>Terms of Service</h1>
      <p className="muted">Last updated: {BUILD_DATE}</p>
      <section>
        <h2>Using GreenHaus</h2>
        <p>
          By creating an account or accessing the GreenHaus app, you agree to
          these terms and the Privacy Policy. The service is for adults of legal
          purchasing age only, and we verify that you are 21+ before unlocking
          ordering features.
        </p>
      </section>
      <section>
        <h2>Your responsibilities</h2>
        <ul>
          <li>Share accurate information for account setup and age checks.</li>
          <li>Keep login details secure and notify us if anything looks off.</li>
          <li>Use the platform for personal, lawful purchases from licensed retailers.</li>
        </ul>
      </section>
      <section>
        <h2>Ordering with partners</h2>
        <p>
          GreenHaus connects you with licensed dispensaries. Inventory, pricing,
          and pickup or delivery windows come directly from those partners. A
          completed order is an agreement between you and the retailer.
        </p>
      </section>
      <section>
        <h2>Acceptable conduct</h2>
        <p>
          We expect respectful, compliant behavior. No attempts to bypass age
          gates, tamper with the product, or harass dispensary teams. We may
          limit or end access if policies are violated.
        </p>
      </section>
      <section>
        <h2>Disclaimers</h2>
        <p>
          We provide GreenHaus “as is.” Cannabis laws shift quickly, and it’s up
          to you to understand local regulations. We are not liable for indirect
          or consequential damages tied to the service.
        </p>
      </section>
      <section>
        <h2>Changes and contact</h2>
        <p>
          We may update these terms as we launch new features or respond to
          legal changes. We&apos;ll note the effective date above. Questions? Email{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`}>
            {SUPPORT_EMAIL}
          </a>
          .
        </p>
      </section>
    </article>
  );
}
