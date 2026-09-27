import Link from "next/link";
import { practiceLinks } from "@/lib/content";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="TrademarkInfringementAttorney.com home">
          <span className="brand-mark" aria-hidden="true"><span>™</span></span>
          <span className="brand-name">TrademarkInfringementAttorney<span className="brand-dot">.com</span></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/attorneys">Find an Attorney</Link>
          <div className="nav-dropdown">
            <Link href="/trademark-infringement">Practice Areas</Link>
            <div className="dropdown-panel">{practiceLinks.slice(0, 6).map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div>
          </div>
          <Link href="/resources">Resources</Link>
          <Link href="/for-attorneys">For Attorneys</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <Link className="button button-small header-cta" href="/#intake">Get Legal Help <span aria-hidden="true">↗</span></Link>
        <details className="mobile-menu">
          <summary aria-label="Open navigation menu"><span className="menu-lines" aria-hidden="true"><i></i><i></i></span><span className="sr-only">Menu</span></summary>
          <nav aria-label="Mobile navigation" className="mobile-menu-panel">
            <Link href="/attorneys">Find an Attorney</Link><Link href="/trademark-infringement">Practice Areas</Link><Link href="/resources">Resources</Link><Link href="/for-attorneys">For Attorneys</Link><Link href="/contact">Contact</Link><Link className="button" href="/#intake">Get Legal Help</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
