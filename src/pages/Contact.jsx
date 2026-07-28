import PageHero from "@/components/common/PageHero";
import FAQSection from "@/sections/Contact/FAQSection";
import ContactSection from "@/sections/Contact/Contact";
import BottomCTASection from "@/sections/BottomCTA/BottomCTA";
import contactHero from "@/assets/images/home7.jpg";

const Contact = () => {
  return (
    <>
      <PageHero
        title="Kontak Kami"
        subtitle="Kami dengan senang hati siap membantu Anda. Tim kami selalu tersedia untuk memberikan informasi dan solusi terbaik bagi kebutuhan maritim Anda"
        image={contactHero}
      />
      <FAQSection />
      <ContactSection />
      <BottomCTASection />
    </>
  );
};

export default Contact;
