import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Container from "@/components/layout/Container";
import svc1 from "@/assets/images/home5.jpg";
import svc2 from "@/assets/images/chemical-tanker.jpg";
import svc3 from "@/assets/images/home6.jpg";
import svc4 from "@/assets/images/offshore.jpg";

const portfolios = [
  {
    image: svc1,
    title: "Full Port Agency & Stevedoring Coordination",
    client: "Container Vessel - Asia Pacific Route",
    description:
      "Pengurusan dokumen lengkap keagenan kapal, koordinasi bongkar muat, dan layanan pelabuhan untuk container vessel rute Asia Pasifik di Batu Ampar.",
    category: "Ship Agency",
  },
  {
    image: svc2,
    title: "Ship Agency - Tanker",
    client: "PT Pertamina",
    description:
      "Pengurusan dokumen dan layanan pelabuhan untuk armada tanker nasional di Batu Ampar.",
    category: "Ship Agency",
  },
  {
    image: svc3,
    title: "Bunkering Services",
    client: "International Shipping Co.",
    description:
      "Pengisian bahan bakar untuk kapal niaga internasional dengan standar kualitas tertinggi.",
    category: "Bunkering",
  },
  {
    image: svc4,
    title: "Logistics Support",
    client: "PT Offshore Energy",
    description:
      "Dukungan logistik operasi lepas pantai di perairan Natuna.",
    category: "Logistics",
  },
];

const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="flex min-h-screen items-center bg-slate-50 py-24"
    >
      <Container>
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-secondary"
          >
            Portfolio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 text-3xl font-bold text-primary md:text-4xl lg:text-5xl"
          >
            Pengalaman yang{" "}
            <span className="text-secondary">Berbicara</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-gray"
          >
            Setiap proyek yang kami selesaikan adalah cerminan dari komitmen
            kami terhadap keselamatan, ketepatan, dan profesionalisme.
          </motion.p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {portfolios.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group overflow-hidden rounded-2xl border border-slate-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-secondary/20 hover:shadow-xl"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <span className="inline-block rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm">
                    Lihat Detail
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary">
                    {item.category}
                  </span>
                  <ExternalLink className="h-4 w-4 text-slate-300 transition-colors group-hover:text-secondary" />
                </div>
                <h3 className="mb-1 text-xl font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="mb-3 text-sm font-medium text-secondary">
                  {item.client}
                </p>
                <p className="text-sm text-gray leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;
