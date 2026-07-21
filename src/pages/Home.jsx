import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Anchor,
  Clock,
  ShieldCheck,
  Users,
  Ship,
  Fuel,
  Truck,
} from "lucide-react";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { company } from "@/constants/company";

const values = [
  {
    icon: Clock,
    title: "Layanan 24 Jam",
    description: "Siap membantu Anda kapan saja, 24/7.",
  },
  {
    icon: ShieldCheck,
    title: "Standar HSE",
    description: "Keselamatan kerja & lingkungan diutamakan.",
  },
  {
    icon: Users,
    title: "Tim Profesional",
    description: "Pengalaman bertahun-tahun di industri maritim.",
  },
];

const featuredServices = [
  {
    icon: Ship,
    title: "Ship Agency",
    description: "Agen kapal handal untuk dokumen & administrasi pelabuhan.",
  },
  {
    icon: Fuel,
    title: "Bunker Fuel",
    description: "Pengisian bahan bakar kapal berkualitas dengan harga kompetitif.",
  },
  {
    icon: Truck,
    title: "Logistics",
    description: "Solusi logistik laut & darat yang terintegrasi.",
  },
];

const Home = () => {
  return (
    <>
      {/* Hero */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden bg-primary"
      >
        {/* YouTube Video Background */}
        <div className="absolute inset-0">
          <iframe
            src="https://www.youtube.com/embed/DvlIk7SrZHk?autoplay=1&mute=1&loop=1&playlist=DvlIk7SrZHk&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
            className="absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="CBSA Hero Video"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/75 to-primary/60" />

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
              <a
                href={`https://wa.me/${company.phoneWhatsApp}?text=Halo%20CBSA%2C%20saya%20ingin%20konsultasi%20tentang%20layanan%20maritim.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white"
                >
                  Hubungi Kami
                </Button>
              </a>
            </motion.div>
          </div>
        </Container>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Value Proposition */}
      <section className="bg-white py-24">
        <Container>
          <div className="mb-16 text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-secondary"
            >
              Mengapa CBSA
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-4 text-3xl font-bold text-primary md:text-4xl"
            >
              Partner Terpercaya Anda
            </motion.h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {values.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group rounded-2xl border border-slate-100 p-8 text-center transition-all hover:border-secondary/20 hover:shadow-lg"
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10 transition-colors group-hover:bg-secondary/20">
                  <item.icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="text-gray">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured Services */}
      <section className="bg-slate-50 py-24">
        <Container>
          <div className="mb-16 text-center">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-secondary"
            >
              Layanan Utama
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-4 text-3xl font-bold text-primary md:text-4xl"
            >
              Solusi Maritime Komprehensif
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto max-w-2xl text-lg text-gray"
            >
              Kami menyediakan berbagai layanan maritim untuk mendukung
              operasional laut Anda.
            </motion.p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group rounded-2xl border border-slate-100 bg-white p-8 transition-all hover:border-secondary/20 hover:shadow-lg"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/5 transition-colors group-hover:bg-secondary/10">
                  <service.icon className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-primary">
                  {service.title}
                </h3>
                <p className="mb-6 text-gray leading-relaxed">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 text-sm font-medium text-secondary transition-all hover:gap-3"
                >
                  Selengkapnya
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <Link to="/services">
              <Button variant="outline" size="lg" className="gap-2">
                Lihat Semua Layanan
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
        </Container>
      </section>

      {/* Bottom CTA */}
      <section className="bg-primary py-24">
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
            >
              <a
                href={`https://wa.me/${company.phoneWhatsApp}?text=Halo%20CBSA%2C%20saya%20ingin%20konsultasi%20tentang%20layanan%20maritim.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="gap-2">
                  Hubungi Kami Sekarang
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
