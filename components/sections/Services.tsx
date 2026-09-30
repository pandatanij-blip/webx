"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import { development, design, infrastructure } from "@/data/services";
import type { Service } from "@/lib/types";

const serviceCards = [
  { n: "", title: "Web Development", text: "High-performance websites and applications engineered around your goals.", tags: ["Next.js", "WordPress", "Shopify", "Drupal"] },
  { n: "", title: "Digital Design", text: "Distinct visual systems and responsive interfaces designed to make brands memorable.", tags: ["UI / UX", "Landing Pages", "Branding", "Creative"] },
  { n: "", title: "Infrastructure", text: "The technical foundation behind secure, fast and dependable digital experiences.", tags: ["Cloud", "Deployment", "Security", "Performance"] },
];

const infrastructureBenefits: Record<string, string[]> = {
  "Web Hosting Setup": ["Choose hosting that matches traffic, technology and budget.", "Keep website resources easier to manage from one setup.", "Scale hosting as visitors and business requirements grow."],
  "Server Configuration": ["Configure the server around the actual application.", "Keep runtime versions, services and permissions aligned.", "Create a stable base for deployment and maintenance."],
  "Website Migration": ["Move an existing website with a planned migration process.", "Reduce downtime and protect important website data.", "Check redirects, DNS, files and databases after migration."],
  "Domain & DNS Configuration": ["Connect domains correctly to websites and services.", "Manage DNS records for hosting, email and integrations.", "Reduce common domain and routing issues."],
  "SSL Installation & Renewal": ["Keep customer connections encrypted with HTTPS.", "Protect forms, logins and sensitive website traffic.", "Keep certificates monitored so they do not unexpectedly expire."],
  "Business Email Setup": ["Set up professional email on your business domain.", "Configure DNS records for reliable delivery.", "Reduce common email authentication and delivery issues."],
  "Server Security & Hardening": ["Apply practical security settings to reduce avoidable exposure.", "Control access, permissions and unnecessary services.", "Create a safer base for ongoing website operations."],
  "Website Backup & Restore": ["Keep recoverable copies of important website data.", "Reduce the impact of accidental deletion or deployment problems.", "Make restoration a planned process instead of an emergency guess."],
  "Server Monitoring": ["Watch important server and website signals.", "Spot availability or resource issues earlier.", "Support faster troubleshooting when something changes."],
  "Website Performance Optimization": ["Improve loading speed and responsiveness.", "Identify heavy assets, inefficient requests and bottlenecks.", "Create a smoother experience across devices."],
  "Database Management": ["Keep application data organized and maintained.", "Support backups, optimization and routine database tasks.", "Prepare the data layer for growth and integrations."],
  "CDN Configuration": ["Serve static assets closer to users.", "Improve delivery speed for distributed visitors.", "Reduce repeated load on the origin server."],
  "Website Deployment": ["Move tested website builds into production in a controlled way.", "Keep deployment steps repeatable.", "Reduce avoidable release mistakes."],
  "Server Maintenance & Support": ["Handle routine technical maintenance after launch.", "Keep software and infrastructure aligned with the website.", "Provide a path for troubleshooting and ongoing improvements."],
};

type Tab = "Build" | "Design" | "Infrastructure";
const tabData: Record<Tab, { description: string; items: Service[] }> = {
  Build: { description: "Choose the platform that fits your content, ecommerce needs, speed and future growth.", items: development },
  Design: { description: "Create a clear visual direction across websites, campaigns, brands and marketing touchpoints.", items: design },
  Infrastructure: { description: "Keep the technical foundation secure, fast, connected and easier to maintain after launch.", items: infrastructure.map((title) => ({ title, description: infrastructureBenefits[title]?.[0] ?? "Technical support around your website and digital infrastructure.", points: infrastructureBenefits[title] })) },
};

function ServiceModal({ service, onClose }: { service: Service; onClose: () => void }) {
  const points = service.points?.length ? service.points : [service.description];
  return (
    <div className="info-modal" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div className="info-modal__panel" role="dialog" aria-modal="true" aria-labelledby="service-modal-title">
        <button className="info-modal__close" type="button" onClick={onClose} aria-label="Close details">×</button>
        <span className="section-kicker">A QUICK VIEW</span>
        <h3 id="service-modal-title">{service.title}</h3>
        <p className="info-modal__intro">{service.description}</p>
        <ul>{points.map((point) => <li key={point}>{point}</li>)}</ul>
        <button className="btn btn--solid info-modal__action" type="button" onClick={onClose}>Got it</button>
      </div>
    </div>
  );
}

export function ServicesOverview() {
  return (
    <section id="services" className="sec services-overview" aria-labelledby="services-title">
      <div className="wrap">
        <Reveal><div className="section-head"><div><span className="section-kicker">WHAT WE DO</span><h2 id="services-title" className="sec__title">Technology with <em>intent</em></h2></div><p className="sec__lead">From a first idea to a production-ready platform, we bring strategy, design, development and infrastructure into one focused workflow.</p></div></Reveal>
        <div className="service-cards">
          {serviceCards.map((item, index) => <Reveal key={item.n} delay={index * 90}><article className="service-card"><div className="service-card__top"><span className="service-card__arrow">↗</span></div><div><h3>{item.title}</h3><p>{item.text}</p><div className="tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article></Reveal>)}
        </div>
      </div>
    </section>
  );
}

export function Capabilities() {
  const [active, setActive] = useState<Tab>("Build");
  const [selected, setSelected] = useState<Service | null>(null);
  const current = tabData[active];
  return (
    <section id="capabilities" className="sec capabilities" aria-labelledby="capabilities-title">
      <div className="wrap">
        <Reveal><div className="section-head"><div><span className="section-kicker">CAPABILITIES</span><h2 id="capabilities-title" className="sec__title">Built for your next <em>move</em></h2></div><p className="sec__lead">Choose the right mix of build, design and infrastructure for where your business is going next. Use the arrow for a clear client-friendly briefing.</p></div></Reveal>
        <div className="cap-tabs" role="tablist" aria-label="Capabilities">
          {(Object.keys(tabData) as Tab[]).map((tab) => <button key={tab} type="button" role="tab" aria-selected={active === tab} className={active === tab ? "is-active" : ""} onClick={() => setActive(tab)}>{tab}</button>)}
        </div>
        <div className="cap-intro"><span>{current.description}</span><b>{current.items.length} options</b></div>
        <div className="service-rows cap-rows">
          {current.items.map((service, index) => <Reveal key={service.title} delay={Math.min(index, 5) * 35}><article className="service-row"><div><h3>{service.title}</h3><p>{service.description}</p></div><ul>{(service.points ?? []).slice(0, 3).map((point) => <li key={point}>{point.split(".")[0]}</li>)}</ul><button className="service-row__plus" type="button" onClick={() => setSelected(service)} aria-label={`View ${service.title} benefits`} aria-haspopup="dialog">↗</button></article></Reveal>)}
        </div>
      </div>
      {selected && <ServiceModal service={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}

export function DevelopmentServices() { return null; }
export function DesignServices() { return null; }
export function InfrastructureServices() { return null; }
