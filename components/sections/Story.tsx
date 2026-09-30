import Reveal from "@/components/ui/Reveal";
import { process, why } from "@/data/services";

export function WhyWebX() {
  return <section id="why" className="sec story wrap" aria-labelledby="why-title"><Reveal><div className="section-head"><div><span className="section-kicker">WHY WEBX</span><h2 id="why-title" className="sec__title">Not just another <em>website</em></h2></div><p className="sec__lead">We connect creative thinking with technical execution, so the final experience feels as good as it performs.</p></div></Reveal><div className="why-grid">{why.map((item, index) => <Reveal key={item.title} delay={index * 70}><article><h3>{item.title}</h3><p>{item.description}</p></article></Reveal>)}</div></section>;
}

export function Process() {
  return <section className="sec process-section" aria-labelledby="process-title"><div className="wrap"><Reveal><div className="section-head"><div><span className="section-kicker">HOW WE WORK</span><h2 id="process-title" className="sec__title">Simple process<br /><em>Serious output</em></h2></div><p className="sec__lead">A clear milestone-based journey from discovery to launch, with one focused step at a time.</p></div></Reveal><div className="process-track"><div className="process-line" />{process.map((item, index) => <Reveal key={item.title} delay={index * 55}><article className="milestone"><div className="milestone__dot"></div><div className="milestone__card"><small>PROJECT MILESTONE</small><h3>{item.title}</h3><p>{item.description}</p></div></article></Reveal>)}</div></div></section>;
}

export function FinalCTA() {
  return <section className="cta" aria-labelledby="cta-title"><div className="cta__noise" /><div className="wrap cta__inner"><span className="section-kicker">READY WHEN YOU ARE</span><h2 id="cta-title">Have an idea worth <em>building?</em></h2><p>Tell us what you need. We will help shape the right platform, design and technical path.</p><div className="cta-points"><span>Strategy</span><span>Design</span><span>Development</span><span>Infrastructure</span></div><div className="row"><a className="btn btn--dark btn--large" href="#contact">Start a conversation <span>↗</span></a><a className="btn btn--cta-outline btn--large" href="#capabilities">Explore solutions</a></div></div></section>;
}
