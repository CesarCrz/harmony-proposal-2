import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section id="inicio" className="relative min-h-[600px] md:min-h-[800px] lg:h-[1010px]">
        {/* Background image */}
        <div className="absolute top-0 right-0 w-full lg:w-[55%] h-full">
          <Image
            src="/images/hero-main.png"
            alt="Harmony Nails & Lashes"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Gradient overlay for mobile readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 lg:hidden" />

        {/* Secondary image - desktop only */}
        <div className="hidden lg:block absolute top-[267px] left-[38%] w-[438px] h-[610px] rounded-t-[219px] overflow-hidden shadow-[20px_20px_30px_0px_rgba(0,0,0,0.16)] z-10">
          <Image
            src="/images/hero-secondary.png"
            alt="Diseño de uñas"
            fill
            className="object-cover"
          />
        </div>

        {/* Hand image - desktop only */}
        <div className="hidden lg:block absolute top-[282px] left-[12%] w-[441px] h-[294px] z-20">
          <Image
            src="/images/hero-hand.png"
            alt="Arte en uñas"
            fill
            className="object-cover"
          />
        </div>

        {/* Bottom overlay bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-[#E91E8C] h-[100px] lg:h-[202px] z-30">
          <div className="max-w-[1532px] mx-auto px-8 h-full flex items-center">
            <div className="flex items-center gap-4 lg:gap-8">
              <p className="font-montserrat text-[12px] lg:text-[16px] text-white/80">
                17 años de experiencia
              </p>
              <Image
                src="/images/arrow.svg"
                alt=""
                width={69}
                height={30}
                className="rotate-180 cursor-pointer hidden lg:block"
              />
            </div>
            <div className="ml-auto text-left">
              <h2 className="font-montserrat font-semibold text-[20px] lg:text-[32px] text-white capitalize">
                Tu estilo, nuestro arte
              </h2>
              <p className="font-montserrat text-[12px] lg:text-[16px] text-white/80">
                Diseños personalizados con amor
              </p>
            </div>
          </div>
        </div>

        {/* Booking Bar - desktop only */}
        <div className="hidden lg:flex absolute bottom-[-62px] left-1/2 -translate-x-1/2 bg-white z-40 w-[calc(100%-2*194px)] max-w-[1532px] h-[125px] shadow-lg items-center px-8">
          <div className="flex-1 flex items-center gap-12">
            {/* Info 1 */}
            <div className="flex-1">
              <span className="font-inter font-bold text-[16px] text-[#E91E8C] uppercase">
                Horario
              </span>
              <p className="font-inter font-semibold text-[16px] text-[#5A4A5C] mt-2">
                Lun - Vie: 10AM - 7PM
              </p>
              <div className="border-b border-[#5A4A5C]/30 mt-2" />
            </div>

            {/* Info 2 */}
            <div className="flex-1">
              <span className="font-inter font-bold text-[16px] text-[#E91E8C] uppercase">
                Ubicación
              </span>
              <p className="font-inter font-semibold text-[16px] text-[#5A4A5C] mt-2">
                Guadalajara Sur
              </p>
              <div className="border-b border-[#5A4A5C]/30 mt-2" />
            </div>

            {/* Info 3 */}
            <div className="flex-1">
              <span className="font-inter font-bold text-[16px] text-[#E91E8C] uppercase">
                WhatsApp
              </span>
              <p className="font-inter font-semibold text-[16px] text-[#5A4A5C] mt-2">
                3329203141
              </p>
              <div className="border-b border-[#5A4A5C]/30 mt-2" />
            </div>

            {/* Info 4 */}
            <div className="flex-1">
              <span className="font-inter font-bold text-[16px] text-[#E91E8C] uppercase">
                Garantía
              </span>
              <p className="font-inter font-semibold text-[16px] text-[#5A4A5C] mt-2">
                3 días en uñas y pestañas
              </p>
              <div className="border-b border-[#5A4A5C]/30 mt-2" />
            </div>
          </div>

          {/* Book Now Button */}
          <Link
            href="#"
            className="ml-8 bg-[#E91E8C] text-white font-montserrat text-[14px] uppercase rounded-full px-10 py-3.5 hover:bg-[#d4177d] transition-colors"
          >
            Agendar Cita
          </Link>
        </div>
      </section>

      {/* Mobile info block - shown only on mobile/tablet */}
      <div className="lg:hidden bg-white shadow-md px-6 py-6">
        <div className="grid grid-cols-2 gap-x-6 gap-y-4 max-w-sm mx-auto mb-5">
          <div>
            <span className="font-inter font-bold text-[13px] text-[#E91E8C] uppercase">
              Horario
            </span>
            <p className="font-inter text-[13px] text-[#5A4A5C] mt-1">
              Lun - Vie: 10AM - 7PM
            </p>
          </div>
          <div>
            <span className="font-inter font-bold text-[13px] text-[#E91E8C] uppercase">
              Ubicación
            </span>
            <p className="font-inter text-[13px] text-[#5A4A5C] mt-1">
              Guadalajara Sur
            </p>
          </div>
          <div>
            <span className="font-inter font-bold text-[13px] text-[#E91E8C] uppercase">
              WhatsApp
            </span>
            <p className="font-inter text-[13px] text-[#5A4A5C] mt-1">
              3329203141
            </p>
          </div>
          <div>
            <span className="font-inter font-bold text-[13px] text-[#E91E8C] uppercase">
              Garantía
            </span>
            <p className="font-inter text-[13px] text-[#5A4A5C] mt-1">
              3 días en uñas y pestañas
            </p>
          </div>
        </div>
        <div className="text-center">
          <Link
            href="#"
            className="inline-block bg-[#E91E8C] text-white font-montserrat text-[14px] uppercase rounded-full px-8 py-3 hover:bg-[#d4177d] transition-colors"
          >
            Agendar Cita
          </Link>
        </div>
      </div>
    </>
  );
}
