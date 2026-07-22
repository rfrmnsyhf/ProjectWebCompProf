import PageHero from "@/components/common/PageHero";
import PortfolioIntro from "@/sections/Portfolio/PortfolioIntro";
import PortfolioSection from "@/sections/Portfolio/Portfolio";
import TestimonialsSection from "@/sections/Testimonials/Testimonials";
import ClosingBanner from "@/sections/Portfolio/ClosingBanner";
import portfolioHero from "@/assets/images/offshore.jpg";

const Portfolio = () => {
  return (
    <>
      <PageHero
        title="Pengalaman Yang Berbicara"
        subtitle="Setiap proyek yang kami selesaikan adalah cerminan dari komitmen kami terhadap keselamatan, ketepatan, dan profesionalisme."
        image={portfolioHero}
      />
      <PortfolioIntro />
      <PortfolioSection />
      <TestimonialsSection />
      <ClosingBanner />
    </>
  );
};

export default Portfolio;
