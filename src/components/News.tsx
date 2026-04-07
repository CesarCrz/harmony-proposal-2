"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const founders = [
  {
    video: "https://res.cloudinary.com/dwoau0ajc/video/upload/v1773081620/video_kath_xrueji.mp4",
    tag: "Fundadora",
    name: "Kathya",
    description:
      "10 años de experiencia en el mundo de las uñas. Kath es la persona que acciona, la que impulsa las decisiones. Su rapidez y pasión por el arte son lo que la caracteriza. Su sueño es llevar la esencia de Harmony a mas personas a traves de varias sucursales.",
    heart: "https://res.cloudinary.com/dwoau0ajc/image/upload/v1775537911/corazon2_1_kddd7x.png",
    heartRotate: "rotate(10deg)",
    heartPos: "-top-5 -right-4",
  },
  {
    video: "https://res.cloudinary.com/dwoau0ajc/video/upload/v1773081621/video_vic_rajdwu.mp4",
    tag: "Fundadora",
    name: "Victoria",
    description:
      "7 años de experiencia en belleza profesional. Victoria es la persona que piensa, que plantea y estructura las cosas. Su visión y dedicación han sido fundamentales para el crecimiento de Harmony desde sus inicios.",
    heart: "https://res.cloudinary.com/dwoau0ajc/image/upload/v1775537911/corazon1_1_zqv7bo.png",
    heartRotate: "rotate(-8deg)",
    heartPos: "-top-5 -left-4",
  },
];

function FounderVideo({ src, name }: { src: string; name: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  function handleClick() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }

  return (
    <div
      className="relative w-full h-[300px] sm:h-[400px] md:h-[480px] lg:h-[600px] xl:h-[666px] overflow-hidden cursor-pointer"
      onClick={handleClick}
    >
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        aria-label={name}
        className="w-full h-full object-cover"
      />
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <div className="w-16 h-16 rounded-full bg-white/85 flex items-center justify-center">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="#1d1d1e">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}

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
              {/* Video with heart decoration */}
              <div className="relative mb-5 sm:mb-6">
                <FounderVideo src={founder.video} name={founder.name} />
                <div
                  className={`absolute ${founder.heartPos} w-[70px] h-[70px] pointer-events-none z-10`}
                  style={{ transform: founder.heartRotate }}
                >
                  <Image
                    src={founder.heart}
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
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
