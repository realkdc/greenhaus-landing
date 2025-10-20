import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy"
};

const SUPPORT_EMAIL = process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "info@indieplantmarketing.com";
const BUILD_DATE = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

export default function PrivacyPolicyPage() {
  return (
    <article className="content-article">
      <h1>Privacy Policy</h1>
      <p className="muted">Last updated: {BUILD_DATE}</p>
      <section>
        <h2>How we protect your privacy</h2>
        <p>
          GreenHaus connects age-verified adults with licensed cannabis
          retailers. We handle personal information only to deliver that service
          responsibly and in line with cannabis regulations.
        </p>
      </section>
      <section>
        <h2>Information we collect</h2>
        <p>We collect just enough to keep the experience safe and compliant:</p>
        <ul>
          <li>Account details used to verify age and secure your profile.</li>
          <li>Order history and loyalty activity so rewards stack correctly.</li>
          <li>
            Optional location details to surface nearby pickup and delivery.
          </li>
          <li>Technical diagnostics that help us keep the platform stable.</li>
        </ul>
      </section>
      <section>
        <h2>How we use information</h2>
        <ul>
          <li>Authenticate 21+ accounts and unlock compliant ordering flows.</li>
          <li>Personalize menus and offers you actually want to see.</li>
          <li>Power pickup, delivery, and support conversations with retailers.</li>
          <li>Review anonymized insights to improve operations and security.</li>
        </ul>
      </section>
      <section>
        <h2>Sharing and retention</h2>
        <p>
          We share data only with licensed retailers and trusted processors that
          enable payments, age verification, and support. Partners are bound to
          our privacy standards. Data is retained only as long as required to
          provide the services or meet legal obligations.
        </p>
      </section>
      <section>
        <h2>Your choices</h2>
        <p>
          Update, export, or request deletion of your profile from within the
          GreenHaus app. You can also adjust marketing preferences or opt out of
          promotional emails at any time.
        </p>
      </section>
      <section>
        <h2>Contact us</h2>
        <p>
          Have questions? Reach the privacy team at{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`}>
            {SUPPORT_EMAIL}
          </a>
          .
        </p>
      </section>
    </article>
  );
}
