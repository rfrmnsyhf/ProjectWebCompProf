import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Container from "@/components/layout/Container";

const FounderStatement = () => {
  return (
    <section className="flex min-h-screen items-center bg-white py-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-secondary"
          >
            Founder Statement
          </motion.span>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mb-8 flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-slate-200"
          >
            <span className="text-4xl font-bold text-slate-400">CBSA</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Quote className="mx-auto mb-6 h-10 w-10 text-secondary/30" />

            <blockquote className="mb-8 text-2xl font-medium leading-relaxed text-primary md:text-3xl">
              Kami membangun CBSA bukan sekadar sebagai penyedia jasa maritim,
              tetapi sebagai partner yang benar-benar memahami kebutuhan setiap
              klien. Setiap layanan kami dirancang untuk memastikan setiap
              pelayaran berjalan aman dan lancar.
            </blockquote>

            <div>
              <p className="text-lg font-semibold text-primary">
                Direktur Utama
              </p>
              <p className="text-gray">
                PT. Chantika Bahari Sejahtera Abadi
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default FounderStatement;
