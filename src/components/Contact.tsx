"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contacto" className="py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row items-start gap-10 sm:gap-14 lg:gap-16">
          {/* Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full md:w-[50%] lg:w-[55%] h-[280px] sm:h-[350px] md:h-[450px] overflow-hidden flex-shrink-0"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.7442146708063!2d-103.41578412577336!3d20.598500802419302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ad9600000ee9%3A0xa7335b01160867dc!2sHarmony%20Nails%20%26%20Lashes!5e0!3m2!1ses-419!2smx!4v1771334206249!5m2!1ses-419!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Harmony Nails & Lashes - Ubicacion"
            />
          </motion.div>

          {/* Contact content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 pt-2 sm:pt-4 md:pt-10"
          >
            <span className="block text-center font-inter text-[12px] sm:text-[13px] text-primary uppercase tracking-[0.2em] mb-2">
              Visitanos
            </span>
            <h2 className="font-montserrat font-semibold text-2xl sm:text-3xl lg:text-[40px] text-primary text-center uppercase mb-6 sm:mb-8">
              Contactanos
            </h2>

            <div className="text-center mb-6">
              <p className="font-montserrat text-[14px] sm:text-[16px] leading-[24px] sm:leading-[25px] text-muted mb-1 sm:mb-2">
                Av. Agricola 641 Local 1, Parques del Bosque
              </p>
              <p className="font-montserrat text-[14px] sm:text-[16px] leading-[24px] sm:leading-[25px] text-muted mb-4">
                San Pedro Tlaquepaque, 45609 Guadalajara, Jal.
              </p>
              <p className="font-montserrat font-semibold text-[20px] sm:text-[24px] leading-[35px] text-foreground">
                Tel: 3310450389
              </p>
            </div>

            {/* Hours */}
            <div className="text-center mb-6 sm:mb-8">
              <p className="font-montserrat font-semibold text-[15px] sm:text-[16px] text-foreground mb-2">Horarios</p>
              <p className="font-montserrat text-[13px] sm:text-[14px] text-muted">Lun - Vie: 10:00 AM - 7:00 PM</p>
              <p className="font-montserrat text-[13px] sm:text-[14px] text-muted">Sab: 10:00 AM - 4:00 PM</p>
              <p className="font-montserrat text-[13px] sm:text-[14px] text-muted">Dom: 11:00 AM - 3:00 PM</p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
            >
              <Link
                href="https://wa.me/523329203141?text=Hola%20buen%20d%C3%ADa%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita"
                target="_blank"
                className="w-full sm:w-auto text-center bg-[#25D366] text-white font-montserrat font-semibold text-[13px] sm:text-[14px] uppercase rounded-full px-6 sm:px-8 py-3.5 hover:bg-[#1fb855] transition-colors tracking-wider"
              >
                Enviar WhatsApp
              </Link>
              <Link
                href="https://wa.me/523329203141?text=Hola%20buen%20d%C3%ADa%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita"
                target="_blank"
                className="w-full sm:w-auto text-center bg-primary text-white font-montserrat font-semibold text-[13px] sm:text-[14px] uppercase rounded-full px-6 sm:px-8 py-3.5 hover:bg-primary/90 transition-colors tracking-wider"
              >
                Agendar Cita
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
