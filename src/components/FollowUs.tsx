import Image from "next/image";
import Link from "next/link";

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
    <section className="relative">
      {/* 5x2 Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {gridImages.map((src, index) => (
          <div key={index} className="relative h-[250px] md:h-[350px] lg:h-[409px] overflow-hidden">
            <Image
              src={src}
              alt={`Galería ${index + 1}`}
              fill
              className="object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
      </div>

      {/* Center overlay card */}
      <Link
        href="https://www.instagram.com/harmonynailslashes"
        target="_blank"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FFF5F0] w-[280px] md:w-[420px] lg:w-[692px] h-[180px] md:h-[240px] lg:h-[336px] shadow-[20px_20px_30px_0px_rgba(0,0,0,0.16)] flex flex-col items-center justify-center z-10 hover:bg-[#FDE8EF] transition-colors"
      >
        <Image
          src="/images/instagram-icon.svg"
          alt="Instagram"
          width={48}
          height={48}
          className="mb-4"
        />
        <h2 className="font-montserrat font-semibold text-[20px] md:text-[32px] lg:text-[40px] text-[#E91E8C] uppercase">
          Síguenos
        </h2>
        <p className="font-montserrat text-[16px] text-[#5A4A5C] mt-2">
          @harmonynailslashes
        </p>
      </Link>
    </section>
  );
}
