import { motion, useScroll, useSpring } from "motion/react";
import { useLenis } from "./lib/useLenis";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { TrustStrip } from "./components/TrustStrip";
import { Reframe } from "./components/Reframe";
import { System } from "./components/System";
import { CaseStudies } from "./components/CaseStudies";
import { Pricing } from "./components/Pricing";
import { Testimonials } from "./components/Testimonials";
import { Founder } from "./components/Founder";
import { Playbook } from "./components/Playbook";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";

export default function App() {
  useLenis();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="grain relative">
      {/* scroll progress */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-signal origin-left z-[60]"
      />

      <Nav />

      <main>
        <Hero />
        <TrustStrip />
        <Reframe />
        <System />
        <CaseStudies />
        <Pricing />
        <Testimonials />
        <Founder />
        <Playbook />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
