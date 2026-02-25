import Image from "next/image";

const founders = [
  {
    image: "/images/news-1.png",
    tag: "Fundadora",
    name: "Kattya (Kath)",
    description:
      "10 años de experiencia en el mundo de las uñas. Kath es la persona que acciona, la que impulsa las decisiones. Su rapidez y pasión por el arte son lo que la caracteriza. Su sueño es llevar la esencia de Harmony a más personas a través de varias sucursales.",
  },
  {
    image: "/images/news-2.png",
    tag: "Fundadora",
    name: "Victoria",
    description:
      "7 años de experiencia en belleza profesional. Victoria es la persona que piensa, que plantea y estructura las cosas. Su visión y dedicación han sido fundamentales para el crecimiento de Harmony desde sus inicios.",
  },
];

export default function News() {
  return (
    <section className="py-10 md:py-20">
      <div className="max-w-[1532px] mx-auto px-8">
        <h2 className="font-montserrat font-semibold text-3xl lg:text-[40px] text-[#E91E8C] text-center uppercase mb-10 md:mb-16">
          Nuestro Equipo
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {founders.map((founder, index) => (
            <div key={index} className="group">
              {/* Image */}
              <div className="relative w-full h-[400px] md:h-[548px] lg:h-[666px] overflow-hidden mb-6">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div>
                <span className="inline-block font-montserrat text-[14px] text-[#E91E8C] uppercase mb-2">
                  {founder.tag}
                </span>
                <h3 className="font-montserrat font-semibold text-[32px] text-[#2D1A2E] capitalize mb-4">
                  {founder.name}
                </h3>
                <p className="font-montserrat text-[16px] leading-[25px] text-[#5A4A5C] max-w-[507px]">
                  {founder.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
