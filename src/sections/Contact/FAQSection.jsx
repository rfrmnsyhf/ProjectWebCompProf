import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Phone, ArrowRight } from "lucide-react";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { company } from "@/constants/company";

const faqs = [
  {
    question: "Bagaimana prosedur clearance kapal asing di pelabuhan Batam?",
    answer:
      "Kami mengurus seluruh dokumen clearance termasuk Syahbandar, Bea Cukai, Imigrasi, dan Karantina. Proses biasanya selesai dalam 1-2 hari kerja tergantung kelengkapan dokumen kapal.",
  },
  {
    question: "Berapa lama waktu yang dibutuhkan untuk setiap kunjungan kapal?",
    answer:
      "Waktu tunggu bervariasi tergantung jenis layanan. Untuk clearance standar, proses dapat diselesaikan dalam 24-48 jam. Kami berusaha meminimalkan waktu tunggu agar operasional kapal tetap efisien.",
  },
  {
    question: "Apakah CBSA melayani 24 jam?",
    answer:
      "Ya, tim kami siap membantu Anda 24 jam sehari, 7 hari seminggu termasuk hari libur nasional. Operasional maritim tidak mengenal waktu dan kami memahami hal tersebut.",
  },
  {
    question: "Bagaimana dengan proses crew change?",
    answer:
      "Kami menyediakan layanan husbandry lengkap termasuk crew change, pengurusan e-Visa, akomodasi, transportasi, dan kebutuhan logistik awak kapal selama sandar di pelabuhan.",
  },
  {
    question: "Apakah CBSA berpengalaman menangani navigasi Selat Malaka?",
    answer:
      "Ya, kami memiliki pengetahuan mendalam tentang kondisi Selat Malaka dan Selat Singapura. Tim kami memahami regulasi lokal, jalur pelayaran, dan tantangan navigasi di perairan strategis ini.",
  },
];

const FAQItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-secondary"
      >
        <span className="pr-4 text-sm font-medium text-primary md:text-base">
          {faq.question}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-muted-foreground">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-secondary"
            >
              Pertanyaan Umum
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 text-3xl font-bold text-primary md:text-4xl"
            >
              Pertanyaan yang Sering Diajukan
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 text-muted-foreground leading-relaxed"
            >
              Temukan jawaban atas pertanyaan umum seputar layanan kami.
            </motion.p>

            {/* Callout Box */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-2xl border border-slate-100 bg-slate-50 p-6"
            >
              <h4 className="mb-2 font-semibold text-primary">
                Butuh Informasi Lebih Lanjut?
              </h4>
              <p className="mb-4 text-sm text-muted-foreground">
                Tim kami siap membantu menjawab pertanyaan Anda.
              </p>
              <a
                href={`https://wa.me/${company.phoneWhatsApp}?text=Halo%20CBSA%2C%20saya%20ingin%20bertanya%20tentang%20layanan%20Anda.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="sm" className="gap-2 bg-cta text-white hover:bg-cta-hover">
                  <Phone className="h-4 w-4" />
                  Chat Kami
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </a>
            </motion.div>
          </div>

          {/* Right - FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-2xl border border-slate-100 p-6 md:p-8">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={faq.question}
                  faq={faq}
                  isOpen={openIndex === index}
                  onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default FAQSection;
