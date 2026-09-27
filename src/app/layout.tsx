import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const siteUrl = "https://trademarkinfringementattorney.com";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Trademark Infringement Attorney | Find Legal Help", template: "%s | TrademarkInfringementAttorney.com" },
  description: "Independent trademark information and attorney lead-generation. Explore infringement, disputes, enforcement, defense, and general educational resources.",
  applicationName: "TrademarkInfringementAttorney.com",
  alternates: { canonical: "/" },
  openGraph: { type: "website", url: siteUrl, siteName: "TrademarkInfringementAttorney.com", title: "Trademark Infringement Attorney | Find Legal Help", description: "Connect with attorneys who handle trademark infringement and intellectual property disputes.", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "TrademarkInfringementAttorney.com — independent trademark information" }] },
  twitter: { card: "summary_large_image", title: "Trademark Infringement Attorney | Find Legal Help", description: "Connect with attorneys who handle trademark infringement and intellectual property disputes.", images: ["/opengraph-image"] },
  robots: { index: true, follow: true },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TrademarkInfringementAttorney.com",
  url: siteUrl,
  email: "TrademarkInfringementAttorney@gmail.com",
  description: "Independent legal information and attorney lead-generation platform. Not a law firm and does not provide legal advice.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c") }} />
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
