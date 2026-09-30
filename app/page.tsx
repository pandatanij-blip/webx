import Navbar from "@/components/navigation/Navbar";
import Hero from "@/components/sections/Hero";
import { ServicesOverview, Capabilities } from "@/components/sections/Services";
import Technology from "@/components/sections/Technology";
import { WhyWebX, Process, FinalCTA } from "@/components/sections/Story";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/ui/FloatingContact";
export default function Home() {
  return (<>
    <a className="skip" href="#main">Skip to content</a>
    <Navbar />
    <main id="main">
      <Hero /><ServicesOverview /><Technology /><Capabilities /><WhyWebX /><Process /><FAQ /><Contact /><FinalCTA />
    </main>
    <Footer /><FloatingContact />
  </>);
}
