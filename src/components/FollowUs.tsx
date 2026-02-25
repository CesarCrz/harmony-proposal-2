"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const gridImages = [
  "/images/grid-1.png",
  "/images/grid-2.png",
  "/images/grid-3.png",
  "/images/grid-10.png",
  "/images/grid-4.png",
  "/images/grid-7.png",
  "/images/grid-5.png",
  "/images/grid-8.png",
  "/images/grid-6.png",
  "/images/grid-9.png",
];

export default function FollowUs() {
  return (
    <section className="relative overflow-hidden">
      {/* 5x2 Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
        {gridImages.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6, delay: index * 0.05 }}
            className="relative h-[180px] sm:h-[250px] md:h-[320px] lg:h-[380px] xl:h-[409px] overflow-hidden"
          >
            <Image
              src={src}
              alt={`Galeria ${index + 1}`}
              fill
              className="object-cover hover:scale-110 transition-transform duration-700"
            />
          </motion.div>
        ))}
      </div>

      {/* Center overlay card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
      >
        <Link
          href="https://www.instagram.com/harmonynailslashes"
          target="_blank"
          className="block bg-background w-[240px] sm:w-[320px] md:w-[420px] lg:w-[600px] xl:w-[692px] h-[150px] sm:h-[180px] md:h-[220px] lg:h-[300px] xl:h-[336px] shadow-[0_10px_40px_rgba(0,0,0,0.12)] flex flex-col items-center justify-center hover:bg-light transition-colors duration-300"
        >
          <Image
            src="/images/instagram-icon.svg"
            alt="Instagram"
            width={36}
            height={36}
            className="mb-3 sm:mb-4 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
          />
          <h2 className="font-montserrat font-semibold text-[18px] sm:text-[24px] md:text-[32px] lg:text-[38px] xl:text-[40px] text-primary uppercase">
            Siguenos
          </h2>
          <p className="font-montserrat text-[13px] sm:text-[14px] md:text-[16px] text-muted mt-1 sm:mt-2">
            @harmonynailslashes
          </p>
        </Link>
      </motion.div>
    </section>
  );
}
