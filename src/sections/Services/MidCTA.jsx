import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { company } from "@/constants/company";

const MidCTA = () => {
  return (
    <section className="bg-slate-50 py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-slate-100 bg-white p-8 shadow-sm md:flex-row md:p-12"
        >
          <div className="max-w-xl text-center md:text-left">
            <h3 className="mb-2 text-2xl font-bold text-primary">
              Butuh Dukungan Operasional Kapal?
            </h3>
            <p className="text-muted-foreground">
              Tim CBSA siap membantu kebutuhan keagenan kapal, koordinasi operasional pelabuhan, serta berbagai layanan maritim secara profesional, cepat, dan sesuai regulasi.
            </p>
          </div>
          <a
            href={`https://wa.me/${company.phoneWhatsApp}?text=Halo%20Tim%20CBSA,%20saya%20ingin%20memperoleh%20informasi%20mengenai%20layanan%20keagenan%20kapal%20yang%20tersedia.`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="gap-2 bg-cta text-white hover:bg-cta-hover">
              <Phone className="h-4 w-4" />
              Hubungi Kami
              <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
        </motion.div>
      </Container>
    </section>
  );
};

export default MidCTA;
