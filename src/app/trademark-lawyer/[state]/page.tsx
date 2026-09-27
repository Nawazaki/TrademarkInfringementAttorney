import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const siteUrl = "https://trademarkinfringementattorney.com";
const states = [
  { slug: "california", name: "California", note: "Businesses operating in California may encounter federal trademark questions as well as state-specific issues. The facts, forum, and scope of any rights matter." },
  { slug: "new-york", name: "New York", note: "Trademark matters involving New York may arise in local, national, or online markets. A lawyer can assess the relevant facts and applicable procedures." },
  { slug: "texas", name: "Texas", note: "Trademark disputes connected to Texas can involve businesses, products, or online activity reaching across state lines. Jurisdiction and marketplace context can be important." },
  { slug: "florida", name: "Florida", note: "People and businesses in Florida may have questions about enforcement, defense, demand letters, or registration proceedings. Each situation calls for an individual review." },
  { slug: "illinois", name: "Illinois", note: "Trademark issues in Illinois may involve local business activity or broader online and interstate commerce. Available legal services and attorney availability vary." },
];
type Props = { params: Promise<{ state: string }> };
export function generateStaticParams() { return states.map(({ slug }) => ({ state: slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state } = await params; const entry = states.find((item) => item.slug === state); if (!entry) return {};
  const title = `Trademark Lawyer in ${entry.name} | General Information`;
  const description = `Explore general trademark dispute information for ${entry.name} and submit an inquiry to check for potential attorney availability. Not legal advice.`;
  return { title, description, alternates: { canonical: `/trademark-lawyer/${state}` }, openGraph: { title, description, url: `${siteUrl}/trademark-lawyer/${state}`, siteName: "TrademarkInfringementAttorney.com", type: "website" }, twitter: { card: "summary", title, description } };
}
export default async function StatePage({ params }: Props) {
  const { state } = await params; const entry = states.find((item) => item.slug === state); if (!entry) notFound();
  const title = `Trademark Lawyer in ${entry.name}`;
  const schema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteUrl }, { "@type": "ListItem", position: 2, name: "Trademark Lawyer", item: `${siteUrl}/trademark-lawyer` }, { "@type": "ListItem", position: 3, name: entry.name, item: `${siteUrl}/trademark-lawyer/${state}` }] };
  return <main id="main-content" className="content-page"><div className="container"><nav className="breadcrumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/trademark-lawyer">Trademark Lawyer</Link><span>/</span><span aria-current="page">{entry.name}</span></nav><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} /></div><section className="content-hero"><div className="container content-hero-inner"><span className="eyebrow">State resource · {entry.name}</span><h1>{title}</h1><p>{entry.note}</p><Link className="button button-accent" href="/#intake">Get Legal Help <span aria-hidden="true">↗</span></Link></div></section><section className="container state-content"><div className="article-section"><span className="article-index">01</span><div><h2>Trademark issues can cross state lines</h2><p>Trademark rights and disputes can involve national registration systems, online marketplaces, and activity in more than one state. The applicable legal questions depend on the facts, the parties, and the procedures involved.</p></div></div><div className="article-section"><span className="article-index">02</span><div><h2>Explore the general topic</h2><p>Learn about <Link href="/trademark-infringement">trademark infringement</Link>, <Link href="/trademark-cease-and-desist">cease-and-desist letters</Link>, or <Link href="/trademark-dispute">trademark disputes</Link>. These resources are educational and do not evaluate any individual matter.</p></div></div><div className="state-empty"><h2>Attorney availability varies by location.</h2><p>There are no attorney profiles or endorsements on this site yet. Submit an inquiry to check for potential future availability in {entry.name}.</p><Link className="button" href="/#intake">Submit an inquiry <span aria-hidden="true">↗</span></Link></div><p className="education-notice">This information is for general educational purposes only and is not legal advice. This website is not a law firm.</p></section></main>;
}
