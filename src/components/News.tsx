"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const founders = [
  {
    image: "/images/news-1.png",
    tag: "Fundadora",
    name: "Kattya (Kath)",
    description:
      "10 anos de experiencia en el mundo de las unas. Kath es la persona que acciona, la que impulsa las decisiones. Su rapidez y pasion por el arte son lo que la caracteriza. Su sueno es llevar la esencia de Harmony a mas personas a traves de varias sucursales.",
  },
  {
    image: "/images/news-2.png",
    tag: "Fundadora",
    name: "Victoria",
    description:
      "7 anos de experiencia en belleza profesional. Victoria es la persona que piensa, que plantea y estructura las cosas. Su vision y dedicacion han sido fundamentales para el crecimiento de Harmony desde sus inicios.",
  },
];

export default function News() {
  return (
    <section className="py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-14 md:mb-16"
        >
          <span className="font-inter text-[12px] sm:text-[13px] text-primary uppercase tracking-[0.2em]">
            Las fundadoras
          </span>
          <h2 className="font-montserrat font-semibold text-2xl sm:text-3xl lg:text-[40px] text-primary uppercase mt-3">
            Nuestro Equipo
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="group"
            >
              {/* Image */}
              <div className="relative w-full h-[300px] sm:h-[400px] md:h-[480px] lg:h-[600px] xl:h-[666px] overflow-hidden mb-5 sm:mb-6">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="inline-block font-montserrat text-[12px] sm:text-[14px] text-primary uppercase tracking-wider mb-2"
                >
                  {founder.tag}
                </motion.span>
                <h3 className="font-montserrat font-semibold text-[24px] sm:text-[28px] lg:text-[32px] text-foreground capitalize mb-3 sm:mb-4">
                  {founder.name}
                </h3>
                <p className="font-montserrat text-[14px] sm:text-[16px] leading-[24px] sm:leading-[27px] text-muted max-w-[507px]">
                  {founder.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
