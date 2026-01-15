import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Monteza Villegas & Abogados | Excelencia Legal",
  description: "Firma legal liderada por Americo Monteza.", // 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}