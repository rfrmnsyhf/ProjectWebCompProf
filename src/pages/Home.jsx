import { Link } from "react-router-dom"; 
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { company } from "@/constants/company";
import aboutImg from "@/assets/images/aboutImg.jpg";
import svc1 from "@/assets/images/home5.jpg";
import svc2 from "@/assets/images/home6.jpg";
import svc3 from "@/assets/images/home7.jpg";
import svc4 from "@/assets/images/offshore.jpg";
import svc5 from "@/assets/images/tug-barge.jpg";
import ClientLogosSection from "@/sections/ClientLogos/ClientLogos";
import StatsSection from "@/sections/Stats/Stats";
import IndustriesSection from "@/sections/Industries/Industries";
import TestimonialsSection from "@/sections/Testimonials/Testimonials";
import PortfolioSection from "@/sections/Portfolio/Portfolio";
import FounderStatementSection from "@/sections/FounderStatement/FounderStatement";
import CertificationsSection from "@/sections/Certifications/Certifications";

const values = [
  {
    title: "Profesionalisme",
    description:
      "Setiap penugasan ditangani oleh tenaga ahli berpengalaman dengan standar kerja yang terstruktur dan dokumentasi yang transparan.",
  },
  {
    title: "Ketersediaan 24/7",
    description:
      "Operasional maritim tidak mengenal waktu. Petugas jaga kami selalu siap merespons — termasuk malam hari dan hari libur nasional.",
  },
  {
    title: "Tenaga Berpengalaman",
    description:
      "Berbasis di jantung maritim Batam, kami memahami dinamika pelabuhan, regulasi, dan instansi setempat lebih baik dari siapa pun.",
  },
];

const featuredServices = [
  {
    image: svc1,
    title: "Ship Agency",
    description:
      "Pengurusan dokumen, clearance Syahbandar, Bea Cukai, Imigrasi, hingga Karantina. Satu titik kontak, semua urusan beres.",
  },
  {
    image: svc2,
    title: "Ship Chandler & Bunkering",
    description:
      "Penyediaan kebutuhan kapal dan pengisian bahan bakar berkualitas dengan harga kompetitif.",
  },
  {
    image: svc3,
    title: "Logistics & Customs Clearance",
    description:
      "Solusi logistik laut dan darat yang terintegrasi termasuk pengurusan bea cukai.",
  },
  {
    image: svc4,
    title: "Offshore Support",
    description:
      "Dukungan operasi lepas pantai termasuk supply vessel dan maintenance offshore.",
  },
  {
    image: svc5,
    title: "Husbandry Services",
    description:
      "Crew change, e-Visa, akomodasi, dan kebutuhan logistik awak kapal selama sandar di pelabuhan.",
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
        <div className="absolute inset-0 bg-black/60" />

        <Container className="relative z-10 py-32">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <h1 className="mb-6 text-4xl font-extrabold uppercase leading-tight text-white md:text-6xl lg:text-7xl">
              Your Trusted Partner for Shipping Agency in Batam
            </h1>

            <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-300">
              {company.name} melayani keagenan kapal, bunker fuel, dan
              logistik maritim di Batam — Selat Malaka, Selat Singapura,
              dan pelabuhan utama Batam — dengan tim yang siap bergerak 24
              jam tanpa henti.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={`https://wa.me/${company.phoneWhatsApp}?text=Halo%20CBSA%2C%20saya%20ingin%20konsultasi%20tentang%20layanan%20maritim.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
className="gap-2 bg-cta text-white hover:bg-cta-hover"
                >
                  Konsultasi Sekarang
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
              <Link to="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white"
                >
                  Lihat Layanan
                </Button>
              </Link>
            </div>
          </motion.div>
        </Container>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-black to-transparent" />
      </section>

      {/* Client Logos */}
      <ClientLogosSection />

      {/* Value Proposition */}
      <section className="bg-white py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
            {/* 3 Value Cards */}
            <div className="grid gap-6 sm:grid-cols-3">
              {values.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="rounded-2xl border border-slate-100 p-6"
                >
                  <h3 className="mb-3 text-lg font-bold text-primary">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col justify-center rounded-2xl bg-linear-to-br from-primary to-primary/80 p-8 text-white"
            >
              <h4 className="mb-3 text-xl font-bold">
                Ingin Tahu Layanan Kami Lebih Lanjut?
              </h4>
              <div className="mb-4 h-px w-12 bg-white/40" />
              <p className="mb-6 text-sm leading-relaxed text-white/80">
                Dari pengurusan ship agency hingga logistik terintegrasi —
                percayakan operasional kapal Anda kepada tim yang sudah
                berpengalaman di Batam.
              </p>
              <Link to="/services">
                <Button className="gap-2 bg-[#FF6B00] text-white hover:bg-[#E56000]">
                  Lihat Layanan Kami
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* About Ringkas */}
      <section className="bg-white py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Kiri — Gambar + Counter */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={aboutImg}
                  alt="Kapal di pelabuhan Batam"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 rounded-2xl bg-cta px-6 py-4 text-white shadow-lg md:right-6">
                <span className="block text-3xl font-extrabold leading-none">25+</span>
                <span className="text-sm">Years of Experience</span>
              </div>
            </motion.div>

            {/* Kanan — Deskripsi */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-wider text-secondary">
                Tentang Kami
              </span>
              <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
                Berakar di Batam, Berpengalaman di Perairan Internasional.
              </h2>
              <p className="mb-6 leading-relaxed text-gray">
                {company.name} adalah perusahaan keagenan kapal dan jasa
                maritim yang berkantor di Batam. Kami melayani pemilik
                kapal, manajer armada, dan operator dari dalam maupun
                luar negeri yang membutuhkan mitra lokal yang cepat,
                kompeten, dan dapat diandalkan.
              </p>
              <Link to="/about">
                <Button variant="outline" className="gap-2">
                  Pelajari Lebih Lanjut
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Stats */}
      <StatsSection />

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
              Setiap layanan kami dirancang untuk meminimalkan waktu tunggu,
              menghindari hambatan birokrasi, dan memastikan kapal Anda
              beroperasi sesuai jadwal.
            </motion.p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group overflow-hidden rounded-2xl border border-slate-100 bg-white transition-all hover:border-secondary/20 hover:shadow-lg"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-primary">
                    {service.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray">
                    {service.description}
                  </p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-sm font-medium text-secondary transition-all hover:gap-3"
                  >
                    Selengkapnya
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 text-center"
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

      {/* Segmentasi Jenis Kapal */}
      <IndustriesSection />

      {/* Testimoni Klien */}
      <TestimonialsSection />

      {/* Portfolio & Founder */}
      <PortfolioSection />
      <FounderStatementSection />

      {/* Sertifikasi & Compliance */}
      <CertificationsSection />

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
              Kapal Anda di Perairan Batam?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-10 text-lg text-slate-300"
            >
              Dari pengurusan clearance hingga pendampingan operasional —
              percayakan operasional kapal Anda kepada tim yang sudah
              berpengalaman di Selat Malaka dan perairan strategis Indonesia.
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
