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
  { name: 'Equipo', href: '/#equipo' },
  { name: 'Contacto', href: '/contacto' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [homeSection, setHomeSection] = useState<'inicio' | 'equipo'>('inicio');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll-spy: en el home, detecta si la sección Equipo está en pantalla
  useEffect(() => {
    if (pathname !== '/') return;
    const spy = () => {
      const el = document.getElementById('equipo');
      if (!el) return;
      const r = el.getBoundingClientRect();
      const mid = window.innerHeight / 2;
      setHomeSection(r.top < mid && r.bottom > mid ? 'equipo' : 'inicio');
    };
    spy();
    window.addEventListener('scroll', spy, { passive: true });
    return () => window.removeEventListener('scroll', spy);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
  }, [mobileMenuOpen]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/' && homeSection === 'inicio';
    if (href === '/#equipo') return pathname === '/' && homeSection === 'equipo';
    return pathname === href;
  };

  // Si ya estamos en el home, "Equipo" e "Inicio" hacen scroll suave sin re-navegar
  const handleNavClick = (e: React.MouseEvent, href: string) => {
    setMobileMenuOpen(false);
    if (pathname !== '/') return;
    if (href === '/#equipo') {
      e.preventDefault();
      document.getElementById('equipo')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (href === '/') {
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
            width={350}
            height={100}
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
            'lg:hidden relative z-50 p-2 transition-colors',
            onDark || mobileMenuOpen ? 'text-white/90 hover:text-gold-400' : 'text-navy-900 hover:text-gold-600'
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menú de navegación"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-navy-900 z-40 flex flex-col justify-center px-8"
          >
            <div className="space-y-1">
              {navLinks.map((link, i) => {
                const active = isActive(link.href);
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.4 }}
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      aria-current={active ? 'page' : undefined}
                      className={cn(
                        'flex items-center gap-4 py-5 text-2xl font-serif font-semibold transition-colors border-b border-white/10',
                        active ? 'text-gold-400' : 'text-white/90 hover:text-gold-400'
                      )}
                    >
                      {active && <span className="w-6 h-px bg-gold-400" />}
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="mt-10"
            >
              <a
                href={WHATSAPP}
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
