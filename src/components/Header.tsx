"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Servicios", href: "#servicios" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Galeria", href: "#galeria" },
    { label: "Contacto", href: "#contacto" },
    { label: "Bolsa de Trabajo", href: "#vacante" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span
            className={`font-montserrat font-bold text-[20px] sm:text-[22px] transition-colors duration-500 text-foreground`}
          >
            Harmony
          </span>
          <span
            className={`font-montserrat text-[11px] sm:text-[12px] tracking-wide transition-colors duration-500 text-muted`}
          >
            Nails & Lashes
          </span>
        </Link>

        {/* Navigation - desktop */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`font-montserrat text-[15px] transition-colors duration-500 hover:text-primary text-foreground`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Book Button - desktop */}
        <Link
          href="https://harmony.wlbookings.com/"
          target="_blank"
          className={`hidden lg:inline-flex items-center gap-1.5 rounded-full px-7 py-2.5 font-montserrat text-[13px] uppercase tracking-wider transition-all duration-500 ${
            scrolled
              ? "bg-primary text-white hover:bg-primary/90"
              : "border border-foreground/30 text-foreground hover:bg-primary hover:text-white hover:border-primary"
          }`}
        >
          <Image
            src="https://res.cloudinary.com/dwoau0ajc/image/upload/v1775537911/corazon2_1_kddd7x.png"
            alt=""
            width={15}
            height={15}
            className="object-contain"
          />
          Agendar
        </Link>

        {/* Hamburger button - mobile */}
        <button
          className="lg:hidden relative w-8 h-8 flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
        >
          <div className="relative w-6 h-4">
            <span
              className={`absolute left-0 w-6 h-0.5 transition-all duration-300 ${
                scrolled ? "bg-foreground" : "bg-foreground"
              } ${isOpen ? "top-[7px] rotate-45" : "top-0"}`}
            />
            <span
              className={`absolute left-0 top-[7px] w-6 h-0.5 transition-all duration-300 ${
                scrolled ? "bg-foreground" : "bg-foreground"
              } ${isOpen ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`absolute left-0 w-6 h-0.5 transition-all duration-300 ${
                scrolled ? "bg-foreground" : "bg-foreground"
              } ${isOpen ? "top-[7px] -rotate-45" : "top-[14px]"}`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100dvh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden fixed inset-0 top-0 bg-white z-40 flex flex-col items-center justify-center overflow-hidden"
          >
            {/* X close button */}
            <motion.button
              className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center text-foreground hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
              aria-label="Cerrar menú"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -90 }}
              transition={{ duration: 0.25, delay: 0.15 }}
              whileTap={{ scale: 0.85 }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </motion.button>

            <nav className="flex flex-col items-center gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-montserrat text-[28px] sm:text-[32px] font-semibold text-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: navLinks.length * 0.08, duration: 0.4 }}
              >
                <Link
                  href="https://harmony.wlbookings.com/"
                  target="_blank"
                  onClick={() => setIsOpen(false)}
                  className="mt-4 inline-block bg-primary rounded-full px-10 py-3.5 font-montserrat text-[15px] text-white uppercase tracking-wider hover:bg-primary/90 transition-colors"
                >
                  Agendar Cita
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
