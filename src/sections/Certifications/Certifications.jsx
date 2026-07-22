import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Container from "@/components/layout/Container";

const certifications = [
  {
    title: "ISM Code",
    description: "International Safety Management",
  },
  {
    title: "ISO 9001:2015",
    description: "Sistem Manajemen Mutu",
  },
  {
    title: "SIUP",
    description: "Surat Izin Usaha Perdagangan",
  },
  {
    title: "API",
    description: "Asosiasi Perusahaan Pelayaran Indonesia",
  },
  {
    title: "Bendera NKRI",
    description: "Tanda Pendaftaran Kapal Nasional",
  },
  {
    title: "SOLAS",
    description: "Safety of Life at Sea",
  },
];

const Certifications = () => {
  return (
    <section className="bg-slate-50 py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-secondary"
            >
              Sertifikasi & Compliance
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-4 text-3xl font-bold text-primary md:text-4xl"
            >
              Standar Keamanan{" "}
              <span className="text-secondary">Internasional</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg leading-relaxed text-gray"
            >
              Kami mematuhi standar keamanan dan regulasi maritim internasional
              untuk memastikan setiap operasi memenuhi kualitas dan keamanan
              tertinggi.
            </motion.p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.05 * index }}
                className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white p-4 transition-all hover:border-secondary/20 hover:shadow-sm"
              >
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                <div>
                  <p className="font-semibold text-primary">{cert.title}</p>
                  <p className="text-xs text-gray">{cert.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Certifications;
