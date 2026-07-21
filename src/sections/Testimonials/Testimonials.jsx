import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Container from "@/components/layout/Container";

const testimonials = [
  {
    quote:
      "CBSA memberikan layanan yang luar biasa untuk armada tanker kami. Respons cepat dan profesional.",
    author: "Operations Director",
    company: "PT Pertamina Shipping",
  },
  {
    quote:
      "Kami telah bekerja sama dengan CBSA selama bertahun-tahun. Konsistensi kualitas layanan yang mereka berikan tidak pernah mengecewakan.",
    author: "Fleet Manager",
    company: "Pacific Maritime Lines",
  },
  {
    quote:
      "Pengetahuan lokal CBSA tentang pelabuhan Batam sangat membantu operasional kami. Mereka benar-benar paham kebutuhan klien.",
    author: "Logistics Manager",
    company: "Global Offshore Solutions",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-secondary"
          >
            Testimoni
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 text-3xl font-bold text-primary md:text-4xl"
          >
            Kata Mereka Tentang <span className="text-secondary">CBSA</span>
          </motion.h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.author}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="relative rounded-2xl border border-slate-100 p-8"
            >
              <Quote className="mb-4 h-8 w-8 text-secondary/30" />
              <p className="mb-6 text-gray leading-relaxed italic">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-primary">{item.author}</p>
                <p className="text-sm text-gray">{item.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
