import PageHero from "@/components/common/PageHero";
import IndustriesSection from "@/sections/Industries/Industries";
import VesselTypesSection from "@/sections/VesselTypes/VesselTypes";
import containerImg from "@/assets/images/container-ship.jpg";

const Industries = () => {
  return (
    <>
      <PageHero
        title="Sektor Yang Kami Layani"
        subtitle="Spesialisasi kami mencakup berbagai jenis kapal dan sektor industri maritim dengan standar pelayanan internasional."
        image={containerImg}
      />
      <IndustriesSection />
      <VesselTypesSection />
    </>
  );
};

export default Industries;
