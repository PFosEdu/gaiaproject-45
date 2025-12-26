import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyGaiaSection from "@/components/WhyGaiaSection";
import SolutionsSection from "@/components/SolutionsSection";
import FlagshipProjectsSection from "@/components/FlagshipProjectsSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TeamSection from "@/components/TeamSection";
import ComptoirSection from "@/components/ComptoirSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>GAIA SARL U - Leader Technologique en Afrique Centrale | Innovation • Data • Cloud</title>
        <meta name="description" content="GAIA SARL U: 47 experts en ingénierie logicielle, data intelligence, solutions cloud et transformation numérique. Plateformes éducatives, systèmes de subvention et acquisition multi-canale." />
        <meta name="keywords" content="GAIA, technologie, Cameroun, cloud, data, IA, éducation, transformation numérique, Afrique" />
      </Helmet>
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <WhyGaiaSection />
          <SolutionsSection />
          <FlagshipProjectsSection />
          <ExpertiseSection />
          <CaseStudiesSection />
          <TeamSection />
          <ComptoirSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
