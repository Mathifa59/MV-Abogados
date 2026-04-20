'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const stats = [
  { number: '10+', label: 'Años de experiencia' },
  { number: '500+', label: 'Casos resueltos' },
  { number: '98%', label: 'Tasa de éxito' },
];

export default function AboutPreview() {
  return (
    <section className="py-24 lg:py-32 bg-navy-900 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-400/[0.015] rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          {/* Texto — 5 columnas */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <span className="text-gold-400/50 text-[11px] font-medium tracking-[0.35em] uppercase">Sobre la Firma</span>

            <h2 className="font-serif text-[clamp(2.2rem,4vw,3.8rem)] font-normal text-white mt-6 mb-10 leading-[1.08]">
              Más que representación
              <br />legal, <span className="text-white/50 italic">alianza</span>
              <br /><span className="text-white/50 italic">estratégica.</span>
            </h2>

            <p className="text-white/70 text-[15px] leading-[1.9] mb-12 font-light">
              Fundada por <span className="text-white/60">Americo Monteza</span>, nuestra firma combina rigor académico, visión estratégica y ética inquebrantable. Cada caso recibe atención directa del equipo senior.
            </p>

            {/* Stats */}
            <div className="flex gap-10 lg:gap-12 mb-14">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <span className="font-serif text-3xl lg:text-4xl text-gold-400/70 font-light">{stat.number}</span>
                  <p className="text-white/50 text-[10px] tracking-[0.2em] uppercase mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <Link href="/nosotros" className="group inline-flex items-center gap-3 text-gold-400/50 text-[12px] font-medium tracking-[0.2em] uppercase hover:text-gold-400 transition-colors duration-500">
              Conocer la firma
              <ArrowRight className="group-hover:translate-x-2 transition-transform duration-500" size={14} />
            </Link>
          </motion.div>

          {/* Imagen — 7 columnas, contenida */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 relative"
          >
            <div className="relative aspect-4/5 lg:aspect-3/4 w-full bg-navy-800 overflow-hidden">
              <Image
                src="/americo.jpg"
                alt="Americo Monteza — Socio Fundador"
                fill
                className="object-cover transition-transform duration-1000 hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy-950/90 via-navy-950/20 to-transparent" />

              {/* Cita flotante */}
              <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                <div className="border-l border-gold-400/40 pl-6 max-w-md">
                  <p className="text-white/80 font-serif italic text-base lg:text-lg leading-[1.7]">
                    &ldquo;La justicia no consiste en dar a cada uno lo suyo, sino en saber reclamarlo con inteligencia.&rdquo;
                  </p>
                  <p className="text-gold-400/40 text-[10px] tracking-[0.3em] uppercase mt-4 font-medium">Americo Monteza — Socio Fundador</p>
                </div>
              </div>
            </div>

            {/* Marco decorativo */}
            <div className="absolute -top-4 -right-4 w-full h-full border border-gold-400/[0.08] -z-10 hidden lg:block" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
