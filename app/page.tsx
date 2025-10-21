import QR from "../components/QR";

// Read environment variables with fallback logic
const APPSTORE_URL = process.env.NEXT_PUBLIC_APPSTORE_URL || "";
const TESTFLIGHT_URL = process.env.NEXT_PUBLIC_TESTFLIGHT_URL || "";
const DOWNLOAD_URL = APPSTORE_URL || TESTFLIGHT_URL || "/coming-soon";
const hasAppLink = !!(APPSTORE_URL || TESTFLIGHT_URL);

const heroPoints = [
  "Age-gated profiles unlock exclusive offers and express pickup.",
  "Rewards stack automatically every time verified shoppers check out.",
  "Data stays compliant from verification to fulfillment."
];

const benefits = [
  {
    title: "Age-gated by design",
    copy:
      "21+ profiles unlock exclusive offers and express pickup in a secure, compliant flow."
  },
  {
    title: "Data handled responsibly",
    copy:
      "Only what’s needed to personalize menus, fulfill orders, and keep you compliant."
  },
  {
    title: "Partners that grow with you",
    copy:
      "Insights, operations, and marketing support built for regulated markets."
  }
];

export default function HomePage() {
  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-copy">
          <span className="hero-badge">Verified cannabis retail</span>
          <h1 className="hero-title">GreenHaus</h1>
          <p className="hero-subhead">
            Rewards that stack. Pickup in seconds. Built for compliant cannabis
            retail teams who want to move faster.
          </p>
          <ul className="hero-list">
            {heroPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <div className="hero-cta-group">
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <a 
                className="primary-button" 
                href={DOWNLOAD_URL}
              >
                Download the GreenHaus App
              </a>
              {hasAppLink && (
                <div style={{ flexShrink: 0 }}>
                  <QR
                    url={DOWNLOAD_URL}
                    alt="Quick download QR code"
                    size={48}
                  />
                </div>
              )}
            </div>
            <a className="ghost-button" href="#benefits">
              See how it works
            </a>
          </div>
        </div>
        <div className="hero-card" role="group" aria-label="Download options">
          <div>
            <p className="hero-card-eyebrow">Launch ready</p>
            <h2>Scan and join the early access list.</h2>
            <p className="hero-card-copy">
              We’ll notify you the moment the app drops and load your account
              with day-one rewards.
            </p>
          </div>
          <div className="hero-card-qr">
            <QR
              url={DOWNLOAD_URL}
              alt="QR code linking to the GreenHaus app download"
            />
          </div>
          <p className="hero-card-footer">Or tap the button to get started.</p>
        </div>
      </section>
      <section
        className="benefits-section"
        aria-labelledby="benefits-heading"
        id="benefits"
      >
        <div className="section-intro">
          <p className="eyebrow">Built for regulated retail</p>
          <h2 id="benefits-heading" className="section-title">
            Rewards that stack with compliance baked in.
          </h2>
          <p className="section-summary">
            Modern cannabis retail needs express age verification, thoughtful
            data practices, and partners who align with your operations. That’s
            GreenHaus.
          </p>
        </div>
        <div className="benefit-grid">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="benefit-card">
              <h3>{benefit.title}</h3>
              <p>{benefit.copy}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="footer-cta" aria-labelledby="cta-heading">
        <div className="footer-cta-card">
          <p className="eyebrow">Stay in the loop</p>
          <h2 id="cta-heading">Launch updates straight to your inbox.</h2>
          <p>
            We’re wrapping up the final touches. Drop your email inside the app
            once it’s live and get rewarded for being first.
          </p>
          <a 
            className="secondary-button" 
            href={DOWNLOAD_URL}
          >
            Download the GreenHaus App
          </a>
        </div>
      </section>
    </div>
  );
}
