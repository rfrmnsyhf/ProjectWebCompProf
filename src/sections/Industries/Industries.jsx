import { motion } from "framer-motion";
import {
  Package,
  Container,
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
} from "lucide-react";
import ContainerComponent from "@/components/layout/Container";

const industries = [
  { icon: Package, title: "Break Bulk" },
  { icon: Container, title: "Container" },
  { icon: Flame, title: "Oil & Gas" },
  { icon: Ship, title: "Dry Bulk" },
  { icon: Sailboat, title: "Cruise" },
  { icon: FlaskConical, title: "Chemical" },
  { icon: Anchor, title: "Tug & Barge" },
  { icon: Weight, title: "Heavy Lift" },
  { icon: Flag, title: "Naval" },
  { icon: UserCheck, title: "Charterers" },
  { icon: Users, title: "Ship Owners" },
  { icon: Settings, title: "Ship Managers" },
  { icon: Truck, title: "Operators" },
  { icon: Warehouse, title: "Suppliers & Receivers" },
  { icon: Snowflake, title: "Reefer Cargo" },
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

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 * index }}
              className="group flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-6 text-center transition-all hover:border-secondary/20 hover:shadow-lg"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 transition-colors group-hover:bg-secondary/10">
                <industry.icon className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-sm font-semibold text-primary">
                {industry.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </ContainerComponent>
    </section>
  );
};

export default Industries;
