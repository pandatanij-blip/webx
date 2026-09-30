"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";

type Tech = { name: string; key: string };

const techGroups: Record<string, Tech[]> = {
  "Front End": [
    { name: "React JS", key: "react" },
    { name: "HTML 5", key: "html" },
    { name: "CSS 3", key: "css" },
    { name: "jQuery", key: "jquery" },
    { name: "Bootstrap", key: "bootstrap" },
    { name: "Node.JS", key: "node" },
  ],
  CMS: [
    { name: "WordPress", key: "wordpress" },
    { name: "Shopify", key: "shopify" },
    { name: "Drupal", key: "drupal" },
    { name: "WooCommerce", key: "woo" },
    { name: "Elementor", key: "elementor" },
  ],
  Database: [
    { name: "MySQL", key: "mysql" },
    { name: "PostgreSQL", key: "postgres" },
    { name: "MongoDB", key: "mongo" },
    { name: "Redis", key: "redis" },
  ],
  Framework: [
    { name: "Next.js", key: "next" },
    { name: "Express", key: "express" },
    { name: "Tailwind CSS", key: "tailwind" },
    { name: "REST API", key: "api" },
  ],
};

function TechIcon({ type }: { type: string }) {
  const common = { width: 54, height: 54, viewBox: "0 0 54 54", fill: "none", "aria-hidden": true as const };
  switch (type) {
    case "react":
      return <svg {...common}><ellipse cx="27" cy="27" rx="23" ry="8" stroke="#12BFD0" strokeWidth="3"/><ellipse cx="27" cy="27" rx="23" ry="8" transform="rotate(60 27 27)" stroke="#12BFD0" strokeWidth="3"/><ellipse cx="27" cy="27" rx="23" ry="8" transform="rotate(120 27 27)" stroke="#12BFD0" strokeWidth="3"/><circle cx="27" cy="27" r="4" fill="#12BFD0"/></svg>;
    case "html":
      return <svg {...common}><path d="m8 7 2.4 34L27 47l16.6-6L46 7H8Z" fill="#E44D26"/><path d="m27 12 14 .1-2.1 29-11.9 4.1V12Z" fill="#F16529"/><path d="M15 15h24l-.7 7H22l.4 5h15.2l-1.2 10.4-9.4 2.8-9.5-2.8-.6-7.1h6.2l.3 3.5 3.6 1.1 3.5-1.1.3-2.5H16.1L15 15Z" fill="#fff"/></svg>;
    case "css":
      return <svg {...common}><path d="m8 7 2.4 34L27 47l16.6-6L46 7H8Z" fill="#264DE4"/><path d="m27 12 14 .1-2.1 29-11.9 4.1V12Z" fill="#2965F1"/><path d="M15 15h24l-.5 6H21.5l.3 5h16l-.9 9.9-9.9 2.9-10-2.9-.4-5.7h6.1l.2 2.5 4.1 1.2 4.1-1.2.2-2.8H16.1L15 15Z" fill="#fff"/></svg>;
    case "jquery":
      return <svg {...common}><path d="M9 14c2.4 5.9 7.3 9.4 14.4 9.4 5.3 0 9.4-1.8 12.8-5.2-1.9 5.9-7.1 10-14.3 10C14.5 28.2 9.7 23.6 9 14Z" fill="#0769AD"/><path d="M20 8c2.1 4.5 6 7.1 11.3 7.1 3.1 0 5.6-.8 7.7-2.3-1.5 4.4-5.8 7.3-10.9 7.3C22.7 20.1 19.2 15.8 20 8Z" fill="#78B5E3"/><text x="27" y="46" textAnchor="middle" fontSize="8" fontWeight="700" fill="#78B5E3">jQuery</text></svg>;
    case "bootstrap":
      return <svg {...common}><rect x="9" y="5" width="36" height="44" rx="7" fill="#7952B3"/><path d="M19 13h11.5c5.1 0 8 2.3 8 6.1 0 2.5-1.5 4.5-4 5.3 3 .6 4.9 2.6 4.9 5.5 0 4.6-3.3 7.1-8.9 7.1H19V13Zm6 5v4.6h5c1.7 0 2.7-.8 2.7-2.3 0-1.5-1-2.3-2.7-2.3h-5Zm0 9.3v4.8h5.6c2 0 3.1-.9 3.1-2.4s-1.1-2.4-3.1-2.4H25Z" fill="#fff"/></svg>;
    case "node":
      return <svg {...common}><path d="m27 5 18 10.4v20.8L27 46 9 36.2V15.4L27 5Z" fill="#83CD29"/><path d="M27 10.2 14 17.7v15l13 7.1 13-7.1v-15l-13-7.5Z" fill="#111827"/><text x="27" y="32" textAnchor="middle" fontSize="9" fontWeight="800" fill="#83CD29">JS</text></svg>;
    case "wordpress":
      return <svg {...common}><circle cx="27" cy="27" r="22" fill="#21759B"/><path d="M15 19c2.5-2.7 6.1-4.5 10.6-4.5 2.4 0 4.7.6 6.7 1.7-2.1.1-3.8 1.3-3.8 3.5 0 1.8 1.1 3.2 2.8 5.3 1.4 1.9 2.3 3.4 2.3 5.5 0 2.7-1.6 5.8-3.9 8.4L25 25.8 21.5 36c-3-2.5-4.9-6.4-4.9-10.7 0-2.3.6-4.4 1.6-6.3l-3.2-.1Z" fill="#fff"/></svg>;
    case "shopify":
      return <svg {...common}><path d="M16 14.5 38 11l3 33-17 5-12-4.5L16 14.5Z" fill="#95BF47"/><path d="M22 17c.2-4 2.5-8 6.2-8 3.2 0 4.8 2.4 5.3 4.7l-3.2.8c-.3-1.1-.9-2.1-2.1-2.1-1.4 0-2.2 1.7-2.3 3.2L22 17Z" fill="#5E8E3E"/><path d="M27 25c-2.5-.1-3.9 1.2-3.9 2.7 0 1.6 1.5 2.1 3.7 2.9 2.8 1 4.2 2.4 4.2 4.7 0 3.6-3.2 5.7-7.4 5.7-2.4 0-4.7-.7-6.2-1.6l1-3.7c1.6 1 3.4 1.6 5.3 1.6 1.8 0 2.9-.7 2.9-1.7 0-1.2-1-1.7-3.2-2.5-2.8-1-4.7-2.5-4.7-5 0-3.2 2.8-5.7 7.4-5.7 2.3 0 4.1.5 5.5 1.2l-1.1 3.6c-1.2-.7-2.5-1.1-3.5-1.2Z" fill="#fff"/></svg>;
    case "drupal":
      return <svg {...common}><path d="M27 6c2.2 5.4 8.5 5.5 12.1 9.5C43 19.9 43.5 27 41 32.8 38.5 39 33 43 27 43s-11.5-4-14-10.2C10.5 27 11 19.9 14.9 15.5 18.5 11.5 24.8 11.4 27 6Z" fill="#0678BE"/><circle cx="27" cy="27" r="7" fill="#fff"/><circle cx="27" cy="27" r="3" fill="#0678BE"/></svg>;
    case "woo":
      return <svg {...common}><path d="M8 16c0-4.4 3.6-8 8-8h22c4.4 0 8 3.6 8 8v20c0 4.4-3.6 8-8 8H16c-4.4 0-8-3.6-8-8V16Z" fill="#96588A"/><path d="M16 20c-2.2 0-3.5 1.6-3.5 4.3 0 5.4 4.4 10.7 8.7 10.7 2.1 0 3.7-1.2 5-3.3 1.2 2.1 2.9 3.3 5 3.3 4.3 0 8.7-5.3 8.7-10.7 0-2.7-1.3-4.3-3.5-4.3-2.5 0-4.5 2.2-5.7 5.8-1.1-3.6-3.1-5.8-5.7-5.8-2.5 0-4.5 2.2-5.7 5.8C20.5 22.2 18.5 20 16 20Z" fill="#fff"/></svg>;
    case "elementor":
      return <svg {...common}><rect x="9" y="7" width="36" height="40" rx="5" fill="#92003B"/><path d="M18 18h3v18h-3V18Zm7 0h11v3H25v-3Zm0 7h9v3h-9v-3Zm0 8h11v3H25v-3Z" fill="#fff"/></svg>;
    case "mysql":
      return <svg {...common}><path d="M10 38c4-7 8-13 15-14 6-1 8-7 13-10" stroke="#00758F" strokeWidth="4" strokeLinecap="round"/><text x="27" y="46" textAnchor="middle" fontSize="7" fontWeight="800" fill="#F29111">MySQL</text></svg>;
    case "postgres":
      return <svg {...common}><path d="M18 39c-3-5-4-13-2-20 1-5 5-8 11-8s10 3 11 8c2 7 1 15-2 20-1 2-3 3-5 2-2-1-2-4-1-7-2 2-4 4-7 4-2 0-4-1-5-3Z" fill="#336791"/><circle cx="24" cy="22" r="1.5" fill="#fff"/><circle cx="33" cy="22" r="1.5" fill="#fff"/></svg>;
    case "mongo":
      return <svg {...common}><path d="M27 5c-2 8-9 11-9 20 0 8 4 14 9 19 5-5 9-11 9-19 0-9-7-12-9-20Z" fill="#47A248"/><path d="M27 25v19" stroke="#fff" strokeWidth="2"/></svg>;
    case "redis":
      return <svg {...common}><path d="m8 24 19-8 19 8-19 8-19-8Z" fill="#DC382D"/><path d="m8 24v7l19 8 19-8v-7l-19 8-19-8Z" fill="#A41E11"/><path d="M15 21.5 27 17l12 4.5-12 4.5-12-4.5Z" fill="#fff"/></svg>;
    case "next":
      return <svg {...common}><circle cx="27" cy="27" r="21" fill="#fff"/><path d="M18 36V18h3l12 12V18h3v18h-3L21 24v12h-3Z" fill="#070A12"/><path d="m31 34 6 6" stroke="#070A12" strokeWidth="2"/></svg>;
    case "express":
      return <svg {...common}><path d="M10 37c7-15 14-22 34-22-9 5-15 12-19 22H10Z" fill="#fff"/><path d="M11 40c7-8 14-11 29-10" stroke="#12BFD0" strokeWidth="3"/></svg>;
    case "tailwind":
      return <svg {...common}><path d="M12 27c3.5-7 8.2-10.5 14-10.5 8.7 0 7.5 7 12 7 2.4 0 4.4-1.2 6-3.5-3.5 7-8.2 10.5-14 10.5-8.7 0-7.5-7-12-7-2.4 0-4.4 1.2-6 3.5Z" fill="#38BDF8"/><path d="M12 39c3.5-7 8.2-10.5 14-10.5 8.7 0 7.5 7 12 7 2.4 0 4.4-1.2 6-3.5-3.5 7-8.2 10.5-14 10.5-8.7 0-7.5-7-12-7-2.4 0-4.4 1.2-6 3.5Z" fill="#38BDF8"/></svg>;
    default:
      return <svg {...common}><circle cx="27" cy="27" r="20" fill="#1769E0"/><path d="M18 27h18M27 18v18" stroke="#fff" strokeWidth="3" strokeLinecap="round"/></svg>;
  }
}

export default function Technology() {
  const tabs = Object.keys(techGroups);
  const [active, setActive] = useState(tabs[0]);
  return (
    <section id="technology" className="technology sec" aria-labelledby="technology-title">
      <div className="wrap">
        <Reveal>
          <div className="technology__heading">
            <span className="section-kicker">TECHNOLOGY</span>
            <h2 id="technology-title" className="tech-title">Technologies we work with</h2>
            <p>We choose practical, proven technologies to create fast, maintainable and scalable digital experiences. The right stack depends on your goals, content, integrations and future growth.</p>
          </div>
        </Reveal>

        <div className="tech-tabs" role="tablist" aria-label="Technology categories">
          {tabs.map((tab) => (
            <button key={tab} role="tab" aria-selected={active === tab} className={active === tab ? "is-active" : ""} onClick={() => setActive(tab)}>
              {tab}
            </button>
          ))}
        </div>

        <div className="tech-grid" role="tabpanel">
          {techGroups[active].map((tech, index) => (
            <Reveal key={tech.name} delay={index * 45}>
              <article className="tech-card">
                <div className="tech-card__icon"><TechIcon type={tech.key} /></div>
                <span>{tech.name}</span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
