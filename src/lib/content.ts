export type ContentSection = { heading: string; body: string; bullets?: string[] };
export type ContentPage = {
  slug: string;
  title: string;
  meta: string;
  eyebrow: string;
  intro: string;
  sections: ContentSection[];
};

const pages: ContentPage[] = [
  {
    slug: "trademark-infringement",
    title: "Trademark Infringement: An Educational Overview",
    meta: "Learn what trademark infringement generally means, how disputes may arise, and when people consider speaking with a trademark attorney.",
    eyebrow: "Trademark basics",
    intro: "Trademark disputes often begin with a question: could people mistake one business, product, or service for another? The answer depends on the facts and applicable law.",
    sections: [
      { heading: "What is trademark infringement?", body: "In general terms, trademark infringement is the unauthorized use of a mark in a way that may cause confusion about the source, sponsorship, or affiliation of goods or services. The legal analysis is fact-specific; sharing a word or image does not by itself answer the question.", bullets: ["The marks and the goods or services involved", "How and where each mark is used", "The surrounding marketplace and relevant evidence"] },
      { heading: "How a dispute may develop", body: "A concern can surface through customer questions, marketplace notices, a demand letter, an opposition, or a court filing. Different paths have different procedures and deadlines. Keep relevant records and review any formal notice promptly.", bullets: ["Save dated copies of communications and listings", "Note any stated response dates", "Avoid assuming that a search result alone resolves the issue"] },
      { heading: "When to learn more", body: "People on either side of a dispute may choose to speak with an attorney who handles trademark matters. An attorney can assess the particular facts and explain available options. This website does not evaluate individual claims or match users to a specific lawyer." }
    ]
  },
  {
    slug: "trademark-lawyer",
    title: "Trademark Lawyer: Understanding the Role",
    meta: "Explore the kinds of trademark issues a lawyer may handle and general considerations for finding legal help.",
    eyebrow: "Finding legal help",
    intro: "A trademark lawyer may advise individuals and businesses on brand disputes, enforcement, defense, and related procedures. The scope of any engagement is set directly between a client and their attorney.",
    sections: [
      { heading: "Matters trademark lawyers may handle", body: "Depending on their practice, lawyers may advise on cease-and-desist correspondence, infringement claims, opposition or cancellation proceedings, online marketplace issues, licensing, and litigation. Experience and services vary by attorney and jurisdiction." },
      { heading: "Questions to consider", body: "When evaluating legal representation, people commonly ask about relevant experience, who will handle the work, expected scope and fees, conflicts, communication, and timing. Confirm details directly with the lawyer or firm." },
      { heading: "A note about this platform", body: "This independent lead-generation and information platform is not a law firm and does not endorse, rank, or recommend individual lawyers. Directory listings are not yet available. You may submit an inquiry to check future availability in your area." }
    ]
  },
  {
    slug: "trademark-litigation",
    title: "Trademark Litigation: A General Guide",
    meta: "Understand the broad stages that may arise in trademark litigation. General educational information, not legal advice.",
    eyebrow: "Dispute process",
    intro: "Trademark litigation is a court process involving a particular dispute over trademark rights or use. Procedures, schedules, and possible outcomes depend on the court, claims, and facts.",
    sections: [
      { heading: "Common stages", body: "A case may involve pleadings, early motions, discovery, settlement discussions, pretrial proceedings, and a decision or trial. Not every case follows the same sequence, and many disputes resolve before trial." },
      { heading: "Evidence and case management", body: "Relevant materials may include examples of use, sales and advertising records, communications, customer evidence, and registration records. Preservation requirements and deadlines can matter; speak with a qualified attorney about a specific matter." },
      { heading: "Getting oriented", body: "If you receive court papers, note the date and any response deadline and promptly seek advice from counsel licensed to advise on your situation. This page is general education and cannot evaluate a case." }
    ]
  },
  {
    slug: "trademark-dispute",
    title: "Trademark Disputes: Common Issues and Next Steps",
    meta: "A plain-language introduction to trademark disputes, potential points of disagreement, and ways to get oriented.",
    eyebrow: "Dispute process",
    intro: "Trademark disputes can involve competing brand names, logos, product presentation, online listings, or claims about affiliation. The details and context matter.",
    sections: [
      { heading: "Where disagreements arise", body: "Parties may disagree about priority, ownership, the scope of rights, consumer confusion, geographic reach, or whether a use is permitted. Registration records can be relevant but do not answer every question about a dispute." },
      { heading: "Practical recordkeeping", body: "Keep original communications, dates, versions of packaging and webpages, marketplace messages, and documents relating to the marks. Organize records without altering originals, and avoid sharing confidential information through public channels." },
      { heading: "Getting help", body: "An attorney can review the particular facts and explain procedures and options. If you receive a formal legal notice, consider promptly asking counsel about any stated deadline." }
    ]
  },
  {
    slug: "trademark-cease-and-desist",
    title: "Received a Trademark Cease-and-Desist Letter?",
    meta: "General information about trademark cease-and-desist letters, recordkeeping, deadlines, and seeking legal guidance.",
    eyebrow: "Demand letters",
    intro: "A cease-and-desist letter is a demand, not a court judgment. Its claims, requested actions, and any stated deadlines should be considered in context.",
    sections: [
      { heading: "Start by understanding the letter", body: "Identify who sent it, what use or conduct it describes, what it asks you to do, and whether it refers to a deadline or pending proceeding. Do not assume every assertion is established fact, and do not ignore a formal deadline." },
      { heading: "Preserve relevant information", body: "Keep the letter, envelope or delivery details, related emails, product and website records, and documents showing how and when the mark was used. Avoid deleting or changing potentially relevant materials." },
      { heading: "Consider speaking with counsel", body: "A trademark attorney can review the claims and your circumstances and discuss possible responses. This page does not recommend a particular response or substitute for advice from an attorney who can assess your situation." }
    ]
  },
  {
    slug: "trademark-enforcement",
    title: "Trademark Enforcement: An Educational Guide",
    meta: "Learn about common ways trademark owners may monitor and address concerns, and why enforcement decisions are fact-specific.",
    eyebrow: "Protecting a brand",
    intro: "Trademark enforcement describes efforts to address uses a rights holder believes may interfere with its rights. The right approach depends on the rights, evidence, goals, and applicable procedures.",
    sections: [
      { heading: "Monitoring and documentation", body: "A business may track relevant marketplaces, domains, advertising, and customer reports. Keeping dated examples and noting where a use appears can help organize a later discussion with counsel." },
      { heading: "Possible channels", body: "Depending on the circumstances, people may consider direct communication, platform reporting processes, administrative proceedings, or court processes. Each channel has its own requirements, tradeoffs, and potential consequences." },
      { heading: "Proportionate, informed decisions", body: "Before taking action, a rights holder may wish to assess the basis and scope of its rights, the use at issue, and the effect of possible steps. An attorney can provide advice tailored to those facts." }
    ]
  },
  {
    slug: "trademark-defense",
    title: "Trademark Defense: Responding to a Claim",
    meta: "An educational overview of trademark defense issues, recordkeeping, and why individual claims require legal review.",
    eyebrow: "Responding to a claim",
    intro: "A person or business accused of trademark infringement may have questions about the asserted rights, the alleged use, and the process ahead. The answer depends on the record and the law that applies.",
    sections: [
      { heading: "Understand what is alleged", body: "Review which mark, goods or services, channels, and conduct are identified. Keep any correspondence and note deadlines. A demand letter, platform notice, and court complaint are different types of communications." },
      { heading: "Issues an attorney may review", body: "Counsel may consider the parties' rights and dates, the relevant marketplace, the way the marks are used, evidence of confusion, defenses, and procedural requirements. No single factor resolves every dispute." },
      { heading: "Do not rely on general information alone", body: "This overview is not an assessment of any defense or a recommendation about what to say or do. Consider consulting a qualified attorney about the specific claim." }
    ]
  },
  {
    slug: "trademark-dilution",
    title: "Trademark Infringement vs. Trademark Dilution",
    meta: "A general comparison of trademark infringement and dilution concepts, including why their legal requirements differ.",
    eyebrow: "Trademark concepts",
    intro: "Infringement and dilution are distinct legal concepts. Both are context-dependent, and the terminology should not be used to assume that a particular claim is established.",
    sections: [
      { heading: "Infringement in brief", body: "Infringement analysis commonly focuses on whether a use is likely to cause confusion about source, sponsorship, or affiliation in the relevant context." },
      { heading: "Dilution in brief", body: "Dilution laws can address certain uses associated with blurring or tarnishment of a qualifying famous mark, subject to statutory requirements and defenses. The legal standard is different from a typical likelihood-of-confusion inquiry." },
      { heading: "Why the distinction matters", body: "The marks, marketplace, evidence, and legal elements may differ. Only a lawyer who reviews the applicable facts can explain how these concepts might apply to a particular matter." }
    ]
  },
  {
    slug: "trademark-opposition",
    title: "Trademark Opposition Proceedings: An Overview",
    meta: "Learn generally how a trademark opposition can arise during the registration process and where to find procedural information.",
    eyebrow: "Registration disputes",
    intro: "A trademark opposition is a proceeding in which a party asks the relevant trademark office not to register an application. It is different from a court infringement lawsuit.",
    sections: [
      { heading: "Timing and procedure", body: "Opposition procedures include formal filing requirements and deadlines. The applicable office rules and the specific notice control; a deadline should be checked against official sources and counsel." },
      { heading: "What may be disputed", body: "Parties may address issues such as priority, the scope of goods or services, and whether registration would conflict with existing rights. The claims and evidence depend on the proceeding." },
      { heading: "Learn about the specific process", body: "If you receive an official notice, read it carefully and promptly review the stated response period. This site does not file documents or provide representation." }
    ]
  },
  {
    slug: "trademark-cancellation",
    title: "Trademark Cancellation Proceedings: A General Guide",
    meta: "An introduction to trademark cancellation proceedings and issues that may arise when challenging a registration.",
    eyebrow: "Registration disputes",
    intro: "A cancellation proceeding asks a trademark office or tribunal to cancel an existing registration under applicable rules. It is a formal process with specific grounds and procedures.",
    sections: [
      { heading: "How cancellation differs from opposition", body: "An opposition generally concerns a pending application, while a cancellation concerns a registration that has issued. The forum, timing, grounds, and procedural posture matter." },
      { heading: "Evidence and deadlines", body: "A proceeding may involve pleadings, evidence, motions, and deadlines. The available grounds and evidentiary requirements depend on the governing law and the record." },
      { heading: "Where to get guidance", body: "Official tribunal materials explain procedure, while an attorney can advise on a particular case. This educational page does not assess whether a cancellation claim is available." }
    ]
  },
  {
    slug: "trademark-counterfeiting",
    title: "Trademark Counterfeiting: Key Considerations",
    meta: "General information about trademark counterfeiting concerns in physical and online marketplaces.",
    eyebrow: "Marketplace concerns",
    intro: "Counterfeiting generally involves goods presented as genuine goods associated with a mark when they are not. Specific legal definitions and remedies depend on applicable law and facts.",
    sections: [
      { heading: "Potential warning signs", body: "A rights holder may examine product details, seller information, pricing context, packaging, supply chain records, and customer reports. A single feature may not establish whether a product is counterfeit." },
      { heading: "Online marketplace issues", body: "Platforms may offer reporting procedures, but those procedures and their effects vary. Keep screenshots, order information, communications, and product documentation where appropriate." },
      { heading: "Seek advice about a specific matter", body: "A qualified attorney can review the evidence and available processes. This page does not determine whether a specific product or seller is unlawful." }
    ]
  },
  {
    slug: "online-trademark-infringement",
    title: "Online Trademark Infringement: An Overview",
    meta: "Learn about common online trademark concerns involving websites, advertising, marketplaces, and social platforms.",
    eyebrow: "Digital marketplace",
    intro: "Online trademark concerns can involve search advertising, marketplace listings, social media, domains, or content that may suggest an affiliation. Context and platform rules vary.",
    sections: [
      { heading: "Document the online use", body: "Record the URL, date, seller or account information, relevant page content, and any transaction details. Screenshots can help preserve a point-in-time view, though they may not capture the full context." },
      { heading: "Platform policies are not court findings", body: "A platform report may be reviewed under that platform's terms. A platform decision does not necessarily resolve every legal issue between the parties." },
      { heading: "Learn about available options", body: "A trademark attorney can consider the rights and evidence involved. This site does not submit platform reports or evaluate individual listings." }
    ]
  },
  {
    slug: "resources",
    title: "Trademark Resources and Educational Guides",
    meta: "Browse plain-language educational guides about trademark infringement, disputes, enforcement, defense, and registration proceedings.",
    eyebrow: "Resource library",
    intro: "Explore general information about common trademark questions. These materials are educational only and are not a substitute for advice about a particular situation.",
    sections: [
      { heading: "Explore common topics", body: "Use the guides below to learn about concepts and processes at a high level. Official government and tribunal sources provide current procedural requirements; consult a qualified attorney for advice on specific facts." }
    ]
  },
  {
    slug: "attorneys",
    title: "Find a Trademark Attorney",
    meta: "Learn how this independent platform is preparing to connect inquiries with participating trademark attorneys. No listings are currently available.",
    eyebrow: "Attorney directory",
    intro: "This directory is being prepared. No attorney profiles or paid placements are displayed at this time.",
    sections: [
      { heading: "Listings are being added", body: "Attorney listings are being added. Submit your inquiry to see available attorneys serving your area. Submitting an inquiry does not guarantee a response, availability, or representation." }
    ]
  },
  {
    slug: "for-attorneys",
    title: "For Attorneys and Law Firms",
    meta: "Law firms interested in the future participating attorney network can contact TrademarkInfringementAttorney.com.",
    eyebrow: "For law firms",
    intro: "TrademarkInfringementAttorney.com is developing an independent information and lead-generation platform for people seeking help with trademark disputes.",
    sections: [
      { heading: "Participating attorney network", body: "Law firms interested in learning about potential participation may contact us by email. Participation criteria, availability, fees, and any referral arrangements have not yet been established and would be disclosed before the network launches." },
      { heading: "No current attorney listings", body: "There are no attorney profiles, endorsements, rankings, or sponsored listings on the site at this time. Future sponsored or participating placements will be clearly disclosed." }
    ]
  },
  {
    slug: "about",
    title: "About TrademarkInfringementAttorney.com",
    meta: "About this independent trademark legal information and attorney lead-generation platform, and what it does and does not do.",
    eyebrow: "About this platform",
    intro: "TrademarkInfringementAttorney.com is an independent legal information and attorney lead-generation platform intended to help people explore general trademark topics and submit an inquiry about possible legal-service connections.",
    sections: [
      { heading: "Not a law firm", body: "The platform is not a law firm, does not provide legal advice, and does not represent users. No attorney-client relationship is created merely by visiting or using this website." },
      { heading: "No rankings or endorsements", body: "We do not currently list, rank, or recommend individual lawyers. Attorney availability may vary, and contacting an attorney does not guarantee representation." }
    ]
  },
  {
    slug: "contact",
    title: "Contact TrademarkInfringementAttorney.com",
    meta: "Contact the independent TrademarkInfringementAttorney.com platform by email with general questions or law firm inquiries.",
    eyebrow: "Contact",
    intro: "For general questions about the platform or inquiries from law firms, contact us by email. Do not send confidential or time-sensitive legal information through this address.",
    sections: [
      { heading: "Email", body: "You can reach the platform at TrademarkInfringementAttorney@gmail.com. This inbox is not a law firm and cannot provide legal advice or accept representation." },
      { heading: "Need legal advice?", body: "Consider contacting a licensed attorney directly. Do not rely on this site or email to meet any legal deadline." }
    ]
  },
  {
    slug: "disclaimer",
    title: "Legal Disclaimer",
    meta: "Important information about the educational nature of this website, lack of legal advice, and no attorney-client relationship.",
    eyebrow: "Important information",
    intro: "TrademarkInfringementAttorney.com is an independent legal information and attorney lead-generation platform. We are not a law firm and do not provide legal advice.",
    sections: [
      { heading: "No legal advice or representation", body: "Content is for general educational purposes only and is not legal advice. No attorney-client relationship is created merely by using this website, submitting an inquiry, or contacting the platform. Do not treat website content as a substitute for advice from a qualified attorney." },
      { heading: "No guarantee of representation", body: "Submitting an inquiry or contacting an attorney does not guarantee a response, availability, or representation. Attorney availability may vary. Any attorney-client relationship would be formed directly with an attorney or law firm under its own engagement terms." },
      { heading: "Future participating or sponsored attorneys", body: "No attorney listings or sponsored placements are currently shown. If participating or sponsored attorney functionality is introduced, those relationships will be clearly disclosed. Information may change without notice." }
    ]
  },
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    meta: "Learn what information this MVP website processes, how inquiry submissions work before backend integration, and what will need review later.",
    eyebrow: "Your privacy",
    intro: "This MVP does not operate a database or analytics system. Please avoid sending confidential or highly sensitive information through the inquiry form.",
    sections: [
      { heading: "Information submitted through the inquiry form", body: "At this stage, the form does not send information to a website database. Unless a form endpoint is configured, submitting opens a new email draft in your device's email application addressed to TrademarkInfringementAttorney@gmail.com. The draft may contain the information you entered, and you choose whether to send it. Your email provider and device may process that information under their own policies." },
      { heading: "No local storage or sensitive analytics", body: "The site does not intentionally save lead form details in localStorage and does not send form contents to analytics. Form entries remain in page memory while you use the form and are cleared when the page is reset or closed." },
      { heading: "Future service integration", body: "A real email/form service or backend has not yet been selected or configured. Before adding one, this notice should be reviewed and updated to describe the provider, data handling, retention, security, and user choices. Contact us at TrademarkInfringementAttorney@gmail.com with privacy questions." }
    ]
  },
  {
    slug: "terms",
    title: "Terms of Use",
    meta: "Terms governing use of the TrademarkInfringementAttorney.com information and inquiry website.",
    eyebrow: "Terms of use",
    intro: "By using this website, you acknowledge the following general terms. This page is a launch-stage notice and should be reviewed by qualified counsel before commercial operation.",
    sections: [
      { heading: "Informational use only", body: "The site provides general educational information and an inquiry interface. It is not a law firm, does not provide legal advice, and does not create an attorney-client relationship. Do not use this site as a substitute for professional advice or to meet a deadline." },
      { heading: "Inquiries and attorney availability", body: "Submitting an inquiry does not guarantee that an attorney will respond or accept a matter. Attorney availability may vary. Any engagement is directly between you and the attorney or law firm, under separate terms." },
      { heading: "Site content and availability", body: "Content is provided for general information and may not be complete, current, or applicable to your circumstances. The site may change as the platform develops. Use of the site is subject to applicable law." },
      { heading: "Contact", body: "Questions about this website may be sent to TrademarkInfringementAttorney@gmail.com. Do not include confidential or time-sensitive legal information." }
    ]
  }
];

export const contentPages = pages;
export const pageBySlug = Object.fromEntries(pages.map((page) => [page.slug, page])) as Record<string, ContentPage>;
export const educationalPages = pages.filter((page) => !["resources", "attorneys", "for-attorneys", "about", "contact", "disclaimer", "privacy-policy", "terms"].includes(page.slug));
export const practiceLinks = [
  ["Trademark infringement", "/trademark-infringement"],
  ["Cease-and-desist letters", "/trademark-cease-and-desist"],
  ["Trademark litigation", "/trademark-litigation"],
  ["Trademark enforcement", "/trademark-enforcement"],
  ["Trademark defense", "/trademark-defense"],
  ["Trademark dilution", "/trademark-dilution"],
  ["Online infringement", "/online-trademark-infringement"],
  ["Opposition & cancellation", "/trademark-opposition"]
] as const;
export const pageTitle = (slug: string) => pageBySlug[slug]?.title ?? "Trademark information";
