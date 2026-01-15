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

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquear el scroll del cuerpo cuando el menú móvil está abierto
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
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent',
        scrolled || mobileMenuOpen ? 'bg-navy-950 border-navy-800 py-3 shadow-xl' : 'bg-transparent py-4 md:py-6'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO RESPONSIVE */}
        <Link href="/" className="relative z-50 shrink-0" onClick={() => setMobileMenuOpen(false)}>
          <Image
            src="/logo2.png" 
            alt="Monteza Villegas & Abogados"
            width={400}
            height={120}
            // Clave: h-10 en celular, h-16 en tablet, h-20 en PC
            className="h-10 md:h-16 lg:h-20 w-auto object-contain transition-all" 
            priority
          />
        </Link>

        {/* MENÚ DE ESCRITORIO (Hidden en movil) */}
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
            className="px-6 py-3 bg-gold-400 hover:bg-gold-500 text-navy-900 font-bold text-xs rounded-sm transition-all shadow-lg uppercase tracking-wider whitespace-nowrap"
          >
            Consulta Gratuita
          </Link>
        </div>

        {/* BOTÓN HAMBURGUESA (Visible solo en movil/tablet) */}
        <button
          className="lg:hidden text-white relative z-50 p-2 hover:bg-white/10 rounded transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MENÚ DESPLEGABLE MÓVIL */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-navy-950 z-40 flex flex-col pt-32 px-6 gap-8 overflow-y-auto"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-bold text-white hover:text-gold-400 font-serif border-b border-navy-800 pb-4"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-4 bg-gold-400 text-navy-900 font-bold text-center rounded-sm uppercase tracking-widest mt-4"
            >
              Agendar Consulta
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}