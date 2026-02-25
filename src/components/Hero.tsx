"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
      <section id="inicio" className="relative min-h-[100svh] lg:h-[1010px] overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 lg:left-auto lg:w-[55%]">
          <Image
            src="/images/hero-main.png"
            alt="Harmony Nails & Lashes"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Gradient overlay for mobile readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/50 lg:hidden" />

        {/* Secondary image - desktop only */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block absolute top-[267px] left-[38%] w-[438px] h-[610px] rounded-t-[219px] overflow-hidden shadow-[20px_20px_30px_0px_rgba(0,0,0,0.16)] z-10"
        >
          <Image
            src="/images/hero-secondary.png"
            alt="Diseno de unas"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Hand image - desktop only */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block absolute top-[282px] left-[12%] w-[441px] h-[294px] z-20"
        >
          <Image
            src="/images/hero-hand.png"
            alt="Arte en unas"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Mobile hero text */}
        <div className="lg:hidden absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-montserrat text-[13px] sm:text-[14px] text-white/80 uppercase tracking-[0.2em] mb-3"
          >
            17 anos de experiencia
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-montserrat font-semibold text-[32px] sm:text-[40px] md:text-[48px] text-white leading-tight capitalize text-balance"
          >
            Tu estilo, nuestro arte
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-montserrat text-[14px] sm:text-[16px] text-white/80 mt-3"
          >
            Disenos personalizados con amor
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Link
              href="https://wa.me/523329203141?text=Hola%20buen%20d%C3%ADa%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita"
              target="_blank"
              className="inline-block mt-6 bg-primary text-white font-montserrat text-[13px] sm:text-[14px] uppercase rounded-full px-8 py-3 hover:bg-primary/90 transition-colors tracking-wider"
            >
              Agendar Cita
            </Link>
          </motion.div>
        </div>

        {/* Bottom overlay bar */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-0 left-0 right-0 bg-primary h-[80px] sm:h-[100px] lg:h-[202px] z-30"
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8 h-full flex items-center">
            <div className="hidden lg:flex items-center gap-8">
              <p className="font-montserrat text-[16px] text-white/80">
                17 anos de experiencia
              </p>
              <Image
                src="/images/arrow.svg"
                alt=""
                width={69}
                height={30}
                className="rotate-180 cursor-pointer"
              />
            </div>
            <div className="ml-auto text-right lg:text-left">
              <motion.h2
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="font-montserrat font-semibold text-[18px] sm:text-[22px] lg:text-[32px] text-white capitalize"
              >
                Tu estilo, nuestro arte
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="font-montserrat text-[12px] sm:text-[14px] lg:text-[16px] text-white/80"
              >
                Disenos personalizados con amor
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Booking Bar - desktop only - redesigned */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block absolute bottom-[-62px] left-1/2 -translate-x-1/2 z-40 w-[calc(100%-388px)] max-w-7xl"
        >
          <div className="bg-white shadow-[0_8px_40px_rgba(0,0,0,0.08)] flex items-stretch">
            {/* Info items */}
            <div className="flex-1 grid grid-cols-4">
              <div className="flex flex-col justify-center px-6 xl:px-8 py-6 border-r border-foreground/10">
                <span className="font-inter font-bold text-[12px] xl:text-[13px] text-primary uppercase tracking-wider">
                  Horario
                </span>
                <p className="font-inter font-medium text-[14px] xl:text-[15px] text-muted mt-1.5">
                  Lun - Vie: 10AM - 7PM
                </p>
              </div>
              <div className="flex flex-col justify-center px-6 xl:px-8 py-6 border-r border-foreground/10">
                <span className="font-inter font-bold text-[12px] xl:text-[13px] text-primary uppercase tracking-wider">
                  Ubicacion
                </span>
                <p className="font-inter font-medium text-[14px] xl:text-[15px] text-muted mt-1.5">
                  Guadalajara Sur
                </p>
              </div>
              <div className="flex flex-col justify-center px-6 xl:px-8 py-6 border-r border-foreground/10">
                <span className="font-inter font-bold text-[12px] xl:text-[13px] text-primary uppercase tracking-wider">
                  WhatsApp
                </span>
                <p className="font-inter font-medium text-[14px] xl:text-[15px] text-muted mt-1.5">
                  332 920 3141
                </p>
              </div>
              <div className="flex flex-col justify-center px-6 xl:px-8 py-6">
                <span className="font-inter font-bold text-[12px] xl:text-[13px] text-primary uppercase tracking-wider">
                  Garantia
                </span>
                <p className="font-inter font-medium text-[14px] xl:text-[15px] text-muted mt-1.5">
                  3 dias en unas y pestanas
                </p>
              </div>
            </div>

            {/* Book Now Button */}
            <Link
              href="https://wa.me/523329203141?text=Hola%20buen%20d%C3%ADa%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita"
              target="_blank"
              className="flex items-center justify-center bg-primary text-white font-montserrat text-[13px] uppercase tracking-wider px-8 xl:px-10 hover:bg-primary/90 transition-colors whitespace-nowrap"
            >
              Agendar Cita
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Mobile info block */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="lg:hidden bg-white shadow-md"
      >
        <div className="grid grid-cols-2 divide-x divide-foreground/10">
          <div className="px-5 py-5">
            <span className="font-inter font-bold text-[11px] sm:text-[12px] text-primary uppercase tracking-wider">
              Horario
            </span>
            <p className="font-inter text-[12px] sm:text-[13px] text-muted mt-1">
              Lun - Vie: 10AM - 7PM
            </p>
          </div>
          <div className="px-5 py-5">
            <span className="font-inter font-bold text-[11px] sm:text-[12px] text-primary uppercase tracking-wider">
              Ubicacion
            </span>
            <p className="font-inter text-[12px] sm:text-[13px] text-muted mt-1">
              Guadalajara Sur
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 divide-x divide-foreground/10 border-t border-foreground/10">
          <div className="px-5 py-5">
            <span className="font-inter font-bold text-[11px] sm:text-[12px] text-primary uppercase tracking-wider">
              WhatsApp
            </span>
            <p className="font-inter text-[12px] sm:text-[13px] text-muted mt-1">
              332 920 3141
            </p>
          </div>
          <div className="px-5 py-5">
            <span className="font-inter font-bold text-[11px] sm:text-[12px] text-primary uppercase tracking-wider">
              Garantia
            </span>
            <p className="font-inter text-[12px] sm:text-[13px] text-muted mt-1">
              3 dias en unas y pestanas
            </p>
          </div>
        </div>
        <div className="px-5 py-5 border-t border-foreground/10 text-center">
          <Link
            href="https://wa.me/523329203141?text=Hola%20buen%20d%C3%ADa%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita"
            target="_blank"
            className="inline-block bg-primary text-white font-montserrat text-[13px] uppercase rounded-full px-8 py-3 hover:bg-primary/90 transition-colors tracking-wider"
          >
            Agendar Cita
          </Link>
        </div>
      </motion.div>
    </>
  );
}
