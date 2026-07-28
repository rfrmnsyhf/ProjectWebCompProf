import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";
import Container from "@/components/layout/Container";

const quoteText =
  "Membangun perusahaan keagenan kapal bukan sekadar bisnis bagi saya — ini adalah dedikasi seumur hidup. Berawal dari karier sebagai pelaut, saya memahami pentingnya efisiensi dan keandalan dalam operasi pelabuhan. Saya mendirikan CBSA untuk membawa perspektif seorang Kapten ke sektor jasa maritim di Batam. Selama bertahun-tahun, kami membangun hubungan yang kuat dan dipercaya oleh instansi pemerintah serta mitra maritim di dalam dan luar negeri. Kami tidak hanya mengurus kapal — kami menavigasi tantangan dan membangun kemitraan jangka panjang melalui integritas dan kepemimpinan maritim yang profesional.";

const FounderStatement = () => {
  const blockquoteRef = useRef(null);
  const isInView = useInView(blockquoteRef, { once: true, margin: "-10%" });

  const words = quoteText.split(" ");

  return (
    <section className="flex min-h-[80vh] items-center bg-linear-to-b from-slate-50 to-white py-24">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-secondary"
          >
            Our Founders&apos; Commitment
          </motion.span>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative mx-auto mb-8 flex h-32 w-32 items-center justify-center overflow-hidden rounded-full bg-primary shadow-lg"
          >
            <span className="text-4xl font-bold text-white">CD</span>
            <div className="absolute inset-0 rounded-full ring-4 ring-secondary/20 ring-offset-4 ring-offset-white" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, rotate: -10 }}
              whileInView={{ opacity: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Quote className="mx-auto mb-6 h-10 w-10 text-secondary/30" />
            </motion.div>

            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mx-auto mb-8 max-w-3xl text-left text-lg font-medium leading-relaxed text-primary md:text-justify md:text-2xl"
            >
              {quoteText}
            </motion.blockquote>

            <div>
              <p className="text-lg font-semibold text-primary">
                Capt. Darmansyah, M.Mar
              </p>
              <p className="text-secondary">
                Founder & Managing Director
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
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
