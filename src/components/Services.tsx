"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    icon: "/images/finger-icon.png",
    title: "Uñas Acrílicas / Polygel",
    description:
      "Uñas acrílicas o polygel en técnica escultural, mani express y gel de color liso. Diseños únicos con materiales de primera calidad.",
    hasWarranty: true,
    faqs: [
      {
        question: "¿Cada cuánto debo hacer mantenimiento?",
        answer: "Lo recomendable es de 15 a 20 días máximo. Aplica en acrílico, polygel, rubber gel, sistema híbrido y gel semi permanente.",
      },
      {
        question: "¿Qué cubre la garantía de 3 días?",
        answer: "Levantamiento prematuro de gel o acrílico durante los primeros 3 días después de la aplicación.",
      },
    ],
  },
  {
    icon: "/images/lashes-icon.png",
    largeIcon: true,
    title: "Extensiones de Pestañas",
    description:
      "Técnica clásica, híbrida, tecnológica/volumen y mega volumen artesanal. Realzamos tu mirada con el estilo que más te favorezca.",
    hasWarranty: false,
    faqs: [
      {
        question: "¿Qué técnicas manejan?",
        answer: "Clásica (1:1), híbrida, tecnológica/volumen y mega volumen artesanal. En consulta te orientamos sobre la ideal para ti.",
      },
    ],
  },
  {
    icon: "/images/service-3.svg",
    title: "Manicura Spa & Pedicure Spa",
    description:
      "Manicura Spa: sales, exfoliante, mascarilla, limpieza de cutícula, corte y gel de color. Pedicure Spa: completo con limpieza de canales y callosidades.",
    hasWarranty: false,
    faqs: [
      {
        question: "¿Qué incluye el Manicure Spa?",
        answer: "Sales, exfoliante, mascarilla, limpieza de cutícula, corte, cuadratura y gel de color liso.",
      },
      {
        question: "¿Qué incluye el Pedicure Spa?",
        answer: "Sales, exfoliante, mascarilla, limpieza de canales, cutícula, callosidades y gel de color liso.",
      },
    ],
  },
];

export default function Services() {
  const [openFaqIndex, setOpenFaqIndex] = useState<string | null>(null);

  return (
    <section id="servicios" className="pt-14 sm:pt-20 lg:pt-24 pb-16 sm:pb-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-14 lg:mb-16"
        >
          <span className="font-inter text-[12px] sm:text-[13px] text-primary uppercase tracking-[0.2em]">
            Lo que hacemos
          </span>
          <h2 className="font-montserrat font-semibold text-2xl sm:text-3xl lg:text-[40px] text-foreground uppercase mt-3">
            Nuestros Servicios
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-start">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative flex flex-col items-center text-center"
            >
              {/* Warranty Badge */}
              {service.hasWarranty && (
                <div className="absolute top-2 right-2 z-10 group">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-primary text-white text-[11px] font-bold rounded-full cursor-help shadow-md">
                    G
                  </span>
                  <span className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-foreground text-white text-[12px] rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                    Este servicio cuenta con garantia de 3 dias
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className="w-[120px] h-[140px] sm:w-[143px] sm:h-[163px] mb-4 flex items-center justify-center flex-shrink-0">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={service.largeIcon ? 158 : 125}
                  height={service.largeIcon ? 150 : 122}
                  style={service.icon.endsWith(".png") ? {
                    filter: "brightness(0) saturate(100%) invert(71%) sepia(35%) saturate(320%) hue-rotate(350deg) brightness(93%)",
                  } : undefined}
                />
              </div>

              {/* Title - fixed height area */}
              <h3 className="font-montserrat font-semibold text-[18px] sm:text-[20px] leading-[28px] sm:leading-[32px] text-foreground mb-2 min-h-[32px] flex items-center">
                {service.title}
              </h3>

              {/* Description - fixed height area to keep alignment */}
              <p className="font-montserrat text-[14px] sm:text-[16px] leading-[22px] sm:leading-[25px] text-muted max-w-[280px] mb-5 min-h-[75px]">
                {service.description}
              </p>

              {/* FAQ Section - always at bottom */}
              <div className="w-full text-left space-y-2 mt-auto">
                {service.faqs.map((faq, faqIdx) => {
                  const faqKey = `${index}-${faqIdx}`;
                  const isOpen = openFaqIndex === faqKey;

                  return (
                    <div key={faqIdx} className="bg-light rounded-lg overflow-hidden">
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : faqKey)}
                        className="w-full flex items-center justify-between px-4 py-3 text-left"
                      >
                        <span className="font-montserrat text-[12px] sm:text-[13px] text-foreground pr-2">
                          {faq.question}
                        </span>
                        <motion.span
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="text-primary font-bold text-[16px] flex-shrink-0"
                        >
                          +
                        </motion.span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 pb-3">
                              <p className="font-montserrat text-[12px] sm:text-[13px] leading-[20px] text-muted">
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
