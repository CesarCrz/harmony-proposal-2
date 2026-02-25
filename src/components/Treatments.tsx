"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const treatments = [
  {
    name: "Uñas Acrílicas",
    description: "Diseños personalizados",
    price: "Consulta precios",
    hasWarranty: true,
    faq: { question: "¿Cada cuánto retoque?", answer: "Cada 2 a 3 semanas." },
  },
  {
    name: "Pestañas",
    description: "Aplicación profesional",
    price: "Consulta precios",
    hasWarranty: true,
    faq: { question: "¿Cuánto duran?", answer: "De 2 a 3 semanas con cuidado." },
  },
  {
    name: "Rubber",
    description: "Acabado natural y flexible",
    price: "Consulta precios",
    hasWarranty: false,
    faq: { question: "¿Qué es?", answer: "Base de gel flexible sobre la uña natural." },
  },
  {
    name: "Manicure & Pedicure Spa",
    description: "Consentimiento completo",
    price: "Consulta precios",
    hasWarranty: false,
    faq: { question: "¿Qué incluye?", answer: "Limpieza, exfoliación, masaje y esmaltado." },
  },
];

export default function Treatments() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="py-10 md:py-20">
      <div className="max-w-[1532px] mx-auto px-8">
        <div className="flex flex-col-reverse lg:flex-row items-start gap-16">
          {/* Text content */}
          <div className="flex-1 pt-8 lg:pt-[133px]">
            <h2 className="font-montserrat font-semibold text-3xl lg:text-[40px] text-[#E91E8C] uppercase mb-8 lg:mb-10">
              Servicios & Precios
            </h2>

            <div className="space-y-6 max-w-[550px]">
              {treatments.map((treatment, index) => (
                <div key={index}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-montserrat font-semibold text-[16px] leading-[25px] text-[#2D1A2E]">
                          {treatment.name}
                        </h3>
                        {treatment.hasWarranty && (
                          <span className="relative group inline-flex items-center justify-center w-5 h-5 bg-[#E91E8C] text-white text-[9px] font-bold rounded-full cursor-help">
                            G
                            <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-[#2D1A2E] text-white text-[11px] rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                              Garantía de 3 días
                            </span>
                          </span>
                        )}
                      </div>
                      <p className="font-montserrat text-[16px] leading-[25px] text-[#5A4A5C]">
                        {treatment.description}
                      </p>
                      {/* Inline FAQ */}
                      <button
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        className="mt-1 font-montserrat text-[13px] text-[#E91E8C] hover:underline"
                      >
                        {openFaq === index ? "Cerrar FAQ ▲" : "Ver FAQ ▼"}
                      </button>
                      {openFaq === index && (
                        <div className="mt-2 bg-[#FDE8EF] rounded-lg px-3 py-2">
                          <p className="font-montserrat font-semibold text-[12px] text-[#2D1A2E]">
                            {treatment.faq.question}
                          </p>
                          <p className="font-montserrat text-[12px] text-[#5A4A5C]">
                            {treatment.faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                    <span className="font-montserrat font-semibold text-[16px] leading-[25px] text-[#D4A853] ml-4">
                      {treatment.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="#"
              className="inline-block mt-10 bg-[#E91E8C] text-white font-montserrat text-[14px] uppercase rounded-full px-10 py-3.5 hover:bg-[#d4177d] transition-colors"
            >
              Agendar Cita
            </Link>
          </div>

          {/* Image */}
          <div className="w-full lg:w-[766px] h-[500px] lg:h-[704px] overflow-hidden flex-shrink-0">
            <Image
              src="/images/treatments-image.png"
              alt="Servicios Harmony"
              width={766}
              height={704}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
