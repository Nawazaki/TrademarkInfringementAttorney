import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand-block">
          <Link className="footer-brand" href="/">TrademarkInfringementAttorney<span>.com</span></Link>
          <p>Independent legal information and attorney lead-generation platform.<br /><strong>Not a law firm. Not legal advice.</strong></p>
          <a className="footer-email" href="mailto:TrademarkInfringementAttorney@gmail.com">TrademarkInfringementAttorney@gmail.com</a>
        </div>
        <div className="footer-links"><h2>Explore</h2><Link href="/about">About</Link><Link href="/contact">Contact</Link><Link href="/for-attorneys">For Attorneys</Link><Link href="/resources">Resources</Link></div>
        <div className="footer-links"><h2>Important</h2><Link href="/disclaimer">Disclaimer</Link><Link href="/privacy-policy">Privacy</Link><Link href="/terms">Terms</Link></div>
      </div>
      <div className="container footer-bottom"><span>© {new Date().getFullYear()} TrademarkInfringementAttorney.com</span><span>For general educational purposes only. Not legal advice.</span></div>
    </footer>
  );
}
