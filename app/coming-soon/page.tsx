import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Coming Soon"
};

export default function ComingSoonPage() {
  return (
    <article className="content-article">
      <h1>Coming Soon</h1>
      <p>
        We’re polishing the GreenHaus app for launch. Come back soon to grab the
        download or join from the hero CTA to get first access.
      </p>
      <p>
        In the meantime, you can review our{" "}
        <Link href="/privacy">Privacy Policy</Link> and{" "}
        <Link href="/terms">Terms of Service</Link>.
      </p>
    </article>
  );
}
