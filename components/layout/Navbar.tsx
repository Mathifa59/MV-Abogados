'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const navLinks = [
  { name: 'Inicio', href: '/' },
  { name: 'Áreas de Práctica', href: '/areas' },
  { name: 'La Firma', href: '/nosotros' },
  { name: 'Contacto', href: 'https://wa.me/51962281357?text=Buenas%2C%20quisiera%20agendar%20una%20consulta%20legal.' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
  }, [mobileMenuOpen]);

  return (
    <nav className={cn(
      'fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b',
      mobileMenuOpen
        ? 'bg-navy-950 border-navy-800'
        : scrolled
          ? 'bg-navy-950/95 backdrop-blur-xl border-gold-400/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
          : 'bg-navy-950/30 md:bg-transparent border-transparent py-2 md:py-4 backdrop-blur-sm md:backdrop-blur-none'
    )}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="relative z-50 shrink-0 py-2" onClick={() => setMobileMenuOpen(false)}>
          <Image
            src="/logo2.png"
            alt="Monteza Villegas & Abogados"
            width={350}
            height={100}
            className={cn(
              'w-auto object-contain transition-all duration-500',
              scrolled ? 'h-10 md:h-12' : 'h-12 md:h-16'
            )}
            priority
          />
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-[13px] font-medium text-white/80 hover:text-gold-400 transition-colors duration-300 uppercase tracking-[0.2em] group whitespace-nowrap"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <a
            href="https://wa.me/51962281357?text=Buenas%2C%20quisiera%20agendar%20una%20consulta%20legal."
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-7 py-3 border border-gold-400 text-gold-400 text-[12px] font-semibold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-gold-400 hover:text-navy-950 whitespace-nowrap"
          >
            Consulta Privada
          </a>
        </div>

        <button
          className="lg:hidden text-white/80 relative z-50 p-2 hover:text-gold-400 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menú de navegación"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-navy-950 z-40 flex flex-col justify-center px-8"
          >
            <div className="space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block py-5 text-2xl font-serif font-semibold text-white/90 hover:text-gold-400 transition-colors border-b border-navy-800/50"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="mt-10"
            >
              <a
                href="https://wa.me/51962281357?text=Buenas%2C%20quisiera%20agendar%20una%20consulta%20legal."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full py-4 border border-gold-400 text-gold-400 text-center text-sm font-semibold uppercase tracking-[0.2em] hover:bg-gold-400 hover:text-navy-950 transition-all"
              >
                Agendar Consulta
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
