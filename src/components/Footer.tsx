"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-foreground py-10 sm:py-12 md:py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 lg:gap-12 mb-12 sm:mb-16"
        >
          {/* Logo */}
          <div>
            <div className="mb-5 sm:mb-6">
              <span className="font-montserrat font-bold text-[20px] sm:text-[22px] text-white">
                Harmony
              </span>
              <span className="font-montserrat text-[11px] sm:text-[12px] text-white/80 tracking-wide ml-2">
                Nails & Lashes
              </span>
            </div>
            <p className="font-montserrat text-[13px] sm:text-[14px] text-white/70 leading-[22px]">
              Gracias a ti por apoyar nuestro sueño que se ha construido con mucho amor.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h3 className="font-montserrat font-semibold text-[18px] sm:text-[20px] text-white leading-[25px] mb-4">
              Menu
            </h3>
            <nav className="space-y-2">
              {[
                { label: "Inicio", href: "#inicio" },
                { label: "Servicios", href: "#servicios" },
                { label: "Nosotros", href: "#nosotros" },
                { label: "Galeria", href: "#galeria" },
                { label: "Contacto", href: "#contacto" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block font-montserrat text-[14px] sm:text-[16px] text-white/70 leading-[25px] hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-montserrat font-semibold text-[18px] sm:text-[20px] text-white leading-[25px] mb-4">
              Contacto
            </h3>
            <div className="space-y-2 font-montserrat text-[14px] sm:text-[16px] text-white/70 leading-[25px]">
              <p>Tel: 3310450389</p>
              <p>WhatsApp: 3329203141</p>
              <p>Av. Agricola 641 Local 1, Parques del Bosque, San Pedro Tlaquepaque, 45609 Guadalajara, Jal.</p>
            </div>
            <div className="mt-4 space-y-1 font-montserrat text-[12px] sm:text-[14px] text-white/60">
              <p>Lun - Vie: 10:00 AM - 7:00 PM</p>
              <p>Sab: 10:00 AM - 4:00 PM</p>
              <p>Dom: 11:00 AM - 3:00 PM</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-montserrat font-semibold text-[18px] sm:text-[20px] text-white leading-[25px] mb-4">
              Redes Sociales
            </h3>
            <div className="space-y-3">
              <Link
                href="https://www.instagram.com/harmonynailslashes"
                target="_blank"
                className="block font-montserrat text-[14px] sm:text-[16px] text-white/70 hover:text-primary transition-colors"
              >
                Instagram
              </Link>
              <Link
                href="https://www.tiktok.com/@harmonynailslashes"
                target="_blank"
                className="block font-montserrat text-[14px] sm:text-[16px] text-white/70 hover:text-primary transition-colors"
              >
                TikTok
              </Link>
              <Link
                href="https://wa.me/523329203141?text=Hola%20buen%20d%C3%ADa%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita"
                target="_blank"
                className="block font-montserrat text-[14px] sm:text-[16px] text-white/70 hover:text-primary transition-colors"
              >
                WhatsApp
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="border-t border-white/20 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="font-montserrat text-[13px] sm:text-[16px] text-white/60 text-center sm:text-left">
            &copy; 2026 Harmony Nails & Lashes. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-8">
            <Link
              href="#"
              className="font-montserrat text-[13px] sm:text-[16px] text-white/60 hover:text-white transition-colors"
            >
              Aviso de Privacidad
            </Link>
          </div>
                    <p className="font-montserrat text-[13px] sm:text-[16px] text-white/60 text-center sm:text-left">
            Impulsado por <a href="https://www.instagram.com/activodigital_mx/"><b>Activo digital</b></a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
