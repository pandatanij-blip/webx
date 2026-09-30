"use client";

import { FormEvent, useState } from "react";
import { site } from "@/data/site";

const initial = { name:"", company:"", email:"", phone:"", service:"", budget:"", details:"", contactMethod:"Email", consent:false };

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState<"idle"|"sending"|"ok"|"error">("idle");
  const update = (key: keyof typeof initial, value: string | boolean) => setForm((current) => ({ ...current, [key]: value }));

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.consent) return;
    setStatus("sending");
    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
    if (!endpoint) { setStatus("ok"); return; }
    try {
      const response = await fetch(endpoint, { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify(form) });
      if (!response.ok) throw new Error("Request failed");
      setStatus("ok"); setForm(initial);
    } catch { setStatus("error"); }
  }

  if (status === "ok") return <section id="contact" className="sec wrap"><div className="form form--ok"><h3>Thanks — your enquiry is ready</h3><p className="sec__lead">We will review the details and get back to you using your preferred contact method.</p><div className="row"><a className="btn btn--solid" href="#main">Back to top</a><a className="btn" href={`mailto:${site.email}`}>Email us</a></div></div></section>;

  return <section id="contact" className="sec wrap" aria-labelledby="contact-title"><div className="split"><div className="contact-copy"><span className="section-kicker">START A PROJECT</span><h2 id="contact-title" className="sec__title">Tell us about your <em>project</em></h2><p className="sec__lead">Share the essentials. We can discuss scope, platform, design, infrastructure and next steps.</p><div className="contact-meta"><a href={`tel:${site.phone.replace(/\D/g, "")}`}><small>Phone</small><strong>{site.phone}</strong></a><a href={`mailto:${site.email}`}><small>Email</small><strong>{site.email}</strong></a></div></div><form className="form" onSubmit={submit}><fieldset className="f"><label htmlFor="name">Name *</label><input id="name" required value={form.name} onChange={(e)=>update("name",e.target.value)} /></fieldset><fieldset className="f"><label htmlFor="company">Company</label><input id="company" value={form.company} onChange={(e)=>update("company",e.target.value)} /></fieldset><fieldset className="f"><label htmlFor="email">Email *</label><input id="email" type="email" required value={form.email} onChange={(e)=>update("email",e.target.value)} /></fieldset><fieldset className="f"><label htmlFor="phone">Phone</label><input id="phone" value={form.phone} onChange={(e)=>update("phone",e.target.value)} /></fieldset><fieldset className="f"><label htmlFor="service">What do you need? *</label><select id="service" required value={form.service} onChange={(e)=>update("service",e.target.value)}><option value="">Select a service</option>{site.services.map((item)=><option key={item}>{item}</option>)}</select></fieldset><fieldset className="f"><label htmlFor="budget">Budget</label><select id="budget" value={form.budget} onChange={(e)=>update("budget",e.target.value)}><option value="">Select a range</option>{site.budgets.map((item)=><option key={item}>{item}</option>)}</select></fieldset><fieldset className="f f--full"><label htmlFor="details">Project details *</label><textarea id="details" rows={5} required value={form.details} onChange={(e)=>update("details",e.target.value)} /></fieldset><fieldset className="f f--full"><legend>Preferred contact method</legend><label className="radio"><input type="radio" name="contactMethod" checked={form.contactMethod === "Email"} onChange={()=>update("contactMethod","Email")} /> Email</label><label className="radio"><input type="radio" name="contactMethod" checked={form.contactMethod === "Phone"} onChange={()=>update("contactMethod","Phone")} /> Phone</label></fieldset><fieldset className="f f--full"><label className="radio"><input type="checkbox" checked={form.consent} onChange={(e)=>update("consent",e.target.checked)} required /> I agree to be contacted about this enquiry.</label></fieldset>{status === "error" && <p className="err f--full">Something went wrong while sending the form. Please email us directly.</p>}<div className="f f--full"><button className="btn btn--solid" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send enquiry"}</button></div></form></div></section>;
}
