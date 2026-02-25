import Image from "next/image";
import Link from "next/link";

export default function Products() {
  return (
    <section id="galeria" className="py-10 md:py-20 overflow-hidden">
      <div className="max-w-[1532px] mx-auto px-8">
        <h2 className="font-montserrat font-semibold text-3xl lg:text-[40px] text-[#E91E8C] text-center uppercase mb-10 md:mb-16">
          Nuestro Portafolio
        </h2>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main large image */}
          <div className="relative w-full lg:w-[734px] h-[600px] lg:h-[972px] overflow-hidden group">
            <Image
              src="/images/products-main.png"
              alt="Diseños de uñas"
              fill
              className="object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-x-0 bottom-0 h-[370px] bg-gradient-to-t from-black/60 to-transparent" />
            {/* Text overlay */}
            <div className="absolute bottom-6 left-6 lg:bottom-20 lg:left-12 z-10">
              <p className="font-montserrat text-[16px] text-[#f3f3f3] mb-2">
                SERVICIO ESTRELLA
              </p>
              <h3 className="font-montserrat font-semibold text-[40px] text-white uppercase mb-6">
                Uñas Acrílicas
              </h3>
              <Link
                href="#"
                className="border border-white text-white font-montserrat text-[14px] uppercase rounded-full px-8 py-3 hover:bg-[#E91E8C] hover:border-[#E91E8C] transition-colors"
              >
                Agendar
              </Link>
            </div>
          </div>

          {/* Grid of 4 smaller images */}
          <div className="flex-1 grid grid-cols-2 gap-6">
            <div className="relative h-[280px] lg:h-[465px] overflow-hidden group">
              <Image
                src="/images/products-2.png"
                alt="Pestañas"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30" />
              <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-montserrat font-semibold text-[20px] lg:text-[24px] text-white text-center uppercase">
                Pestañas
              </p>
            </div>
            <div className="relative h-[280px] lg:h-[465px] overflow-hidden group">
              <Image
                src="/images/products-3.png"
                alt="Manicure Spa"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30" />
              <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-montserrat font-semibold text-[20px] lg:text-[24px] text-white text-center uppercase">
                Manicure Spa
              </p>
            </div>
            <div className="relative h-[280px] lg:h-[465px] overflow-hidden group">
              <Image
                src="/images/products-4.png"
                alt="Diseños Personalizados"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30" />
              <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-montserrat font-semibold text-[20px] lg:text-[24px] text-white text-center uppercase">
                Diseños Únicos
              </p>
            </div>
            <div className="relative h-[280px] lg:h-[465px] overflow-hidden group">
              <Image
                src="/images/products-5.png"
                alt="Pedicure Spa"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/30" />
              <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-montserrat font-semibold text-[20px] lg:text-[24px] text-white text-center uppercase">
                Pedicure Spa
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
