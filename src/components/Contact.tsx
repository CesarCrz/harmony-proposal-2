import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contacto" className="py-10 md:py-20">
      <div className="max-w-[1532px] mx-auto px-8">
        <div className="flex flex-col md:flex-row items-start gap-16">
          {/* Google Maps */}
          <div className="relative w-full md:w-[653px] h-[300px] md:h-[450px] overflow-hidden flex-shrink-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3734.7442146708063!2d-103.41578412577336!3d20.598500802419302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428ad9600000ee9%3A0xa7335b01160867dc!2sHarmony%20Nails%20%26%20Lashes!5e0!3m2!1ses-419!2smx!4v1771334206249!5m2!1ses-419!2smx"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Harmony Nails & Lashes - Ubicación"
            />
          </div>

          {/* Contact content */}
          <div className="flex-1 pt-4 md:pt-10">
            <h2 className="font-montserrat font-semibold text-3xl lg:text-[40px] text-[#E91E8C] text-center uppercase mb-6">
              Contáctanos
            </h2>

            <div className="text-center mb-6">
              <p className="font-montserrat text-[16px] leading-[25px] text-[#5A4A5C] mb-2">
                Av. Agrícola 641 Local 1, Parques del Bosque
              </p>
              <p className="font-montserrat text-[16px] leading-[25px] text-[#5A4A5C] mb-4">
                San Pedro Tlaquepaque, 45609 Guadalajara, Jal.
              </p>
              <p className="font-montserrat font-semibold text-[24px] leading-[35px] text-[#2D1A2E]">
                Tel: 3310450389
              </p>
            </div>

            {/* Hours */}
            <div className="text-center mb-6">
              <p className="font-montserrat font-semibold text-[16px] text-[#2D1A2E] mb-2">Horarios</p>
              <p className="font-montserrat text-[14px] text-[#5A4A5C]">Lun - Vie: 10:00 AM - 7:00 PM</p>
              <p className="font-montserrat text-[14px] text-[#5A4A5C]">Sáb: 10:00 AM - 4:00 PM</p>
              <p className="font-montserrat text-[14px] text-[#5A4A5C]">Dom: 11:00 AM - 3:00 PM</p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="https://wa.me/523329203141?text=Hola%20buen%20d%C3%ADa%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita"
                target="_blank"
                className="bg-[#25D366] text-white font-montserrat font-semibold text-[14px] uppercase rounded-full px-8 py-3.5 hover:bg-[#1fb855] transition-colors"
              >
                Enviar WhatsApp
              </Link>
              <Link
                href="#"
                className="bg-[#E91E8C] text-white font-montserrat font-semibold text-[14px] uppercase rounded-full px-8 py-3.5 hover:bg-[#d4177d] transition-colors"
              >
                Agendar Cita
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
