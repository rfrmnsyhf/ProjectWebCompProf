import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Anchor } from "lucide-react";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { company } from "@/constants/company";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-primary"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/images/hero.png')] bg-cover bg-center" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70" />

      <Container className="relative z-10 py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm"
          >
            <Anchor className="h-4 w-4 text-accent" />
            <span>Port Services &bull; Shipping Agency &bull; Maritime Logistics</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl"
          >
            {company.slogan}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-4 max-w-xl text-lg text-slate-300"
          >
            {company.name} adalah perusahaan independen yang bergerak di bidang
            jasa kepelabuhanan dan pelayaran. Kami menyediakan layanan
            port services, shipping agency, dan maritime logistics.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-10 max-w-xl text-base italic text-accent"
          >
            To help make your every voyage safe and smooth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col gap-4 sm:flex-row"
          >
            <Link to="/services">
              <Button size="lg" className="group gap-2">
                Layanan Kami
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white">
                Hubungi Kami
              </Button>
            </Link>
          </motion.div>
        </div>
      </Container>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
};

export default Hero;
