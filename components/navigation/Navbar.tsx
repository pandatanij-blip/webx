"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/data/site";

export default function Navbar() {
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);
  const [light, setLight] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const saved = window.localStorage.getItem("webx-theme");
    const useLight = saved ? saved === "light" : false;
    setLight(useLight);
    document.documentElement.dataset.theme = useLight ? "light" : "dark";
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);
  const toggleTheme = () => {
    const next = !light;
    setLight(next);
    document.documentElement.dataset.theme = next ? "light" : "dark";
    window.localStorage.setItem("webx-theme", next ? "light" : "dark");
  };

  return (
    <header className={`nav ${compact ? "nav--compact" : ""}`}>
      <div className="wrap nav__bar">
        <a className="logo" href="#main" onClick={close} aria-label="WebX home"><img src="/images/WebX_logo_original.png" alt="WebX" /></a>
        <div className="nav__right">
          <nav id="primary-navigation" className={`nav__links ${open ? "is-open" : ""}`} aria-label="Primary navigation">
            {nav.slice(0, 5).map((item) => <a key={item.href} href={item.href} onClick={close}>{item.label}</a>)}
          </nav>
          <div className="nav__contact" aria-label="WebX contact details">
            <a href={`tel:${site.phone.replace(/\D/g, "")}`}>{site.phone}</a>
            <span aria-hidden="true" />
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </div>
          <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={`Switch to ${light ? "night" : "day"} mode`} title={`Switch to ${light ? "night" : "day"} mode`}><span>{light ? "☾" : "☀"}</span><b>{light ? "Night" : "Day"}</b></button>
          <a className="btn btn--solid nav__cta" href="#contact" onClick={close}>Start a project <span>↗</span></a>
        </div>
        <button className="nav__toggle" type="button" aria-expanded={open} aria-controls="primary-navigation" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((value) => !value)}><span /><span /><span /></button>
      </div>
    </header>
  );
}
