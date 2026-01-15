'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Scale } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        scrolled ? 'bg-navy-950/95 backdrop-blur-md border-navy-800 py-3 shadow-lg' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        
        {/* Logo Ajustado: Más pequeño y compacto */}
        <Link href="/" className="flex items-center gap-3 group relative z-50 shrink-0">
          <div className="bg-gold-400 p-1.5 rounded-sm text-navy-900 shadow-lg">
            <Scale size={20} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-lg md:text-xl font-bold text-white tracking-wide font-serif drop-shadow-md whitespace-nowrap">
              MONTEZA VILLEGAS
            </span>
            <span className="text-[10px] md:text-xs text-gold-400 tracking-[0.2em] font-medium uppercase">
              & ABOGADOS
            </span>
          </div>
        </Link>

        {/* Menú Desktop: Textos más pequeños y sin saltos de línea */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
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
            className="px-5 py-2.5 bg-gold-400 hover:bg-gold-500 text-navy-900 font-bold text-xs rounded-sm transition-all shadow-lg uppercase tracking-wider whitespace-nowrap"
          >
            Consulta Gratuita
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white relative z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-0 bg-navy-950 z-40 flex flex-col items-center justify-center gap-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-bold text-white hover:text-gold-400 font-serif tracking-wide"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}