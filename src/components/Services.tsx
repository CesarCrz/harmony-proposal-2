"use client";

import { useState } from "react";
import Image from "next/image";

const services = [
  {
    icon: "/images/service-1.svg",
    title: "Uñas Acrílicas",
    description:
      "Diseños personalizados y únicos para cada clienta. Nuestro servicio estrella con materiales de la más alta calidad.",
    hasWarranty: true,
    faqs: [
      {
        question: "¿Cada cuánto se hace el retoque?",
        answer: "Se recomienda cada 2 a 3 semanas para mantener tus uñas en perfecto estado.",
      },
      {
        question: "¿Cuánto duran?",
        answer: "Con el cuidado adecuado, duran de 3 a 4 semanas antes de necesitar retoque.",
      },
    ],
  },
  {
    icon: "/images/service-2.svg",
    title: "Pestañas",
    description:
      "Aplicación profesional que realza tu mirada de forma natural. Diferentes estilos para adaptarse a tu personalidad.",
    hasWarranty: true,
    faqs: [
      {
        question: "¿Cuánto duran las pestañas?",
        answer: "Aproximadamente de 2 a 3 semanas dependiendo del cuidado y ciclo natural.",
      },
      {
        question: "¿Cada cuánto necesito retoque?",
        answer: "Se recomienda retoque cada 2 a 3 semanas para mantener volumen.",
      },
    ],
  },
  {
    icon: "/images/service-3.svg",
    title: "Manicure & Pedicure Spa",
    description:
      "Experiencia completa de consentimiento. Limpieza profunda, exfoliación, hidratación y esmaltado profesional.",
    hasWarranty: false,
    faqs: [
      {
        question: "¿Qué incluye el servicio?",
        answer: "Limpieza de cutícula, exfoliación, masaje hidratante, corte, limado y esmaltado.",
      },
      {
        question: "¿Cuánto dura la sesión?",
        answer: "Manicure: 45 min a 1 hora. Pedicure: 1 a 1.5 horas.",
      },
    ],
  },
];

export default function Services() {
  const [openFaqIndex, setOpenFaqIndex] = useState<string | null>(null);

  return (
    <section id="servicios" className="pt-8 lg:pt-[220px] pb-20">
      <div className="max-w-[1253px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="relative flex flex-col items-center text-center h-full">
              {/* Warranty Badge */}
              {service.hasWarranty && (
                <div className="absolute top-2 right-2 z-10 group">
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-[#E91E8C] text-white text-[11px] font-bold rounded-full cursor-help shadow-md">
                    G
                  </span>
                  <span className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-[#2D1A2E] text-white text-[12px] rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20">
                    Este servicio cuenta con garantía de 3 días
                  </span>
                </div>
              )}

              <div className="w-[143px] h-[163px] mb-4 flex items-center justify-center">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={125}
                  height={122}
                />
              </div>
              <h3 className="font-montserrat font-semibold text-[20px] leading-[32px] text-[#2D1A2E] mb-2">
                {service.title}
              </h3>
              <p className="font-montserrat text-[16px] leading-[25px] text-[#5A4A5C] max-w-[265px] mb-4">
                {service.description}
              </p>

              {/* FAQ Section */}
              <div className="w-full text-left space-y-2">
                {service.faqs.map((faq, faqIdx) => {
                  const faqKey = `${index}-${faqIdx}`;
                  const isOpen = openFaqIndex === faqKey;

                  return (
                    <div key={faqIdx} className="bg-[#FDE8EF] rounded-lg overflow-hidden">
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : faqKey)}
                        className="w-full flex items-center justify-between px-4 py-3 text-left"
                      >
                        <span className="font-montserrat text-[13px] text-[#2D1A2E] pr-2">
                          {faq.question}
                        </span>
                        <span className="text-[#E91E8C] font-bold text-[16px] flex-shrink-0">
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-3">
                          <p className="font-montserrat text-[13px] leading-[20px] text-[#5A4A5C]">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
