"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const treatments = [
  {
    name: "Unas Acrilicas",
    description: "Disenos personalizados",
    price: "Consulta precios",
    hasWarranty: true,
    faq: { question: "Cada cuanto retoque?", answer: "Cada 2 a 3 semanas." },
  },
  {
    name: "Pestanas",
    description: "Aplicacion profesional",
    price: "Consulta precios",
    hasWarranty: true,
    faq: { question: "Cuanto duran?", answer: "De 2 a 3 semanas con cuidado." },
  },
  {
    name: "Rubber",
    description: "Acabado natural y flexible",
    price: "Consulta precios",
    hasWarranty: false,
    faq: { question: "Que es?", answer: "Base de gel flexible sobre la una natural." },
  },
  {
    name: "Manicure & Pedicure Spa",
    description: "Consentimiento completo",
    price: "Consulta precios",
    hasWarranty: false,
    faq: { question: "Que incluye?", answer: "Limpieza, exfoliacion, masaje y esmaltado." },
  },
];

export default function Treatments() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-start gap-10 sm:gap-14 lg:gap-16 xl:gap-20">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 pt-4 sm:pt-8 lg:pt-[100px] xl:pt-[133px]"
          >
            <span className="font-inter text-[12px] sm:text-[13px] text-primary uppercase tracking-[0.2em]">
              Lo que ofrecemos
            </span>
            <h2 className="font-montserrat font-semibold text-2xl sm:text-3xl lg:text-[40px] text-primary uppercase mt-3 mb-8 lg:mb-10">
              Servicios & Precios
            </h2>

            <div className="space-y-6 max-w-[550px]">
              {treatments.map((treatment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-montserrat font-semibold text-[15px] sm:text-[16px] leading-[25px] text-foreground">
                          {treatment.name}
                        </h3>
                        {treatment.hasWarranty && (
                          <span className="relative group inline-flex items-center justify-center w-5 h-5 bg-primary text-white text-[9px] font-bold rounded-full cursor-help">
                            G
                            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-foreground text-white text-[11px] rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                              Garantia de 3 dias
                            </span>
                          </span>
                        )}
                      </div>
                      <p className="font-montserrat text-[14px] sm:text-[16px] leading-[25px] text-muted">
                        {treatment.description}
                      </p>
                      {/* Inline FAQ */}
                      <button
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        className="mt-1 font-montserrat text-[12px] sm:text-[13px] text-primary hover:underline"
                      >
                        {openFaq === index ? "Cerrar FAQ" : "Ver FAQ"}
                      </button>
                      <AnimatePresence initial={false}>
                        {openFaq === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="mt-2 bg-light rounded-lg px-3 py-2">
                              <p className="font-montserrat font-semibold text-[11px] sm:text-[12px] text-foreground">
                                {treatment.faq.question}
                              </p>
                              <p className="font-montserrat text-[11px] sm:text-[12px] text-muted">
                                {treatment.faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <span className="font-montserrat font-semibold text-[14px] sm:text-[16px] leading-[25px] text-accent ml-4 whitespace-nowrap">
                      {treatment.price}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link
                href="https://wa.me/523329203141?text=Hola%20buen%20d%C3%ADa%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita"
                target="_blank"
                className="inline-block mt-8 sm:mt-10 bg-primary text-white font-montserrat text-[13px] sm:text-[14px] uppercase rounded-full px-8 sm:px-10 py-3.5 hover:bg-primary/90 transition-colors tracking-wider"
              >
                Agendar Cita
              </Link>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full lg:w-[45%] xl:w-[50%] h-[350px] sm:h-[450px] lg:h-[650px] xl:h-[704px] overflow-hidden flex-shrink-0"
          >
            <Image
              src="/images/treatments-image.png"
              alt="Servicios Harmony"
              width={766}
              height={704}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
