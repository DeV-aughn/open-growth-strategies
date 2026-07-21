import { motion, useScroll, useSpring } from "motion/react";
import { useLenis } from "./lib/useLenis";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Promise } from "./components/Promise";
import { Engine } from "./components/Engine";
import { Proof } from "./components/Proof";
import { Pricing } from "./components/Pricing";
import { Founder } from "./components/Founder";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { LogoCloud } from "./components/LogoCloud";

export default function App() {
  useLenis();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="relative">
      <motion.div
        style={{ scaleX: progress }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-accent origin-left z-[60]"
      />

      <Nav />

      <main>
        <Hero />
        <Promise />
        <LogoCloud />
        <Engine />
        <Proof />
        <Pricing />
        <Founder />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
