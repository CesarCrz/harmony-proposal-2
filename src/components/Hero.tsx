"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
      <section
        id="inicio"
        className="relative min-h-[100svh] lg:h-[1010px] overflow-hidden"
      >
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
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 lg:hidden" />

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

        {/* Mobile hero content */}
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
          {/* Slogan on mobile */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-montserrat text-[13px] sm:text-[15px] text-white/90 mt-4 max-w-[320px] leading-relaxed italic"
          >
            {'"Donde cada visita se siente como llegar a casa, un lugar calido construido con amor para ti"'}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Link
              href="https://wa.me/523329203141?text=Hola%20buen%20d%C3%ADa%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita"
              target="_blank"
              className="inline-block mt-6 bg-white text-foreground font-montserrat text-[13px] sm:text-[14px] uppercase rounded-full px-8 py-3 hover:bg-white/90 transition-colors tracking-wider font-semibold"
            >
              Agendar Cita
            </Link>
          </motion.div>
        </div>

        {/* Bottom overlay bar - desktop */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-0 left-0 right-0 bg-foreground h-[80px] sm:h-[100px] lg:h-[202px] z-30"
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8 h-full flex items-center">
            {/* Left side - experience badge */}
            <div className="hidden lg:flex items-center gap-8">
              <p className="font-montserrat text-[16px] text-white/70">
                17 anos de experiencia
              </p>
              <Image
                src="/images/arrow.svg"
                alt=""
                width={69}
                height={30}
                className="rotate-180 cursor-pointer opacity-70"
              />
            </div>
            {/* Right side - headline + slogan */}
            <div className="ml-auto text-right lg:text-left lg:max-w-[520px]">
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
                className="font-montserrat text-[12px] sm:text-[14px] lg:text-[15px] text-white/70 mt-2 italic leading-relaxed"
              >
                {'"Donde cada visita se siente como llegar a casa, un lugar calido construido con amor para ti"'}
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* === BOOKING BAR - desktop - new floating card design === */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block absolute bottom-[-72px] left-1/2 -translate-x-1/2 z-40 w-[calc(100%-320px)] max-w-6xl"
        >
          <div className="relative bg-white rounded-2xl shadow-[0_12px_48px_rgba(0,0,0,0.10)] overflow-hidden">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-accent to-primary" />

            <div className="flex items-stretch">
              {/* Info columns */}
              <div className="flex-1 grid grid-cols-4">
                {/* Horario */}
                <div className="group relative flex flex-col justify-center px-6 xl:px-8 py-7 transition-colors duration-300 hover:bg-light/40">
                  <div className="flex items-center gap-2 mb-2">
                    <svg
                      className="w-4 h-4 text-primary shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    <span className="font-inter font-bold text-[11px] xl:text-[12px] text-primary uppercase tracking-wider">
                      Horario
                    </span>
                  </div>
                  <p className="font-inter font-medium text-[14px] xl:text-[15px] text-foreground">
                    Lun - Vie: 10AM - 7PM
                  </p>
                  {/* Vertical separator */}
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-10 bg-foreground/8" />
                </div>

                {/* Ubicacion */}
                <div className="group relative flex flex-col justify-center px-6 xl:px-8 py-7 transition-colors duration-300 hover:bg-light/40">
                  <div className="flex items-center gap-2 mb-2">
                    <svg
                      className="w-4 h-4 text-primary shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span className="font-inter font-bold text-[11px] xl:text-[12px] text-primary uppercase tracking-wider">
                      Ubicacion
                    </span>
                  </div>
                  <p className="font-inter font-medium text-[14px] xl:text-[15px] text-foreground">
                    Guadalajara Sur
                  </p>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-10 bg-foreground/8" />
                </div>

                {/* WhatsApp */}
                <div className="group relative flex flex-col justify-center px-6 xl:px-8 py-7 transition-colors duration-300 hover:bg-light/40">
                  <div className="flex items-center gap-2 mb-2">
                    <svg
                      className="w-4 h-4 text-primary shrink-0"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.627.616l4.584-1.206A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.24 0-4.346-.697-6.077-1.888l-.424-.294-2.686.707.72-2.63-.322-.476A9.955 9.955 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                    </svg>
                    <span className="font-inter font-bold text-[11px] xl:text-[12px] text-primary uppercase tracking-wider">
                      WhatsApp
                    </span>
                  </div>
                  <p className="font-inter font-medium text-[14px] xl:text-[15px] text-foreground">
                    332 920 3141
                  </p>
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-10 bg-foreground/8" />
                </div>

                {/* Garantia */}
                <div className="group flex flex-col justify-center px-6 xl:px-8 py-7 transition-colors duration-300 hover:bg-light/40">
                  <div className="flex items-center gap-2 mb-2">
                    <svg
                      className="w-4 h-4 text-primary shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                    <span className="font-inter font-bold text-[11px] xl:text-[12px] text-primary uppercase tracking-wider">
                      Garantia
                    </span>
                  </div>
                  <p className="font-inter font-medium text-[14px] xl:text-[15px] text-foreground">
                    3 dias en unas y pestanas
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                href="https://wa.me/523329203141?text=Hola%20buen%20d%C3%ADa%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita"
                target="_blank"
                className="relative flex flex-col items-center justify-center gap-2 bg-foreground text-white px-10 xl:px-12 min-w-[180px] group transition-all duration-300 hover:bg-foreground/90"
              >
                <svg
                  className="w-6 h-6 text-white/90 transition-transform duration-300 group-hover:scale-110"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span className="font-montserrat text-[12px] xl:text-[13px] uppercase tracking-[0.15em] font-semibold">
                  Agendar Cita
                </span>
                <span className="font-inter text-[10px] text-white/60 font-normal">
                  Via WhatsApp
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* === MOBILE BOOKING SECTION === */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="lg:hidden"
      >
        {/* Info grid */}
        <div className="bg-white">
          <div className="grid grid-cols-2">
            {/* Horario */}
            <div className="flex items-start gap-3 px-5 py-5 border-b border-r border-foreground/6">
              <svg
                className="w-4 h-4 text-primary shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              <div>
                <span className="font-inter font-bold text-[11px] sm:text-[12px] text-primary uppercase tracking-wider block">
                  Horario
                </span>
                <p className="font-inter text-[12px] sm:text-[13px] text-foreground mt-0.5">
                  Lun - Vie: 10AM - 7PM
                </p>
              </div>
            </div>

            {/* Ubicacion */}
            <div className="flex items-start gap-3 px-5 py-5 border-b border-foreground/6">
              <svg
                className="w-4 h-4 text-primary shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div>
                <span className="font-inter font-bold text-[11px] sm:text-[12px] text-primary uppercase tracking-wider block">
                  Ubicacion
                </span>
                <p className="font-inter text-[12px] sm:text-[13px] text-foreground mt-0.5">
                  Guadalajara Sur
                </p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-3 px-5 py-5 border-r border-foreground/6">
              <svg
                className="w-4 h-4 text-primary shrink-0 mt-0.5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.627.616l4.584-1.206A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.24 0-4.346-.697-6.077-1.888l-.424-.294-2.686.707.72-2.63-.322-.476A9.955 9.955 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              <div>
                <span className="font-inter font-bold text-[11px] sm:text-[12px] text-primary uppercase tracking-wider block">
                  WhatsApp
                </span>
                <p className="font-inter text-[12px] sm:text-[13px] text-foreground mt-0.5">
                  332 920 3141
                </p>
              </div>
            </div>

            {/* Garantia */}
            <div className="flex items-start gap-3 px-5 py-5">
              <svg
                className="w-4 h-4 text-primary shrink-0 mt-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <div>
                <span className="font-inter font-bold text-[11px] sm:text-[12px] text-primary uppercase tracking-wider block">
                  Garantia
                </span>
                <p className="font-inter text-[12px] sm:text-[13px] text-foreground mt-0.5">
                  3 dias en unas y pestanas
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="px-5 py-5 border-t border-foreground/6">
            <Link
              href="https://wa.me/523329203141?text=Hola%20buen%20d%C3%ADa%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita"
              target="_blank"
              className="flex items-center justify-center gap-3 w-full bg-foreground text-white font-montserrat text-[13px] uppercase rounded-xl px-6 py-4 hover:bg-foreground/90 transition-colors tracking-wider font-semibold"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              Agendar Cita
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
}
