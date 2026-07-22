'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const WHATSAPP = 'https://wa.me/51962281357?text=Buenas%2C%20quisiera%20agendar%20una%20consulta%20legal.';

export default function Hero() {
  return (
    <section className="section-view bg-navy-900 bg-grain">
      {/* Fondo — biblioteca clásica con bustos grecorromanos */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.jpg"
          alt="Biblioteca clásica"
          fill
          priority
          className="object-cover object-[70%_center] opacity-30"
        />
        <div className="absolute inset-0 bg-linear-to-r from-navy-900 via-navy-900/80 to-navy-900/40" />
        <div className="absolute inset-0 bg-linear-to-t from-navy-950 via-transparent to-navy-950/60" />
      </div>

      {/* Auroras doradas animadas */}
      <div className="aurora w-[550px] h-[550px] bg-gold-400/12 -top-40 -left-40 z-10" />
      <div className="aurora aurora-slow w-[450px] h-[450px] bg-navy-700/40 bottom-0 right-1/4 z-10" />

      {/* Isotipo dorado como marca de agua */}
      <div className="absolute right-[4%] top-1/2 -translate-y-1/2 w-[420px] h-[420px] opacity-[0.13] z-10 hidden lg:block pointer-events-none select-none">
        <Image src="/brand/logo-v-dorado.png" alt="" fill className="object-contain" />
      </div>

      {/* Marco dorado interior — motivo del manual de marca */}
      <div className="absolute inset-4 lg:inset-6 border border-gold-400/25 z-10 pointer-events-none hidden md:block" />

      {/* Columnas decorativas */}
      <div className="absolute left-[8%] top-0 w-px h-full bg-linear-to-b from-transparent via-gold-400/15 to-transparent z-10 hidden xl:block" />
      <div className="absolute right-[8%] top-0 w-px h-full bg-linear-to-b from-transparent via-gold-400/15 to-transparent z-10 hidden xl:block" />

      <div className="relative z-20 w-full pt-36 pb-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-5 mb-10">
              <span className="h-px w-16 bg-gold-400/70" />
              <span className="text-gold-400 text-[11px] font-medium tracking-[0.35em] uppercase">
                Monteza Villegas &amp; Abogados — Perú
              </span>
            </div>

            <h1 className="font-serif text-[clamp(2.9rem,7vw,6.2rem)] font-medium text-white leading-[1.02] mb-10">
              El derecho es el pilar.
              <br />
              <span className="text-gold-400 italic font-normal">La estrategia,</span> nuestro
              <br />
              oficio.
            </h1>

            <p className="text-white/80 text-base lg:text-lg leading-[1.85] max-w-xl font-light mb-12">
              Asesoría jurídica construida sobre confianza, compromiso y
              profesionalismo. Defendemos sus intereses con el rigor de quien
              entiende lo que está en juego.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-9 py-4 bg-gold-400 text-navy-950 text-[13px] font-semibold uppercase tracking-[0.15em] transition-all duration-500 hover:bg-gold-300 hover:shadow-[0_0_60px_rgba(215,183,118,0.25)]"
              >
                Agendar Consulta
                <ArrowRight className="group-hover:translate-x-1.5 transition-transform duration-500" size={15} />
              </a>
              <Link
                href="/areas"
                className="inline-flex items-center justify-center gap-3 px-9 py-4 border border-white/25 text-white/85 text-[13px] font-medium uppercase tracking-[0.15em] transition-all duration-500 hover:border-gold-400/60 hover:text-gold-400"
              >
                Áreas de Práctica
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}>
          <ChevronDown size={20} className="text-gold-400/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
