import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Container from "@/components/layout/Container";

const rangeOfServices = [
  "Ship / Rig Lay Up",
  "Ship Chandler",
  "Bunkering",
  "Vessel & Cargo Pre-Planning",
  "Owner Protective Agency",
  "Liner Agency",
  "NVOCC",
  "Husbandry Service",
  "Crew Manning",
  "Ship Brokerage",
  "Cargo Brokerage",
  "Medical Evacuation (MEDIVAC)",
];

const RangeOfServices = () => {
  return (
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
            Range of Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 text-3xl font-bold text-primary md:text-4xl"
          >
            Layanan <span className="text-secondary">Yang Kami Sediakan</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-gray"
          >
            Daftar lengkap layanan maritim yang kami tawarkan untuk
            memenuhi seluruh kebutuhan operasional laut Anda.
          </motion.p>
        </div>

        <div className="mx-auto max-w-4xl columns-2 gap-x-12 gap-y-4 md:columns-3">
          {rangeOfServices.map((service, index) => (
            <motion.div
              key={service}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.03 * index }}
              className="flex items-center gap-3 py-3"
            >
              <CheckCircle className="h-5 w-5 shrink-0 text-secondary" />
              <span className="text-primary font-medium">{service}</span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default RangeOfServices;
