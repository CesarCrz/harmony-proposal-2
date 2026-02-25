import Image from "next/image";
import Link from "next/link";

export default function OurStory() {
  return (
    <section id="nosotros" className="py-20">
      <div className="max-w-[1532px] mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          {/* Images */}
          <div className="relative flex-shrink-0 w-full lg:w-auto">
            {/* Main image */}
            <div className="w-full max-w-[500px] lg:max-w-none lg:w-[663px] h-[350px] md:h-[530px] lg:h-[704px] overflow-hidden">
              <Image
                src="/images/story-main.png"
                alt="Kattya y Victoria - Fundadoras"
                width={663}
                height={704}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Overlapping image */}
            <div className="absolute bottom-0 right-0 lg:right-[-80px] w-[300px] lg:w-[373px] h-[350px] lg:h-[438px] rounded-t-[219px] overflow-hidden shadow-[-20px_-20px_30px_0px_rgba(0,0,0,0.16)] z-10">
              <Image
                src="/images/story-secondary.png"
                alt="Harmony Nails & Lashes"
                width={373}
                height={438}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text content */}
          <div className="flex-1 pt-8 lg:pt-[110px] relative z-20">
            <h2 className="font-montserrat font-semibold text-3xl lg:text-[40px] text-[#E91E8C] uppercase mb-6">
              Nuestra Historia
            </h2>
            <div className="font-montserrat text-[16px] leading-[25px] text-[#5A4A5C] space-y-4 max-w-[401px]">
              <p>
                Harmony nació de forma espontánea. Kattya y Victoria se conocieron trabajando en el mismo lugar, pero el ambiente se tornó agotador. Decidieron aliarse y empezar desde cero con 10,000 pesos que sus abuelitas les dieron a cada una.
              </p>
              <p>
                <span className="font-semibold text-[#2D1A2E]">Amor y Calidez</span>
                <br />
                Empezaron con una cubeta y un banco, pero el amor fue lo que hizo que el negocio se sintiera ameno con el pasar de los días.
              </p>
              <p>
                <span className="font-semibold text-[#2D1A2E]">Pasión y Arte</span>
                <br />
                &ldquo;Harmony es nuestro lugar seguro, es nuestra terapia, nos ha dado la motivación de seguir adelante.&rdquo;
              </p>
            </div>
            <Link
              href="#contacto"
              className="inline-block mt-8 bg-[#E91E8C] text-white font-montserrat text-[14px] uppercase rounded-full px-10 py-3.5 hover:bg-[#d4177d] transition-colors"
            >
              Conoce Más
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
