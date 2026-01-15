'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Detectar scroll para cambiar el estilo
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquear el scroll de la página cuando el menú está abierto
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Áreas de Práctica', href: '/areas' },
    { name: 'Nuestra Firma', href: '/nosotros' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b',
        // LÓGICA DE COLOR:
        // 1. Si el menú móvil está abierto -> FONDO SÓLIDO AZUL OSCURO (Para que no sea transparente)
        // 2. Si hiciste scroll -> FONDO CON BLUR + BACKDROP FILTER
        // 3. Si estás arriba del todo en MÓVIL -> FONDO SEMI-OPACO SIEMPRE (para legibilidad)
        // 4. Si estás arriba del todo en DESKTOP -> TRANSPARENTE
        mobileMenuOpen 
          ? 'bg-[#040b14] border-navy-800 shadow-xl backdrop-blur-md' 
          : scrolled
          ? 'bg-[#040b14]/80 border-navy-800/50 shadow-xl backdrop-blur-md'
          : 'bg-[#040b14]/30 md:bg-transparent border-transparent py-4 md:py-6 md:border-transparent backdrop-blur-sm md:backdrop-blur-none'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="relative z-50 shrink-0" onClick={() => setMobileMenuOpen(false)}>
          <Image
            src="/logo2.png" 
            alt="Monteza Villegas & Abogados"
            width={350}
            height={100}
            className={cn(
              "w-auto object-contain transition-all duration-300",
              // Ajustamos tamaño: más pequeño en scroll para no estorbar
              scrolled ? "h-10 md:h-14" : "h-12 md:h-20"
            )}
            priority
          />
        </Link>

        {/* MENÚ DE ESCRITORIO (PC) */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs font-bold text-white hover:text-gold-400 transition-colors uppercase tracking-widest drop-shadow-md whitespace-nowrap"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="px-6 py-3 bg-gold-400 hover:bg-gold-500 text-navy-900 font-bold text-xs rounded-sm transition-all shadow-lg uppercase tracking-wider whitespace-nowrap hover:scale-105"
          >
            Consulta Gratuita
          </Link>
        </div>

        {/* BOTÓN HAMBURGUESA (MÓVIL) */}
        <button
          className="lg:hidden text-white relative z-50 p-2 hover:bg-white/10 rounded transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menú"
        >
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* MENÚ DESPLEGABLE MÓVIL (SÓLIDO) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            // AQUÍ ESTÁ EL ARREGLO: bg-[#040b14] es el color sólido exacto, sin transparencias.
            className="fixed inset-0 bg-[#040b14] z-40 flex flex-col pt-32 px-6 gap-8 overflow-y-auto"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-bold text-white hover:text-gold-400 font-serif border-b border-gray-800 pb-4"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-4 bg-gold-400 text-navy-900 font-bold text-center rounded-sm uppercase tracking-widest mt-4 shadow-lg"
            >
              Agendar Consulta
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}