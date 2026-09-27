"use client";

import { FormEvent, useRef, useState } from "react";
import Link from "next/link";

const issueOptions = ["My trademark may be infringed", "I have been accused of trademark infringement", "I received a cease-and-desist letter", "Online trademark infringement", "Counterfeit goods", "Trademark opposition/cancellation", "Trademark litigation", "Other"];
const states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming", "District of Columbia"];
type Lead = { issue: string; state: string; city: string; zip: string; description: string; firstName: string; lastName: string; email: string; phone: string; preferred: string; consent: boolean };
const initialLead: Lead = { issue: "", state: "", city: "", zip: "", description: "", firstName: "", lastName: "", email: "", phone: "", preferred: "Email", consent: false };
const stepNames = ["Your issue", "Location", "Details", "Contact"];

export function LeadForm() {
  const [step, setStep] = useState(0);
  const [lead, setLead] = useState<Lead>(initialLead);
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const update = (key: keyof Lead, value: string | boolean) => setLead((current) => ({ ...current, [key]: value }));
  const stepValid = () => {
    const panel = formRef.current?.querySelector<HTMLElement>(`[data-step="${step}"]`);
    const fields = panel ? Array.from(panel.querySelectorAll<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>("input, select, textarea")) : [];
    const invalid = fields.find((field) => !field.checkValidity());
    if (invalid) { invalid.focus(); invalid.reportValidity(); return false; }
    return true;
  };
  const next = () => { setMessage(""); if (stepValid()) setStep((current) => Math.min(current + 1, 3)); };
  const back = () => { setMessage(""); setStep((current) => Math.max(current - 1, 0)); };
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!stepValid()) return;
    if (!lead.consent) { setMessage("Please provide your consent before continuing."); return; }
    setSending(true); setMessage("");
    const payload = { ...lead, submittedAt: new Date().toISOString() };
    const endpoint = process.env.NEXT_PUBLIC_LEAD_FORM_ENDPOINT?.trim();
    try {
      if (endpoint) {
        const response = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
        if (!response.ok) throw new Error("The form endpoint could not accept your inquiry. Please try again later or email us directly.");
        setMessage("Your inquiry was sent. A response is not guaranteed, and submitting does not create an attorney-client relationship.");
      } else {
        const subject = `Trademark inquiry — ${lead.issue}`;
        const body = ["Trademark inquiry (please do not include confidential information)", "", `Issue: ${lead.issue}`, `Location: ${lead.city}, ${lead.state} ${lead.zip}`, `Description: ${lead.description}`, `Name: ${lead.firstName} ${lead.lastName}`, `Email: ${lead.email}`, `Phone: ${lead.phone || "Not provided"}`, `Preferred contact: ${lead.preferred}`, "Consent to contact: Yes"].join("\n");
        window.location.href = `mailto:TrademarkInfringementAttorney@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setMessage("Your email app should open with a draft. Review it and choose whether to send. If it does not open, email TrademarkInfringementAttorney@gmail.com. Do not include confidential information.");
      }
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "We could not send your inquiry. Please email us directly.");
    } finally { setSending(false); }
  };

  return (
    <section className="lead-card" aria-labelledby="lead-form-title">
      <div className="form-heading"><span className="eyebrow">Start an inquiry</span><h2 id="lead-form-title">Tell us what you need</h2><p>Share a few details to check for potential attorney availability in your area.</p></div>
      <ol className="form-progress" aria-label={`Step ${step + 1} of 4: ${stepNames[step]}`}>{stepNames.map((name, index) => <li key={name} className={index === step ? "active" : index < step ? "complete" : ""}><span>{index < step ? "✓" : index + 1}</span><small>{name}</small></li>)}</ol>
      <form ref={formRef} onSubmit={submit} noValidate>
        {step === 0 && <div data-step="0" className="form-panel"><fieldset><legend>What do you need help with? <span aria-hidden="true">*</span></legend><div className="issue-grid">{issueOptions.map((issue) => <label className={`issue-option ${lead.issue === issue ? "selected" : ""}`} key={issue}><input type="radio" name="issue" value={issue} checked={lead.issue === issue} onChange={(event) => update("issue", event.target.value)} required /><span>{issue}</span></label>)}</div></fieldset></div>}
        {step === 1 && <div data-step="1" className="form-panel"><div className="field-grid"><label className="field">State <span aria-hidden="true">*</span><select required value={lead.state} onChange={(event) => update("state", event.target.value)}><option value="">Select a state</option>{states.map((state) => <option key={state}>{state}</option>)}</select></label><label className="field">City <span aria-hidden="true">*</span><input autoComplete="address-level2" required value={lead.city} onChange={(event) => update("city", event.target.value)} placeholder="City" /></label><label className="field">ZIP code <span aria-hidden="true">*</span><input autoComplete="postal-code" inputMode="numeric" pattern="[0-9]{5}(-[0-9]{4})?" title="Enter a 5-digit ZIP code, optionally followed by a 4-digit extension." required value={lead.zip} onChange={(event) => update("zip", event.target.value)} placeholder="12345" /></label></div></div>}
        {step === 2 && <div data-step="2" className="form-panel"><label className="field">Brief description of the matter <span aria-hidden="true">*</span><textarea required minLength={12} maxLength={1200} rows={6} value={lead.description} onChange={(event) => update("description", event.target.value)} placeholder="Share a brief summary. Please do not include confidential information or documents." /><span className="field-hint">{lead.description.length}/1,200 characters. Do not include passwords, financial details, or confidential legal strategy.</span></label></div>}
        {step === 3 && <div data-step="3" className="form-panel"><div className="field-grid two-columns"><label className="field">First name <span aria-hidden="true">*</span><input autoComplete="given-name" required value={lead.firstName} onChange={(event) => update("firstName", event.target.value)} /></label><label className="field">Last name <span aria-hidden="true">*</span><input autoComplete="family-name" required value={lead.lastName} onChange={(event) => update("lastName", event.target.value)} /></label><label className="field">Email <span aria-hidden="true">*</span><input autoComplete="email" type="email" required value={lead.email} onChange={(event) => update("email", event.target.value)} placeholder="you@example.com" /></label><label className="field">Phone <span className="optional">(optional)</span><input autoComplete="tel" type="tel" value={lead.phone} onChange={(event) => update("phone", event.target.value)} placeholder="(555) 555-5555" /></label><label className="field full-width">Preferred contact method <select value={lead.preferred} onChange={(event) => update("preferred", event.target.value)}><option>Email</option><option>Phone</option></select></label></div><label className="consent"><input type="checkbox" checked={lead.consent} onChange={(event) => update("consent", event.target.checked)} required /><span>I agree to be contacted by participating attorneys regarding my inquiry. <span aria-hidden="true">*</span></span></label><p className="privacy-note">You choose whether to send the email draft. This website does not store inquiry details in a database or localStorage. <Link href="/privacy-policy">Read the privacy policy</Link>.</p></div>}
        {message && <p className="form-message" role="status" aria-live="polite">{message}</p>}
        <div className="form-actions">{step > 0 ? <button className="button button-quiet" type="button" onClick={back}>← Back</button> : <span className="required-note">* Required</span>}{step < 3 ? <button className="button" type="button" onClick={next}>Continue <span aria-hidden="true">→</span></button> : <button className="button" type="submit" disabled={sending}>{sending ? "Preparing…" : "Continue by email"} <span aria-hidden="true">↗</span></button>}</div>
      </form>
      <p className="form-legal">This is not a law firm and does not provide legal advice. Submitting an inquiry does not guarantee representation.</p>
    </section>
  );
}
