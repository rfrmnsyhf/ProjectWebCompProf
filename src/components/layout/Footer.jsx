import { Link } from "react-router-dom";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import Container from "@/components/layout/Container";
import { navigation } from "@/data/navigation";
import { company } from "@/constants/company";
import logo from "@/assets/images/LOGO.png";

const services = [
  "Ship Agency",
  "Bunker Fuel",
  "Ship Supply",
  "Weather Routing",
  "Maritime Security",
  "Crew Manning",
];

const faqs = [
  {
    question: "Apa saja layanan utama CBSA?",
    answer:
      "Kami menyediakan ship agency, bunker fuel, ship supply, weather routing, maritime security, dan crew manning.",
  },
  {
    question: "Di mana lokasi operasional CBSA?",
    answer:
      "Kami berlokasi di Batu Ampar, Batam, Indonesia dan melayani seluruh pelabuhan di kawasan tersebut.",
  },
  {
    question: "Apakah CBSA melayani 24 jam?",
    answer:
      "Ya, tim kami siap membantu Anda 24 jam sehari, 7 hari seminggu untuk kebutuhan mendesak.",
  },
];

const socialLinks = [
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { icon: FaYoutube, href: "#", label: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <Container className="py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="mb-4 inline-block">
              <img src={logo} alt="CBSA Logo" className="h-14 w-auto brightness-0 invert" />
            </Link>
            <p className="mb-4 max-w-sm text-sm leading-relaxed text-slate-400">
              {company.slogan}. Solusi maritim terpercaya di Batam untuk
              kebutuhan operasional laut Anda.
            </p>
            <ul className="mb-6 space-y-2 text-sm text-slate-400">
              <li>
                <a
                  href={`https://wa.me/${company.phoneWhatsApp}?text=Halo%20CBSA%2C%20saya%20ingin%20konsultasi%20tentang%20layanan%20maritim.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-accent"
                >
                  {company.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="transition-colors hover:text-accent"
                >
                  {company.email}
                </a>
              </li>
              <li className="leading-relaxed">{company.address}</li>
            </ul>

            {/* Social Media */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 text-slate-400 transition-all hover:bg-secondary/20 hover:text-accent"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Navigasi
            </h4>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-slate-400 transition-colors hover:text-accent"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              Layanan
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-sm text-slate-400 transition-colors hover:text-accent"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* FAQ */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider">
              FAQ
            </h4>
            <ul className="space-y-4">
              {faqs.map((faq) => (
                <li key={faq.question}>
                  <p className="mb-1 text-sm font-medium text-white">
                    {faq.question}
                  </p>
                  <p className="text-xs leading-relaxed text-slate-500">
                    {faq.answer}
                  </p>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} {company.name}. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="transition-colors hover:text-accent">
              Kebijakan Privasi
            </a>
            <a href="#" className="transition-colors hover:text-accent">
              Syarat & Ketentuan
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
