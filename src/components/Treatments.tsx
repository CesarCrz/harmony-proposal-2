"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const treatments = [
  {
    name: "Uñas Acrílicas / Polygel",
    description: "Técnica escultural, mani express y gel de color liso. Diseños únicos y personalizados.",
    price: "Consulta precios",
    hasWarranty: true,
    faq: { question: "¿Cada cuánto se hace el mantenimiento?", answer: "De 15 a 20 días máximo. Aplica en acrílico, polygel, rubber gel, sistema híbrido y gel semi permanente." },
  },
  {
    name: "Extensiones de Pestañas",
    description: "Clásica, híbrida, tecnológica/volumen y mega volumen artesanal.",
    price: "Consulta precios",
    hasWarranty: false,
    faq: { question: "¿Cuándo se recomienda el relleno?", answer: "Se recomienda el retoque o relleno cada 2 a 3 semanas para mantener el volumen y la apariencia deseada." },
  },
  {
    name: "Nivelación Rubber Gel / Gel Semi Permanente",
    description: "Rubber gel: nivelación en uña natural con mani express y gel de color. Gel semi permanente: color liso sobre uña natural.",
    price: "Consulta precios",
    hasWarranty: true,
    faq: { question: "¿Cuánto dura?", answer: "El mantenimiento recomendado es de 15 a 20 días para ambos servicios." },
  },
  {
    name: "Sistema Híbrido",
    description: "Polygel escultural o sobre uña natural, nivelación de rubber gel, mani express y gel de color liso.",
    price: "Consulta precios",
    hasWarranty: true,
    faq: { question: "¿Qué es el sistema híbrido?", answer: "Combina polygel con rubber gel para mayor resistencia y flexibilidad que los sistemas tradicionales." },
  },
  {
    name: "Manicura Russa",
    description: "Limpieza de cutícula profunda en seco y gel de color liso. Técnica de precisión con acabado ultra limpio.",
    price: "Consulta precios",
    hasWarranty: false,
    faq: { question: "¿Qué la diferencia de la tradicional?", answer: "Se realiza en seco con fresa eléctrica, permitiendo una limpieza de cutícula mucho más profunda y precisa." },
  },
  {
    name: "Manicura Spa & Pedicure Spa",
    description: "Manicura: sales, exfoliante, mascarilla, limpieza de cutícula, corte y gel. Pedicure: incluye canales y callosidades.",
    price: "Consulta precios",
    hasWarranty: false,
    faq: { question: "¿Qué incluye el pedicure spa?", answer: "Sales, exfoliante, mascarilla, limpieza de canales, cutícula, callosidades y gel de color liso." },
  },
  {
    name: "Lash Lifting",
    description: "Rizado de pestañas naturales. Levanta y ondula tu pestaña propia para una mirada más abierta y expresiva.",
    price: "Consulta precios",
    hasWarranty: false,
    faq: { question: "¿Cuánto dura el efecto?", answer: "Entre 6 y 8 semanas, dependiendo del ciclo natural de crecimiento de tus pestañas." },
  },
  {
    name: "Diseño de Ceja",
    description: "Diseño con visagismo, contorno de hilos con pigmento, depilación de ceja y laminado.",
    price: "Consulta precios",
    hasWarranty: false,
    faq: { question: "¿Qué incluye el servicio?", answer: "Diseño con visagismo, contorno con hilo y pigmento, depilación y opción de laminado de ceja." },
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
            className="w-full lg:w-[45%] xl:w-[50%] h-[350px] sm:h-[450px] lg:h-[650px] xl:h-[704px] overflow-hidden flex-shrink-0 lg:self-center"
          >
            <Image
              src="https://res.cloudinary.com/dwoau0ajc/image/upload/v1772642049/IMG_9644_iij76j.jpg"
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
