"use client";

import { useState } from "react";

const links = [
  { label: "WhatsApp", href: "https://wa.me/919971833801", icon: "whatsapp" },
  { label: "Email", href: "mailto:hello@webx.com", icon: "email" },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: "linkedin" },
  { label: "Instagram", href: "https://www.instagram.com/", icon: "instagram" },
  { label: "Portfolio", href: "https://example.com/portfolio", icon: "portfolio" },
];

function Icon({ type }: { type: string }) {
  const props = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", "aria-hidden": true as const };
  switch (type) {
    case "whatsapp":
      return <svg {...props}><path d="M20.5 11.6a8.4 8.4 0 0 1-12.5 7.3L3.5 20l1.2-4.3a8.4 8.4 0 1 1 15.8-4.1Z" stroke="currentColor" strokeWidth="1.7"/><path d="M8.4 8.2c.3-.5.6-.5 1-.4l1.1 2.4c.1.3.1.5-.1.7l-.7.7c.6 1.2 1.6 2.1 2.8 2.7l.7-.7c.2-.2.4-.2.7-.1l2.4 1.1c.4.2.4.6.2 1-.4.8-1.1 1.2-1.9 1.1-3.8-.6-6.8-3.6-7.4-7.4-.1-.8.3-1.5 1.2-2Z" fill="currentColor"/></svg>;
    case "email":
      return <svg {...props}><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.7"/><path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>;
    case "linkedin":
      return <svg {...props}><rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.7"/><path d="M8 10v6M8 7.5v.1M11.5 16v-3.1a2.4 2.4 0 0 1 4.8 0V16M11.5 10v6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>;
    case "instagram":
      return <svg {...props}><rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.7"/><circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.7"/><circle cx="17.3" cy="6.8" r=".8" fill="currentColor"/></svg>;
    default:
      return <svg {...props}><circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.7"/><path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg>;
  }
}

export default function FloatingContact() {
  const [open, setOpen] = useState(false);
  return (
    <div className={`floating-contact ${open ? "is-open" : ""}`}>
      <div className="floating-contact__links" aria-hidden={!open}>
        {links.map((item) => <a key={item.label} className="floating-contact__link" href={item.href} target={item.href.startsWith("http") && !item.href.startsWith("https://wa.me") ? "_blank" : undefined} rel="noreferrer" tabIndex={open ? 0 : -1} aria-label={item.label} title={item.label}><Icon type={item.icon} /><span>{item.label}</span></a>)}
      </div>
      <button className="floating-contact__toggle" type="button" aria-expanded={open} aria-label={open ? "Close contact links" : "Open contact links"} onClick={() => setOpen((value) => !value)}>
        <span className="floating-contact__bubble"><Icon type="email" /></span><span className="floating-contact__close">×</span>
      </button>
    </div>
  );
}
