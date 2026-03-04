"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoFading, setVideoFading] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const FADE_BEFORE_END = 1.1; // seconds before end to start fade-to-dark
    let fadingOut = false;

    const handleTimeUpdate = () => {
      if (!video.duration) return;
      const remaining = video.duration - video.currentTime;

      if (remaining <= FADE_BEFORE_END && !fadingOut) {
        fadingOut = true;
        setVideoFading(true);
      } else if (video.currentTime < 0.5 && fadingOut) {
        // Video has looped back — wait a beat then fade back in
        fadingOut = false;
        setTimeout(() => setVideoFading(false), 180);
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  return (
    <section id="inicio" className="relative overflow-hidden">
      {/* =================== HERO IMAGE AREA =================== */}
      <div className="relative min-h-[100svh] lg:h-[920px]">
        {/* Background — video on all screen sizes */}
        <div className="absolute inset-0 lg:left-auto lg:w-[55%] overflow-hidden">
          {/* Video: portrait 9:16 — object-cover crops naturally, "center top" keeps subject
              visible and pushes the bottom watermark area out of frame on all screen sizes */}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            poster="/images/hero-main.png"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              objectPosition: "center top",
              filter: "contrast(1.06) saturate(1.08)",
            }}
          >
            <source src="/video-hero.mp4" type="video/mp4" />
          </video>
          {/* Seamless loop fade overlay — fades to dark just before loop, fades back after */}
          <div
            className="absolute inset-0 bg-black pointer-events-none z-[2]"
            style={{
              opacity: videoFading ? 0.88 : 0,
              transition: `opacity ${videoFading ? "900ms" : "1300ms"} ease-in-out`,
            }}
          />
          {/* Thin gradient at very bottom — masks any watermark remnant */}
          <div className="absolute bottom-0 left-0 right-0 h-[10%] bg-gradient-to-t from-black/50 to-transparent pointer-events-none z-[1]" />
        </div>

        {/* Gradient overlay for mobile readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60 lg:hidden" />

        {/* Secondary image - desktop only - scales with viewport */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block absolute top-[267px] w-[438px] h-[610px] rounded-t-[219px] overflow-hidden shadow-[20px_20px_30px_0px_rgba(0,0,0,0.16)] z-10"
          style={{ left: 'clamp(30%, 38%, 42%)' }}
        >
          <Image
            src="/images/hero-img2174.png"
            alt="Diseno de unas"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Hand image - desktop only - centered in the beige area (45% left side) */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:block absolute top-[282px] w-[441px] h-[294px] z-20"
          style={{ left: 'clamp(40px, calc(22.5% - 220px), 12%)' }}
        >
          <Image
            src="/images/hero-img1893.png"
            alt="Arte en unas"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* ===== SLOGAN OVERLAY - Desktop (over images area, left side) ===== */}
        <div className="hidden lg:flex absolute inset-0 z-20 items-end pb-16">
          <div className="max-w-7xl mx-auto px-8 w-full">
            <div className="max-w-[500px]">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="font-inter text-[13px] text-foreground/50 uppercase tracking-[0.25em] mb-4"
              >
                17 años de experiencia
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="font-montserrat font-bold text-[42px] xl:text-[50px] text-foreground leading-[1.1] capitalize mb-6"
              >
                Tu Estilo, Nuestro Arte
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="relative pl-5 border-l-2 border-primary/40"
              >
                <p className="font-montserrat text-[16px] xl:text-[17px] text-muted leading-relaxed italic">
                  {"\"Donde cada visita se siente como llegar a casa, un lugar calido construido con amor para ti\""}
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* ===== Mobile hero content with slogan ===== */}
        <div className="lg:hidden absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-montserrat text-[13px] sm:text-[14px] text-white/80 uppercase tracking-[0.2em] mb-3"
          >
            17 años de experiencia
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-montserrat font-semibold text-[32px] sm:text-[40px] md:text-[48px] text-white leading-tight capitalize text-balance"
          >
            Tu Estilo, Nuestro Arte
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-montserrat text-[13px] sm:text-[15px] text-white/90 mt-5 max-w-[340px] leading-relaxed italic"
          >
            {"\"Donde cada visita se siente como llegar a casa, un lugar calido construido con amor para ti\""}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Link
              href="https://wa.me/523329203141?text=Hola%20buen%20d%C3%ADa%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita"
              target="_blank"
              className="inline-block mt-7 bg-white text-foreground font-montserrat text-[13px] sm:text-[14px] uppercase rounded-full px-8 py-3.5 hover:bg-white/90 transition-colors tracking-wider font-semibold"
            >
              Agendar Cita
            </Link>
          </motion.div>
        </div>
      </div>

      {/* =================== BOOKING BAR - Desktop =================== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="hidden lg:block relative z-30 -mt-[1px]"
      >
        <div className="bg-foreground">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-stretch">
              {/* Info items */}
              {[
                {
                  icon: (
                    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  ),
                  label: "Horario",
                  value: "Lun - Sáb: 10AM - 7PM",
                },
                {
                  icon: (
                    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  ),
                  label: "Ubicación",
                  value: "Av. Agrícola 641 L1, Tlaquepaque",
                },
                {
                  icon: (
                    <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.627.616l4.584-1.206A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.24 0-4.346-.697-6.077-1.888l-.424-.294-2.686.707.72-2.63-.322-.476A9.955 9.955 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                    </svg>
                  ),
                  label: "WhatsApp",
                  value: "332 920 3141",
                },
                {
                  icon: (
                    <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  ),
                  label: "Garantía",
                  value: "3 días en uñas y pestañas",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex-1 flex items-center gap-4 px-6 xl:px-8 py-6 border-r border-white/10 last:border-r-0 group transition-colors duration-300 hover:bg-white/5"
                >
                  <div className="text-accent">{item.icon}</div>
                  <div>
                    <span className="font-inter font-semibold text-[11px] xl:text-[12px] text-accent uppercase tracking-[0.15em] block mb-0.5">
                      {item.label}
                    </span>
                    <p className="font-inter text-[13px] xl:text-[14px] text-white/80 leading-snug">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}

              {/* CTA Button */}
              <Link
                href="https://wa.me/523329203141?text=Hola%20buen%20d%C3%ADa%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita"
                target="_blank"
                className="flex items-center gap-3 bg-primary text-white px-8 xl:px-10 font-montserrat text-[13px] xl:text-[14px] uppercase tracking-[0.12em] font-semibold transition-all duration-300 hover:bg-primary/90 whitespace-nowrap"
              >
                <svg
                  className="w-5 h-5 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.8}
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
        </div>
      </motion.div>

      {/* =================== MOBILE BOOKING SECTION =================== */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="lg:hidden bg-foreground"
      >
        <div className="grid grid-cols-2">
          {[
            {
              icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              ),
              label: "Horario",
              value: "Lun - Vie: 10AM - 7PM",
            },
            {
              icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              ),
              label: "Ubicacion",
              value: "Guadalajara Sur",
            },
            {
              icon: (
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.627.616l4.584-1.206A11.955 11.955 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.24 0-4.346-.697-6.077-1.888l-.424-.294-2.686.707.72-2.63-.322-.476A9.955 9.955 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
              ),
              label: "WhatsApp",
              value: "332 920 3141",
            },
            {
              icon: (
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              ),
              label: "Garantia",
              value: "3 dias en uñas y pestañas",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`flex items-start gap-3 px-5 py-5 ${
                i < 2 ? "border-b border-white/10" : ""
              } ${i % 2 === 0 ? "border-r border-white/10" : ""}`}
            >
              <div className="text-accent shrink-0 mt-0.5">{item.icon}</div>
              <div>
                <span className="font-inter font-semibold text-[11px] sm:text-[12px] text-accent uppercase tracking-wider block">
                  {item.label}
                </span>
                <p className="font-inter text-[12px] sm:text-[13px] text-white/70 mt-0.5">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="px-5 py-5 border-t border-white/10">
          <Link
            href="https://wa.me/523329203141?text=Hola%20buen%20d%C3%ADa%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita"
            target="_blank"
            className="flex items-center justify-center gap-3 w-full bg-primary text-white font-montserrat text-[13px] uppercase rounded-lg px-6 py-4 hover:bg-primary/90 transition-colors tracking-wider font-semibold"
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
      </motion.div>
    </section>
  );
}
