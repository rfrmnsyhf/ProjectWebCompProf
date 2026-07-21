import { motion } from "framer-motion";
import { Target, Eye, ShieldCheck, Users, Award, Globe } from "lucide-react";
import Container from "@/components/layout/Container";
import { company } from "@/constants/company";

const About = () => {
  return (
    <section id="about" className="flex min-h-screen items-center bg-white py-24">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-secondary">
                About Us
              </span>
              <h2 className="mb-6 text-3xl font-bold text-primary md:text-4xl lg:text-5xl">
                Perusahaan{" "}
                <span className="text-secondary">Maritim Independen</span>
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-gray">
                {company.shortName} merupakan perusahaan independen yang bergerak
                di bidang jasa kepelabuhanan dan pelayaran. Kami menyediakan
                layanan di bidang port services, shipping agency, dan maritime
                logistics di Batam, Indonesia.
              </p>
              <p className="mb-6 text-lg leading-relaxed text-gray">
                Kami menekankan pelayanan cepat, tenaga profesional berpengalaman,
                pemahaman mendalam terhadap regulasi pelabuhan, serta penerapan
                standar HSE (Health, Safety & Environment) dalam setiap operasi.
              </p>
              <p className="mb-8 text-lg leading-relaxed text-gray">
                CBSA mendukung seluruh kebutuhan kapal selama sandar di pelabuhan
                dengan layanan yang dapat diandalkan.
              </p>
            </motion.div>

            {/* Mission & Vision */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary/10">
                  <Target className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-primary">Visi</h4>
                  <p className="text-sm text-gray">
                    Menjadi perusahaan jasa kepelabuhanan dan pelayaran nasional
                    kelas dunia dengan standar pelayanan internasional.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/20">
                  <Eye className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-primary">Misi</h4>
                  <p className="text-sm text-gray">
                    Membangun hubungan bisnis berdasarkan kepercayaan, memberikan
                    nilai tambah, dan menyelesaikan pekerjaan tepat waktu.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { icon: ShieldCheck, title: "Standar HSE", desc: "Keselamatan kerja & lingkungan" },
              { icon: Users, title: "Tim Profesional", desc: "Pengalaman bertahun-tahun" },
              { icon: Award, title: "Layanan Cepat", desc: "Tepat waktu & dapat diandalkan" },
              { icon: Globe, title: "Regulasi Pelabuhan", desc: "Pemahaman mendalam" },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="group rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-sm transition-all hover:border-secondary/20 hover:shadow-md"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/5 transition-colors group-hover:bg-secondary/10">
                  <item.icon className="h-7 w-7 text-secondary" />
                </div>
                <h4 className="mb-1 font-semibold text-primary">{item.title}</h4>
                <p className="text-sm text-gray">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default About;
