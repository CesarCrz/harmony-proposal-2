"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Products() {
  return (
    <section id="galeria" className="py-12 sm:py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-14 md:mb-16"
        >
          <span className="font-inter text-[12px] sm:text-[13px] text-primary uppercase tracking-[0.2em]">
            Nuestro trabajo
          </span>
          <h2 className="font-montserrat font-semibold text-2xl sm:text-3xl lg:text-[40px] text-primary uppercase mt-3">
            Nuestro Portafolio
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-4 sm:gap-5 lg:gap-6">
          {/* Main large image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full lg:w-[50%] xl:w-[734px] h-[400px] sm:h-[500px] lg:h-[900px] xl:h-[972px] overflow-hidden group"
          >
            <Image
              src="https://res.cloudinary.com/dwoau0ajc/image/upload/v1772660733/IMG_8057_uxryru_leeqk1.jpg"
              alt="diseños de uñas"
              fill
              className="object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-x-0 bottom-0 h-[200px] sm:h-[300px] lg:h-[370px] bg-gradient-to-t from-black/60 to-transparent" />
            {/* Text overlay */}
            <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 lg:bottom-20 lg:left-12 z-10">
              <p className="font-montserrat text-[13px] sm:text-[14px] lg:text-[16px] text-white/80 mb-1 sm:mb-2">
                SERVICIO ESTRELLA
              </p>
              <h3 className="font-montserrat font-semibold text-[28px] sm:text-[34px] lg:text-[40px] text-white uppercase mb-4 sm:mb-6">
                Uñas Acrílicas
              </h3>
              <Link
                href="https://wa.me/523329203141?text=Hola%20buen%20d%C3%ADa%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita"
                target="_blank"
                className="border border-white text-white font-montserrat text-[12px] sm:text-[13px] lg:text-[14px] uppercase rounded-full px-6 sm:px-8 py-2.5 sm:py-3 hover:bg-primary hover:border-primary transition-colors tracking-wider"
              >
                Agendar
              </Link>
            </div>
          </motion.div>

          {/* Grid of 4 smaller images */}
          <div className="flex-1 grid grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
            {[
              { src: "https://res.cloudinary.com/dwoau0ajc/image/upload/v1772661771/IMG_9206_u4qak0_eiwm3e.jpg", alt: "pestañas", label: "pestañas" },
              { src: "https://res.cloudinary.com/dwoau0ajc/image/upload/v1772660972/IMG_8155_jsovz9_pxs9jl.jpg", alt: "Manicure Spa", label: "Manicure Spa" },
              { src: "https://res.cloudinary.com/dwoau0ajc/image/upload/v1772660972/IMG_9362_pniyle_edufst.jpg", alt: "diseños Personalizados", label: "diseños Unicos" },
              { src: "https://res.cloudinary.com/dwoau0ajc/image/upload/v1772660973/IMG_7583_inipcg_azeqvf.jpg", alt: "Pedicure Spa", label: "Pedicure Spa" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="relative h-[180px] sm:h-[240px] lg:h-[430px] xl:h-[465px] overflow-hidden group cursor-pointer"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-montserrat font-semibold text-[16px] sm:text-[18px] lg:text-[22px] xl:text-[24px] text-white text-center uppercase">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
