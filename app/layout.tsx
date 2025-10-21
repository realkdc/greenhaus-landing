import type { Metadata, Viewport } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://greenhaus.app"),
  title: {
    default: "GreenHaus",
    template: "%s · GreenHaus"
  },
  description:
    "Verified cannabis retail with rewards that stack, responsible data practices, and express pickup."
  ,
  keywords: [
    "GreenHaus",
    "cannabis retail",
    "dispensary app",
    "age verified cannabis",
    "express pickup"
  ],
  openGraph: {
    title: "GreenHaus",
    description:
      "Verified cannabis retail. Rewards that stack. Pickup in seconds.",
    url: "/",
    siteName: "GreenHaus",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "GreenHaus brand preview"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "GreenHaus",
    description:
      "Verified cannabis retail. Rewards that stack. Pickup in seconds.",
    images: ["/og.png"]
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/icon.png"
  }
};

export const viewport: Viewport = {
  themeColor: "#0b1927"
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a className="skip-to-content" href="#main-content">
          Skip to main content
        </a>
        <div className="app-shell">
          <main id="main-content" className="site-main">
            {children}
          </main>
          <footer className="site-footer">
            <nav aria-label="Legal">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
              <Link href="/support">Support</Link>
            </nav>
            <p className="footer-note">
              © {new Date().getFullYear()} GreenHaus. All rights reserved.
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
