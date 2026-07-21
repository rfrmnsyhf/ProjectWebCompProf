import { motion } from "framer-motion";
import {
  Clock,
  MapPin,
  Layers,
  ShieldCheck,
  FileText,
  BadgeDollarSign,
  Eye,
  Calculator,
} from "lucide-react";
import Container from "@/components/layout/Container";

const reasons = [
  {
    icon: Clock,
    title: "Layanan 24 Jam",
    description:
      "Tim kami siap membantu Anda kapan saja, 24 jam sehari, 7 hari seminggu untuk kebutuhan mendesak.",
  },
  {
    icon: MapPin,
    title: "Pengalaman Lokal Kuat",
    description:
      "Pengetahuan mendalam tentang kondisi pelabuhan dan regulasi lokal di Batam dan sekitarnya.",
  },
  {
    icon: Layers,
    title: "Layanan Terintegrasi",
    description:
      "Solusi lengkap dari ship agency hingga logistics dalam satu atap untuk kemudahan operasional Anda.",
  },
  {
    icon: ShieldCheck,
    title: "Kepatuhan HSE",
    description:
      "Penerapan standar Health, Safety & Environment yang ketat dalam setiap operasi kami.",
  },
  {
    icon: FileText,
    title: "Laporan Operasional Harian",
    description: "Transparansi penuh dengan laporan operasional harian yang detail dan akurat.",
  },
  {
    icon: BadgeDollarSign,
    title: "Harga Kompetitif",
    description:
      "Kami menawarkan harga terbaik tanpa mengorbankan kualitas layanan yang kami berikan.",
  },
  {
    icon: Eye,
    title: "Transparansi Biaya",
    description:
      "Tidak ada biaya tersembunyi. Setiap pengeluaran dilaporkan dengan jelas dan transparan.",
  },
  {
    icon: Calculator,
    title: "Akurasi Disbursement",
    description:
      "Pengelolaan dana dan disbursement yang akurat untuk ketenangan pikiran Anda.",
  },
];

const WhyChooseUs = () => {
  return (
    <section
      id="why-choose-us"
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
            Competitive Advantage
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 text-3xl font-bold text-primary md:text-4xl lg:text-5xl"
          >
            Keunggulan{" "}
            <span className="text-secondary">CBSA</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-gray"
          >
            Keunggulan kompetitif yang membedakan CBSA dari kompetitor lainnya
            dalam industri maritim.
          </motion.p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 * index }}
              className="group relative rounded-2xl border border-slate-100 p-6 transition-all hover:border-secondary/20 hover:shadow-lg"
            >
              <div className="absolute right-4 top-4 text-5xl font-bold text-primary/5">
                0{index + 1}
              </div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10">
                <reason.icon className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-primary">
                {reason.title}
              </h3>
              <p className="text-sm text-gray leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
