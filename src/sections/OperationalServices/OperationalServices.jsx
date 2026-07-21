import { motion } from "framer-motion";
import {
  FileText,
  Ship,
  Info,
  Anchor,
  ArrowLeftRight,
  Wrench,
  UserCheck,
  ClipboardCheck,
  Truck,
} from "lucide-react";
import Container from "@/components/layout/Container";

const operationalServices = [
  {
    icon: FileText,
    title: "Arrival & Departure Clearance",
    description: "Pengurusan dokumen kedatangan dan keberangkatan kapal.",
  },
  {
    icon: Ship,
    title: "Bill of Lading Arrangement",
    description: "Pengurusan dokumen Bill of Lading untuk kargo Anda.",
  },
  {
    icon: Info,
    title: "Port Call Information",
    description: "Informasi lengkap mengenai panggilan pelabuhan.",
  },
  {
    icon: Anchor,
    title: "Offshore Support",
    description: "Dukungan operasi lepas pantai yang komprehensif.",
  },
  {
    icon: ArrowLeftRight,
    title: "Ship-to-Ship Transshipment",
    description: "Layanan pemindahan kargo antar kapal.",
  },
  {
    icon: Wrench,
    title: "Dry Docking & New Building",
    description: "Dukungan perawatan kapal dan pembangunan baru.",
  },
  {
    icon: UserCheck,
    title: "Port Captain & Stevedores",
    description: "Supervisi dan pengelolaan bongkar muat kargo.",
  },
  {
    icon: ClipboardCheck,
    title: "Surveyor Coordination",
    description: "Koordinasi surveyor untuk inspeksi kargo dan kapal.",
  },
  {
    icon: Truck,
    title: "Logistics, Forwarding & Customs",
    description: "Solusi logistik, forwarding, dan urusan bea cukai.",
  },
];

const OperationalServices = () => {
  return (
    <section
      id="operational"
      className="flex min-h-screen items-center bg-white py-24"
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
            Operational Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 text-3xl font-bold text-primary md:text-4xl lg:text-5xl"
          >
            Layanan{" "}
            <span className="text-secondary">Operasional Kapal</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-gray"
          >
            Aktivitas operasional yang mampu ditangani oleh CBSA untuk mendukung
            seluruh kebutuhan kapal Anda.
          </motion.p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {operationalServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 * index }}
              className="group flex items-start gap-4 rounded-2xl border border-slate-100 p-6 transition-all hover:border-secondary/20 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/5 transition-colors group-hover:bg-secondary/10">
                <service.icon className="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-primary">
                  {service.title}
                </h3>
                <p className="text-sm text-gray leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default OperationalServices;
