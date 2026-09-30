import Reveal from "@/components/ui/Reveal";
import { faqs } from "@/data/faq";

export default function FAQ() {
  return <section className="sec wrap faq-section" aria-labelledby="faq-title"><Reveal><div className="section-head"><div><span className="section-kicker">FAQ</span><h2 id="faq-title" className="sec__title">Questions, <em>answered</em></h2></div><p className="sec__lead">A few things clients usually ask before the first call.</p></div></Reveal><div className="faq">{faqs.map((item, index) => <Reveal key={item.question} delay={index * 30}><details open={index === 0}><summary>{item.question}<b>+</b></summary><p>{item.answer}</p></details></Reveal>)}</div></section>;
}
