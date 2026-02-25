"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-6 bg-black/60 backdrop-blur-sm">
      <div className="max-w-[1532px] mx-auto px-8 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-montserrat font-bold text-[22px] text-white">
            Harmony
          </span>
          <span className="font-montserrat text-[12px] text-white/80 tracking-wide">
            Nails & Lashes
          </span>
        </Link>

        {/* Navigation - desktop */}
        <nav className="hidden md:flex items-center gap-10">
          <Link
            href="#inicio"
            className="font-montserrat text-[16px] text-white leading-[25px] hover:opacity-80 transition-opacity"
          >
            Inicio
          </Link>
          <Link
            href="#servicios"
            className="font-montserrat text-[16px] text-white leading-[25px] hover:opacity-80 transition-opacity"
          >
            Servicios
          </Link>
          <Link
            href="#nosotros"
            className="font-montserrat text-[16px] text-white leading-[25px] hover:opacity-80 transition-opacity"
          >
            Nosotros
          </Link>
          <Link
            href="#galeria"
            className="font-montserrat text-[16px] text-white leading-[25px] hover:opacity-80 transition-opacity"
          >
            Galería
          </Link>
          <Link
            href="#contacto"
            className="font-montserrat text-[16px] text-white leading-[25px] hover:opacity-80 transition-opacity"
          >
            Contacto
          </Link>
        </nav>

        {/* Book Button - desktop */}
        <Link
          href="#"
          className="hidden md:block border border-white rounded-full px-8 py-3 font-montserrat text-[14px] text-white uppercase hover:bg-[#E91E8C] hover:border-[#E91E8C] transition-colors"
        >
          Agendar
        </Link>

        {/* Hamburger button - mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menú"
        >
          <span className="w-6 h-0.5 bg-white block" />
          <span className="w-6 h-0.5 bg-white block" />
          <span className="w-6 h-0.5 bg-white block" />
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 py-4 flex flex-col gap-4 px-8">
          <Link
            href="#inicio"
            onClick={() => setIsOpen(false)}
            className="font-montserrat text-[16px] text-white leading-[25px] hover:opacity-80 transition-opacity"
          >
            Inicio
          </Link>
          <Link
            href="#servicios"
            onClick={() => setIsOpen(false)}
            className="font-montserrat text-[16px] text-white leading-[25px] hover:opacity-80 transition-opacity"
          >
            Servicios
          </Link>
          <Link
            href="#nosotros"
            onClick={() => setIsOpen(false)}
            className="font-montserrat text-[16px] text-white leading-[25px] hover:opacity-80 transition-opacity"
          >
            Nosotros
          </Link>
          <Link
            href="#galeria"
            onClick={() => setIsOpen(false)}
            className="font-montserrat text-[16px] text-white leading-[25px] hover:opacity-80 transition-opacity"
          >
            Galería
          </Link>
          <Link
            href="#contacto"
            onClick={() => setIsOpen(false)}
            className="font-montserrat text-[16px] text-white leading-[25px] hover:opacity-80 transition-opacity"
          >
            Contacto
          </Link>
          <Link
            href="#"
            onClick={() => setIsOpen(false)}
            className="mt-2 inline-block bg-[#E91E8C] border border-[#E91E8C] rounded-full px-8 py-3 font-montserrat text-[14px] text-white uppercase text-center hover:bg-[#d4177d] transition-colors"
          >
            Agendar
          </Link>
        </div>
      )}
    </header>
  );
}
