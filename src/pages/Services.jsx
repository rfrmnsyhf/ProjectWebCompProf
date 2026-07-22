import PageHero from "@/components/common/PageHero";
import ServicesSection from "@/sections/Services/Services";
import RangeOfServicesSection from "@/sections/RangeOfServices/RangeOfServices";
import MidCTA from "@/sections/Services/MidCTA";
import OperationalServicesSection from "@/sections/OperationalServices/OperationalServices";
import ServiceTestimonials from "@/sections/Services/ServiceTestimonials";
import SharingLocalKnowledgeSection from "@/sections/LocalKnowledge/SharingLocalKnowledge";
import svcHero from "@/assets/images/home5.jpg";

const Services = () => {
  return (
    <>
      <PageHero
        title="Layanan Kami"
        subtitle="Solusi maritim komprehensif untuk mendukung seluruh kebutuhan operasional laut Anda."
        image={svcHero}
      />
      <ServicesSection />
      <RangeOfServicesSection />
      <MidCTA />
      <OperationalServicesSection />
      <ServiceTestimonials />
      <SharingLocalKnowledgeSection />
    </>
  );
};

export default Services;
