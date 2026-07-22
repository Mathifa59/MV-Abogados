import type { Metadata } from "next";
import localFont from "next/font/local";
import WhatsAppButton from "@/components/shared/WhatsAppButton";
import "./globals.css";

const cormorant = localFont({
  src: [
    { path: "./fonts/CormorantGaramond.ttf", style: "normal" },
    { path: "./fonts/CormorantGaramond-Italic.ttf", style: "italic" },
  ],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = localFont({
  src: [
    { path: "./fonts/Jost.ttf", style: "normal" },
    { path: "./fonts/Jost-Italic.ttf", style: "italic" },
  ],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Monteza Villegas & Abogados | Firma Legal en Perú",
  description:
    "Firma legal peruana especializada en derecho corporativo, penal y litigios. Confianza, compromiso y profesionalismo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="antialiased font-sans">
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
