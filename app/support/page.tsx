import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support"
};

const SUPPORT_EMAIL = process.env.NEXT_PUBLIC_SUPPORT_EMAIL || "info@indieplantmarketing.com";
const BUILD_DATE = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });

export default function SupportPage() {
  return (
    <article className="content-article">
      <h1>Support</h1>
      <p className="muted">Last updated: {BUILD_DATE}</p>
      
      <section>
        <h2>Get Help</h2>
        <p>
          We&apos;re here to help you with any questions or issues you might have with GreenHaus. 
          Our support team is available to assist with account setup, ordering, and technical issues.
        </p>
      </section>

      <section>
        <h2>Common Questions</h2>
        <div>
          <h3>How do I create an account?</h3>
          <p>
            Download the GreenHaus app and follow the age verification process. 
            You&apos;ll need to provide valid identification to confirm you&apos;re 21 or older.
          </p>
        </div>
        
        <div>
          <h3>How does age verification work?</h3>
          <p>
            We use secure, third-party verification services to confirm your age 
            and identity. This is required by law for cannabis retail platforms.
          </p>
        </div>
        
        <div>
          <h3>Can I change my pickup location?</h3>
          <p>
            Yes, you can update your preferred dispensary location at any time 
            in the app settings. This will show you nearby retailers and their 
            available products.
          </p>
        </div>
        
        <div>
          <h3>How do rewards work?</h3>
          <p>
            Earn points with every purchase at participating dispensaries. 
            Points can be redeemed for discounts on future orders. 
            Rewards stack across all partner locations.
          </p>
        </div>
      </section>

      <section>
        <h2>Technical Support</h2>
        <p>
          Having trouble with the app? Try these steps first:
        </p>
        <ul>
          <li>Make sure you have the latest version of the app</li>
          <li>Check your internet connection</li>
          <li>Restart the app and try again</li>
          <li>Clear the app cache in your device settings</li>
        </ul>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          Still need help? Our support team is here for you:
        </p>
        <p>
          Email us at{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`}>
            {SUPPORT_EMAIL}
          </a>
          {" "}and we&apos;ll get back to you within 24 hours.
        </p>
        <p>
          For urgent issues, please include your account email and a brief 
          description of the problem you&apos;re experiencing.
        </p>
      </section>

      <section>
        <h2>Feedback</h2>
        <p>
          We&apos;re always working to improve GreenHaus. If you have suggestions 
          for new features or ways we can make the experience better, 
          we&apos;d love to hear from you at{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`}>
            {SUPPORT_EMAIL}
          </a>
          .
        </p>
      </section>
    </article>
  );
}
