import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Harmony Nails & Lashes - Uñas Acrílicas y Pestañas en Guadalajara Sur",
  description:
    "Diseños personalizados de uñas acrílicas, pestañas y más. 17 años de experiencia combinada. Agenda tu cita en Guadalajara zona sur, cerca de ITESO.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${montserrat.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
