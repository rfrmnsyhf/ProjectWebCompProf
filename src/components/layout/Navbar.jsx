import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navigation } from "@/data/navigation";
import Container from "./Container";
import { Button } from "@/components/ui/button";
import logo from "@/assets/images/LOGO.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavClick = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b backdrop-blur-md transition-all duration-300 ${
        scrolled
          ? "border-white/10 bg-primary/80"
          : "border-slate-200 bg-white/90"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">

        {/* Logo */}
        <Link to="/">
          <div className="flex items-center">
            <img
              src={logo}
              alt="CBSA Logo"
              className={`h-14 w-auto transition-all duration-300 ${
                scrolled ? "brightness-0 invert" : ""
              }`}
            />
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden gap-10 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-sm font-medium transition-colors duration-300 ${
                scrolled
                  ? "text-slate-300 hover:text-accent"
                  : "text-slate-700 hover:text-secondary"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link to="/contact">
            <Button
              className={`transition-all duration-300 ${
                scrolled
                  ? "bg-white/10 text-white hover:bg-white/20"
                  : ""
              }`}
            >
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={toggleMenu}
          className={`inline-flex items-center justify-center rounded-md p-2 transition-colors duration-300 md:hidden ${
            scrolled
              ? "text-white hover:bg-white/10"
              : "text-primary hover:bg-slate-100"
          }`}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-b border-white/10 bg-primary md:hidden"
          >
            <Container className="flex flex-col gap-4 py-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={handleNavClick}
                  className="text-sm font-medium text-slate-300 transition-colors hover:text-accent"
                >
                  {item.name}
                </Link>
              ))}
              <Link to="/contact" onClick={handleNavClick}>
                <Button className="w-full">Contact Us</Button>
              </Link>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
