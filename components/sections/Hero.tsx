import Reveal from "@/components/ui/Reveal";

export default function Hero() {
  return <section className="hero wrap" aria-labelledby="hero-title"><div className="hero__copy"><Reveal><div className="eyebrow">DIGITAL STUDIO · WEB · PRODUCT · INFRASTRUCTURE</div><h1 id="hero-title">We build digital experiences that <span>move business forward</span></h1><p className="hero__lead">WebX is a technology studio creating sharp websites, scalable products and high-performance digital systems for ambitious brands.</p><div className="row hero__actions"><a className="btn btn--solid btn--large" href="#contact">Start a project <span>↗</span></a><a className="btn btn--outline btn--large" href="#services">Explore our work <span>↓</span></a></div><div className="hero__proof">Available for selected projects <i /> <span>Based in India · Working worldwide</span></div></Reveal></div><div className="hero__visual" aria-hidden="true"><div className="hero__orb hero__orb--one" /><div className="hero__orb hero__orb--two" /><div className="hero__grid" /><div className="hero__code"><div className="code__top"><span>webx.system</span><span>● LIVE</span></div><pre>{`const experience = {
  strategy: "clear",
  design: "distinct",
  technology: "scalable",
  performance: 100
};`}</pre><div className="code__line"><span /><span /><span /></div></div><div className="hero__card hero__card--main"><small>BUILD</small><strong>Digital<br />experiences</strong><div className="mini-bar"><span /></div></div><div className="hero__card hero__card--float"><small>PERFORMANCE</small><strong>98.6</strong><span>↑ optimized</span></div></div></section>;
}
