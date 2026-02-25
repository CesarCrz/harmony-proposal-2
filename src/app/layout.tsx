import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#E91E8C",
};

export const metadata: Metadata = {
  title: "Harmony Nails & Lashes - Unas Acrilicas y Pestanas en Guadalajara Sur",
  description:
    "Disenos personalizados de unas acrilicas, pestanas y mas. 17 anos de experiencia combinada. Agenda tu cita en Guadalajara zona sur, cerca de ITESO.",
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
