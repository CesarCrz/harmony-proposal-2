"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const additionalServices = [
  {
    image: "/images/polish-1.png",
    name: "Rubber Gel",
    description: "Nivelación en uña natural con mani express y gel color liso",
  },
  {
    image: "/images/polish-2.png",
    name: "Gel Semi Permanente",
    description: "Gel de color liso sobre uña natural",
  },
  {
    image: "/images/polish-3.png",
    name: "Sistema Híbrido",
    description: "Polygel + rubber gel, mani express y gel de color liso",
  },
  {
    image: "/images/polish-4.png",
    name: "Manicura Russa",
    description: "Limpieza de cutícula profunda en seco y gel de color liso",
  },
];

export default function Polishes() {
  return (
    <section className="bg-primary py-12 sm:py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="font-montserrat font-semibold text-2xl sm:text-3xl lg:text-[40px] text-white text-center uppercase mb-10 md:mb-16"
        >
          Nuestros Geles
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {additionalServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="flex flex-col items-center text-center cursor-pointer"
            >
              <div className="relative w-[100px] sm:w-[120px] md:w-[149px] h-[200px] sm:h-[240px] md:h-[294px] mb-6 sm:mb-8 [filter:drop-shadow(0px_14px_22px_rgba(0,0,0,0.22))]">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-montserrat font-semibold text-[16px] sm:text-[18px] md:text-[20px] leading-[28px] sm:leading-[32px] text-white mb-1">
                {service.name}
              </h3>
              <p className="font-montserrat text-[13px] sm:text-[14px] md:text-[16px] leading-[22px] sm:leading-[25px] text-white/80">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
