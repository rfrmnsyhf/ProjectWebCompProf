import { motion } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { company } from "@/constants/company";

const BottomCTA = () => {
  return (
    <section className="relative flex items-center bg-primary py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-3xl font-bold text-white md:text-5xl"
          >
            Kapal Anda di Batam?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-10 text-lg text-slate-300"
          >
            Kami siap membantu setiap kebutuhan operasional laut Anda.
            Hubungi kami sekarang untuk konsultasi gratis.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <a
              href={`https://wa.me/${company.phoneWhatsApp}?text=Halo%20CBSA%2C%20saya%20ingin%20konsultasi%20tentang%20layanan%20maritim.`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="group gap-2 bg-whatsapp text-white hover:bg-whatsapp-hover"
              >
                <Phone className="h-4 w-4" />
                Chat WhatsApp
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
              </Button>
            </a>
            <a href={`mailto:${company.email}`}>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-black hover:bg-black/10 hover:text-white"
              >
                Kirim Email
              </Button>
            </a>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default BottomCTA;
