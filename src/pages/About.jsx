import PageHero from "@/components/common/PageHero";
import AboutSection from "@/sections/About/About";
import PhilosophySection from "@/sections/Philosophy/Philosophy";
import WhyChooseUsSection from "@/sections/WhyChooseUs/WhyChooseUs";
import VisualGallery from "@/sections/About/VisualGallery";
import LocalKnowledgeSection from "@/sections/LocalKnowledge/LocalKnowledge";
import aboutImg from "@/assets/images/aboutImg.jpg";

const About = () => {
  return (
    <>
      <PageHero
        title="Melayani Perairan Strategis Indonesia"
        subtitle="PT. Chantika Bahari Sejahtera Abadi — keagenan kapal dan jasa maritim terpercaya di Batam, Selat Malaka, dan Selat Singapura."
        image={aboutImg}
      />
      <AboutSection />
      <PhilosophySection />
      <WhyChooseUsSection />
      <VisualGallery />
      <LocalKnowledgeSection />
    </>
  );
};

export default About;
