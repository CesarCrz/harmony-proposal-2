import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2D1A2E] py-10 md:py-16">
      <div className="max-w-[1532px] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo */}
          <div>
            <div className="mb-6">
              <span className="font-montserrat font-bold text-[22px] text-white">
                Harmony
              </span>
              <span className="font-montserrat text-[12px] text-white/80 tracking-wide ml-2">
                Nails & Lashes
              </span>
            </div>
            <p className="font-montserrat text-[14px] text-[#f3f3f3] leading-[22px]">
              Gracias a ti por apoyar nuestro sueño que se ha construido con mucho amor.
            </p>
          </div>

          {/* Menu */}
          <div>
            <h3 className="font-montserrat font-semibold text-[20px] text-white leading-[25px] mb-4">
              Menú
            </h3>
            <nav className="space-y-2">
              {[
                { label: "Inicio", href: "#inicio" },
                { label: "Servicios", href: "#servicios" },
                { label: "Nosotros", href: "#nosotros" },
                { label: "Galería", href: "#galeria" },
                { label: "Contacto", href: "#contacto" },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block font-montserrat text-[16px] text-[#f3f3f3] leading-[25px] hover:text-[#E91E8C] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-montserrat font-semibold text-[20px] text-white leading-[25px] mb-4">
              Contacto
            </h3>
            <div className="space-y-2 font-montserrat text-[16px] text-[#f3f3f3] leading-[25px]">
              <p>Tel: 3310450389</p>
              <p>WhatsApp: 3329203141</p>
              <p>Av. Agrícola 641 Local 1, Parques del Bosque, San Pedro Tlaquepaque, 45609 Guadalajara, Jal.</p>
            </div>
            <div className="mt-4 space-y-1 font-montserrat text-[14px] text-[#f3f3f3]/80">
              <p>Lun - Vie: 10:00 AM - 7:00 PM</p>
              <p>Sáb: 10:00 AM - 4:00 PM</p>
              <p>Dom: 11:00 AM - 3:00 PM</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-montserrat font-semibold text-[20px] text-white leading-[25px] mb-4">
              Redes Sociales
            </h3>
            <div className="space-y-3">
              <Link
                href="https://www.instagram.com/harmonynailslashes"
                target="_blank"
                className="block font-montserrat text-[16px] text-[#f3f3f3] hover:text-[#E91E8C] transition-colors"
              >
                Instagram
              </Link>
              <Link
                href="https://www.tiktok.com/@harmonynailslashes"
                target="_blank"
                className="block font-montserrat text-[16px] text-[#f3f3f3] hover:text-[#E91E8C] transition-colors"
              >
                TikTok
              </Link>
              <Link
                href="https://wa.me/523329203141?text=Hola%20buen%20d%C3%ADa%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita"
                target="_blank"
                className="block font-montserrat text-[16px] text-[#f3f3f3] hover:text-[#E91E8C] transition-colors"
              >
                WhatsApp
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/30 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-montserrat text-[16px] text-[#f3f3f3]">
            &copy; 2026 Harmony Nails & Lashes. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-8">
            <Link
              href="#"
              className="font-montserrat text-[16px] text-[#f3f3f3] hover:text-white transition-colors"
            >
              Aviso de Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
