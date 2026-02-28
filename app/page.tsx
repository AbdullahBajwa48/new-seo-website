import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ToolsMarquee from "../components/ToolsMarquee";
import TrustSection from "@/components/TrustSection";
import About from "@/components/About";
import Services from "@/components/Services";


export default function Home() {
  return(
    <>
    <Navbar/>
    <Hero/>
    <ToolsMarquee/>
    <TrustSection/>
    <About/>
    <Services/>
    </>
  );
}