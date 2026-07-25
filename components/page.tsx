import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import HowItWorks from "@/components/landing/HowItWorks";
import Audiences from "@/components/landing/Audiences";
import Product from "@/components/landing/Product";
import LiveImpact from "@/components/landing/LiveImpact";
import Esg from "@/components/landing/Esg";
import Voices from "@/components/landing/Voices";
import FinalCta from "@/components/landing/FinalCta";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />        {/* 1 */}
        <Problem />     {/* 2 */}
        <HowItWorks />  {/* 3 */}
        <Audiences />   {/* 4 */}
        <Product />     {/* 5 */}
        <LiveImpact />  {/* 6 */}
        <Esg />         {/* 7 */}
        <Voices />      {/* 8 */}
        <FinalCta />    {/* 9 */}
      </main>
      <Footer />
    </>
  );
}
