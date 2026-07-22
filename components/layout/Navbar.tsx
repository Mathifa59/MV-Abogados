'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const WHATSAPP = 'https://wa.me/51962281357?text=Buenas%2C%20quisiera%20agendar%20una%20consulta%20legal.';

const navLinks = [
  { name: 'Inicio', href: '/' },
  { name: 'Áreas de Práctica', href: '/areas' },
  { name: 'La Firma', href: '/nosotros' },
  { name: 'Equipo', href: '/equipo' },
  { name: 'Contacto', href: '/contacto' },
];

const numerals = ['I', 'II', 'III', 'IV', 'V'];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
  }, [mobileMenuOpen]);

  const isActive = (href: string) => pathname === href;

  // Si ya estamos en el home, "Inicio" solo hace scroll suave al principio
  const handleNavClick = (e: React.MouseEvent, href: string) => {
    setMobileMenuOpen(false);
    if (href === '/' && pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const onDark = !scrolled && !mobileMenuOpen;

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b',
        mobileMenuOpen
          ? 'bg-navy-900 border-navy-800'
          : scrolled
            ? 'bg-paper/95 backdrop-blur-xl border-navy-900/10 shadow-[0_2px_24px_rgba(1,38,65,0.08)]'
            : 'bg-navy-950/20 backdrop-blur-sm border-white/5'
      )}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between">
        <Link href="/" className="relative z-50 shrink-0 py-3" onClick={(e) => handleNavClick(e, '/')}>
          <Image
            src={onDark || mobileMenuOpen ? '/logo2.png' : '/logo.png'}
            alt="Monteza Villegas & Abogados"
            width={336}
            height={111}
            className={cn(
              'w-auto object-contain transition-all duration-500',
              scrolled ? 'h-10 md:h-11' : 'h-11 md:h-14'
            )}
            priority
          />
        </Link>

        <div className="hidden lg:flex items-center gap-9">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'relative text-[12.5px] font-medium transition-colors duration-300 uppercase tracking-[0.18em] group whitespace-nowrap',
                  active
                    ? onDark ? 'text-gold-400' : 'text-gold-700'
                    : onDark ? 'text-white/85 hover:text-gold-400' : 'text-navy-900/80 hover:text-gold-600'
                )}
              >
                {link.name}
                <span
                  className={cn(
                    'absolute -bottom-1 left-0 h-px transition-all duration-300',
                    active ? 'w-full' : 'w-0 group-hover:w-full',
                    onDark ? 'bg-gold-400' : 'bg-gold-500'
                  )}
                />
              </Link>
            );
          })}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'ml-2 px-6 py-2.5 text-[12px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 whitespace-nowrap border',
              onDark
                ? 'border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-navy-950'
                : 'border-navy-900 bg-navy-900 text-gold-300 hover:bg-navy-800'
            )}
          >
            Consulta Privada
          </a>
        </div>

        <button
          className={cn(
            'lg:hidden relative z-50 w-10 h-10 flex items-center justify-center transition-colors',
            onDark || mobileMenuOpen ? 'text-white/90 hover:text-gold-400' : 'text-navy-900 hover:text-gold-600'
          )}
          onClick={() => setMobileMenuOpen((v) => !v)}
          aria-label="Menú de navegación"
          aria-expanded={mobileMenuOpen}
        >
          <motion.span
            animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-6 h-6 flex items-center justify-center"
          >
            <AnimatePresence initial={false}>
              {mobileMenuOpen ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <X size={24} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.7 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Menu size={24} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.span>
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            onClick={(e) => {
              if (e.target === e.currentTarget) setMobileMenuOpen(false);
            }}
            className="fixed inset-0 z-40 flex flex-col bg-navy-900 bg-grain bg-columns-dark overflow-hidden"
          >
            <div className="aurora w-[380px] h-[380px] bg-gold-400/10 -top-24 -right-24" />

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.3, delay: 0.06, ease: 'easeOut' }}
              className="relative z-10 flex flex-col justify-center flex-1 px-8"
            >
              <div className="flex flex-col">
                {navLinks.map((link, i) => {
                  const active = isActive(link.href);
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      aria-current={active ? 'page' : undefined}
                      className="group flex items-center gap-5 py-4 border-b border-gold-400/10 last:border-0"
                    >
                      <span
                        className={cn(
                          'font-serif text-lg w-6 shrink-0 transition-colors duration-300',
                          active ? 'text-gold-400' : 'text-gold-400/35 group-hover:text-gold-400/70'
                        )}
                      >
                        {numerals[i]}
                      </span>
                      <span
                        className={cn(
                          'font-serif text-[1.7rem] font-normal tracking-tight transition-colors duration-300',
                          active ? 'text-gold-400 italic' : 'text-white/90 group-hover:text-gold-400'
                        )}
                      >
                        {link.name}
                      </span>
                    </Link>
                  );
                })}
              </div>

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-9 inline-flex items-center justify-center gap-3 w-full py-4 bg-gold-400 text-navy-950 text-center text-[13px] font-semibold uppercase tracking-[0.2em] active:bg-gold-300 transition-colors"
              >
                Agendar Consulta
              </a>
            </motion.div>

            <div className="relative z-10 px-8 pb-8 pt-2 text-center">
              <span className="text-white/30 text-[10px] tracking-[0.3em] uppercase">+51 962 281 357</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
