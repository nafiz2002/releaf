import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import HowItWorks from "@/components/landing/HowItWorks";
import Ecosystems from "@/components/landing/Ecosystems";
import Platform from "@/components/landing/Platform";
import LiveImpact from "@/components/landing/LiveImpact";
import Esg from "@/components/landing/Esg";
import FinalCta from "@/components/landing/FinalCta";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />          {/* 1  Hero */}
        <Problem />       {/* 2  The problem */}
        <HowItWorks />    {/* 3  How it works */}
        <Ecosystems />    {/* 4  One network. Three sides.  (was Audiences) */}
        <Platform />      {/* 5  More than recycling.       (was Product) */}
        <LiveImpact />    {/* 6  Live impact */}
        <Esg />           {/* 7  ESG & carbon */}
        {/* 8  Voices + partners */}
        <FinalCta />      {/* 9  Final CTA */}
      </main>
      <Footer />
    </>
  );
}
