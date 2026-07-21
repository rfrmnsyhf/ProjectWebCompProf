import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Container from "@/components/layout/Container";

const portfolios = [
  {
    title: "Ship Agency - Tanker",
    client: "PT Pertamina",
    description:
      "Pengurusan dokumen dan layanan pelabuhan untuk armada tanker nasional di Batu Ampar.",
    category: "Ship Agency",
  },
  {
    title: "Bunkering Services",
    client: "International Shipping Co.",
    description:
      "Pengisian bahan bakar untuk kapal niaga internasional dengan standar kualitas tertinggi.",
    category: "Bunkering",
  },
  {
    title: "Logistics Support",
    client: "PT Offshore Energy",
    description:
      "Dukungan logistik operasi lepas pantai di perairan Natuna.",
    category: "Logistics",
  },
  {
    title: "Crew Manning",
    client: "Global Maritime Solutions",
    description:
      "Penyediaan awak kapal terlatih untuk armada kargo dan tanker.",
    category: "Crew Manning",
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
            Bukti{" "}
            <span className="text-secondary">Kerja Kami</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-gray"
          >
            Kami tidak hanya mengatakan berpengalaman, kami membuktikannya.
            Berikut beberapa proyek yang telah kami tangani.
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
              className="group rounded-2xl border border-slate-100 bg-white p-8 transition-all hover:border-secondary/20 hover:shadow-lg"
            >
              <div className="mb-4 flex items-center justify-between">
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
              <p className="text-gray leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;
