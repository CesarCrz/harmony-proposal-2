import Image from "next/image";

const additionalServices = [
  {
    image: "/images/polish-1.png",
    name: "Rubber",
    description: "Acabado natural y flexible",
  },
  {
    image: "/images/polish-2.png",
    name: "Sistemas Cítidos",
    description: "Alternativa al acrílico",
  },
  {
    image: "/images/polish-3.png",
    name: "Peinados Express",
    description: "Para eventos especiales",
  },
  {
    image: "/images/polish-4.png",
    name: "Diseño de Ceja",
    description: "Definición profesional",
  },
];

export default function Polishes() {
  return (
    <section className="bg-[#E91E8C] py-12 md:py-24">
      <div className="max-w-[1532px] mx-auto px-8">
        <h2 className="font-montserrat font-semibold text-3xl lg:text-[40px] text-white text-center uppercase mb-10 md:mb-16">
          Más Servicios
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {additionalServices.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center group cursor-pointer">
              <div className="relative w-[149px] h-[294px] mb-8 shadow-[-30px_-10px_30px_0px_rgba(0,0,0,0.16)] group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-montserrat font-semibold text-[20px] leading-[32px] text-white mb-1">
                {service.name}
              </h3>
              <p className="font-montserrat text-[16px] leading-[25px] text-[#f3f3f3]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
