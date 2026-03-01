import AboutHero from "./AboutHero";
import AboutStory from "./AboutStory"
import AboutExp from "./AboutExp"
import AboutWhyDiff from "./AboutWhyDiff";
import AboutPersonal from "./AboutPersonal";
import AboutCta from "./AboutCta";
import Navbar from "@/components/Navbar";

export default function About(){

    return (
        <>
        <Navbar />
        <AboutHero />
        <AboutStory />
        <AboutExp />
        <AboutWhyDiff />
        <AboutPersonal />
        <AboutCta />
        </>
    );

}