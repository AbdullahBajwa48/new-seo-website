import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ToolsMarquee from "../components/ToolsMarquee";
import TrustSection from "@/components/TrustSection";
import About from "@/components/About";
import Services from "@/components/Services";
import CaseStudies from "@/components/CaseStudies";
import Testimonial from "@/components/Testimonial";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";


export default function Home() {
  return(
    <>
    <Navbar/>
    <Hero/>
    <ToolsMarquee/>
    <TrustSection/>
    <About/>
    <Services/>
    <CaseStudies/>
    <Testimonial/>
    <Faq/>
    <Footer/>
    </>
  );
}