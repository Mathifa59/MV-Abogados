'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-end overflow-hidden bg-navy-950">
      {/* Fondo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-navy-950/75 z-10" />
        <div className="absolute inset-0 bg-linear-to-r from-navy-950 via-navy-950/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-linear-to-t from-navy-950 via-navy-950/30 to-transparent z-10" />
        <Image
          src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2000"
          alt="Biblioteca Legal"
          fill
          priority
          className="object-cover opacity-40"
        />
      </div>

      {/* Líneas decorativas */}
      <div className="absolute left-[6%] top-0 w-px h-full bg-linear-to-b from-transparent via-gold-400/10 to-transparent z-10 hidden xl:block" />
      <div className="absolute right-[6%] top-0 w-px h-full bg-linear-to-b from-transparent via-white/5 to-transparent z-10 hidden xl:block" />

      {/* Contenido — alineado abajo para composición editorial */}
      <div className="relative z-20 w-full pb-20 lg:pb-28 pt-48">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Overline con línea */}
            <div className="flex items-center gap-5 mb-10 lg:mb-14">
              <span className="h-px w-16 bg-gold-400/60" />
              <span className="text-gold-400/80 text-[11px] font-medium tracking-[0.35em] uppercase">
                Monteza Villegas &amp; Abogados
              </span>
            </div>

            {/* Título — grande, editorial, con contraste */}
            <h1 className="font-serif text-[clamp(2.8rem,7vw,6.5rem)] font-normal text-white leading-[0.95] mb-10 lg:mb-14 max-w-5xl">
              Estrategia legal
              <br />
              con <em className="text-gold-400 not-italic font-medium">rigor,</em> discreción
              <br />
              y excelencia.
            </h1>

            {/* Subtítulo — separado, con más aire */}
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 lg:gap-20">
              <p className="text-white/40 text-base lg:text-lg leading-[1.8] max-w-md font-light">
                Asesoría jurídica de alto nivel para decisiones que exigen
                precisión. Más de una década protegiendo los intereses de
                quienes no pueden permitirse menos que la excelencia.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <a
                  href="https://wa.me/51962281357?text=Buenas%2C%20quisiera%20agendar%20una%20consulta%20legal."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 px-9 py-4 bg-gold-400 text-navy-950 text-[13px] font-semibold uppercase tracking-[0.15em] transition-all duration-500 hover:bg-gold-300 hover:shadow-[0_0_60px_rgba(212,175,55,0.2)]"
                >
                  Agendar Consulta
                  <ArrowRight className="group-hover:translate-x-1.5 transition-transform duration-500" size={15} />
                </a>
                <Link
                  href="/areas"
                  className="inline-flex items-center justify-center gap-3 px-9 py-4 border border-white/15 text-white/50 text-[13px] font-medium uppercase tracking-[0.15em] transition-all duration-500 hover:border-gold-400/40 hover:text-gold-400"
                >
                  Áreas de Práctica
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}>
          <ChevronDown size={20} className="text-gold-400/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}
