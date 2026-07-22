import { motion } from "framer-motion";
import {
  Package,
  Container as ContainerIcon,
  Flame,
  Ship,
  Sailboat,
  FlaskConical,
  Anchor,
  Weight,
  Flag,
  UserCheck,
  Users,
  Settings,
  Truck,
  Warehouse,
  Snowflake,
  ShoppingCart,
  ArrowDownToLine,
} from "lucide-react";
import ContainerComponent from "@/components/layout/Container";

const vesselTypes = [
  {
    icon: Package,
    title: "Break-Bulk",
    description:
      "Layanan keagenan dan koordinasi bongkar muat untuk kapal break-bulk di pelabuhan Batam.",
  },
  {
    icon: ContainerIcon,
    title: "Container Ships",
    description:
      "Pengurusan dokumen lengkap, clearance, dan koordinasi bongkar muat untuk container vessel rute domestik dan internasional.",
  },
  {
    icon: Ship,
    title: "Dry Bulk",
    description:
      "Dukungan operasional dan perizinan untuk kapal pengangkut kargo curah kering seperti semen, batu bara, dan bijih besi.",
  },
  {
    icon: Sailboat,
    title: "Cruise",
    description:
      "Layanan keagenan dan husbandry untuk kapal pesiar termasuk koordinasi awak kapal dan penumpang.",
  },
  {
    icon: FlaskConical,
    title: "Chemicals Tanker",
    description:
      "Layanan keagenan khusus untuk kapal tanker kimia dengan standar keselamatan ketat dan perizinan khusus.",
  },
  {
    icon: Flame,
    title: "Crude & Product Tanker",
    description:
      "Koordinasi dokumen dan operasi untuk kapal tanker minyak mentah dan produk olahan di perairan Batam.",
  },
  {
    icon: Anchor,
    title: "Tug & Barge",
    description:
      "Dukungan operasional untuk kapal tunda dan tongkang termasuk koordinasi towing master.",
  },
  {
    icon: Weight,
    title: "Heavy Lift",
    description:
      "Layanan keagenan untuk kapal heavy lift dengan kargo berat dan oversize di pelabuhan Batam.",
  },
  {
    icon: Snowflake,
    title: "Reefer",
    description:
      "Pengurusan dokumen dan koordinasi cold chain untuk kapal pengangkut barang beku dan pendingin.",
  },
  {
    icon: Flag,
    title: "Naval Vessels",
    description:
      "Layanan keagenan khusus untuk kapal negara dan kapal patroli dengan prosedur protokol khusus.",
  },
  {
    icon: Warehouse,
    title: "Oil & Gas Support",
    description:
      "Dukungan logistik dan operasional untuk kapal pendukung industri minyak dan gas lepas pantai.",
  },
];

const stakeholders = [
  { icon: Users, title: "Ship Owners" },
  { icon: Settings, title: "Ship Managers" },
  { icon: UserCheck, title: "Charterers" },
  { icon: Truck, title: "Operators" },
  { icon: ShoppingCart, title: "Suppliers" },
  { icon: Package, title: "Traders" },
  { icon: ArrowDownToLine, title: "Receivers" },
];

const Industries = () => {
  return (
    <section
      id="industries"
      className="flex min-h-screen items-center bg-white py-24"
    >
      <ContainerComponent>
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-secondary"
          >
            Business Coverage
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 text-3xl font-bold text-primary md:text-4xl lg:text-5xl"
          >
            Sektor{" "}
            <span className="text-secondary">Yang Kami Layani</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-gray"
          >
            Kami melayani berbagai sektor industri maritim dan mitra bisnis
            dengan solusi yang disesuaikan.
          </motion.p>
        </div>

        <div className="mb-12">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-center text-lg font-semibold text-primary"
          >
            Jenis Kapal & Kargo
          </motion.h3>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {vesselTypes.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                className="group flex flex-col rounded-2xl border border-slate-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/20 hover:shadow-xl"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 transition-colors duration-300 group-hover:bg-secondary/10">
                  <item.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="mb-2 text-base font-semibold text-primary">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-center text-lg font-semibold text-primary"
          >
            Mitra Bisnis
          </motion.h3>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
            {stakeholders.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                className="group flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-secondary/20 hover:shadow-xl"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 transition-colors duration-300 group-hover:bg-secondary/10">
                  <item.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-sm font-semibold text-primary">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </ContainerComponent>
    </section>
  );
};

export default Industries;
