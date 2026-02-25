"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function OurStory() {
  return (
    <section id="nosotros" className="py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-10 sm:gap-14 lg:gap-24 xl:gap-32">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex-shrink-0 w-full lg:w-auto"
          >
            {/* Main image */}
            <div className="w-full max-w-[500px] lg:max-w-none lg:w-[560px] xl:w-[620px] h-[320px] sm:h-[420px] md:h-[500px] lg:h-[650px] overflow-hidden">
              <Image
                src="/images/story-main.png"
                alt="Kattya y Victoria - Fundadoras"
                width={663}
                height={704}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Overlapping image - repositioned for better separation */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="hidden sm:block absolute -bottom-8 -right-4 sm:-bottom-10 sm:right-4 lg:right-[-60px] lg:-bottom-12 w-[200px] sm:w-[260px] lg:w-[320px] xl:w-[350px] h-[260px] sm:h-[320px] lg:h-[390px] xl:h-[420px] rounded-t-[160px] lg:rounded-t-[180px] overflow-hidden shadow-[-15px_-15px_30px_0px_rgba(0,0,0,0.12)] z-10"
            >
              <Image
                src="/images/story-secondary.png"
                alt="Harmony Nails & Lashes"
                width={373}
                height={438}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 pt-4 sm:pt-8 lg:pt-[80px] xl:pt-[110px] relative z-20"
          >
            <span className="font-inter text-[12px] sm:text-[13px] text-primary uppercase tracking-[0.2em]">
              Quienes somos
            </span>
            <h2 className="font-montserrat font-semibold text-2xl sm:text-3xl lg:text-[40px] text-primary uppercase mt-3 mb-6 lg:mb-8">
              Nuestra Historia
            </h2>
            <div className="font-montserrat text-[14px] sm:text-[16px] leading-[24px] sm:leading-[27px] text-muted space-y-5 max-w-[440px]">
              <p>
                Harmony nacio de forma espontanea. Kattya y Victoria se conocieron trabajando en el mismo lugar, pero el ambiente se torno agotador. Decidieron aliarse y empezar desde cero con 10,000 pesos que sus abuelitas les dieron a cada una.
              </p>
              <p>
                <span className="font-semibold text-foreground">Amor y Calidez</span>
                <br />
                Empezaron con una cubeta y un banco, pero el amor fue lo que hizo que el negocio se sintiera ameno con el pasar de los dias.
              </p>
              <p>
                <span className="font-semibold text-foreground">Pasion y Arte</span>
                <br />
                {'"Harmony es nuestro lugar seguro, es nuestra terapia, nos ha dado la motivacion de seguir adelante."'}
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                href="#contacto"
                className="inline-block mt-8 bg-primary text-white font-montserrat text-[13px] sm:text-[14px] uppercase rounded-full px-8 sm:px-10 py-3.5 hover:bg-primary/90 transition-colors tracking-wider"
              >
                Conoce Mas
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
