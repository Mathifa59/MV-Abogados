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

export default function Firm() {
  return (
    <section className="section-view bg-grain bg-linear-to-br from-paper via-ivory to-gold-300/25">
      {/* Atmósfera */}
      <div className="absolute top-1/3 -right-40 w-[550px] h-[550px] bg-gold-400/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[450px] h-[450px] bg-navy-700/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 w-full py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-14 items-center">
            {/* Texto */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6"
            >
              <span className="text-gold-700 text-[11px] font-semibold tracking-[0.35em] uppercase">Sobre la Firma</span>

              <h2 className="font-serif text-[clamp(2.2rem,4vw,3.8rem)] font-medium text-navy-900 mt-6 mb-10 leading-[1.08]">
                Más que representación legal,
                <br />
                <span className="italic font-normal text-gold-700">alianza estratégica.</span>
              </h2>

              <p className="text-ink text-[15px] leading-[1.9] mb-8">
                Fundada por <span className="text-navy-900 font-medium">Americo Monteza</span>, la firma nace de los pilares de un palacio greco-romano: el derecho como fundamento universal de toda justicia. Combinamos rigor académico, visión estratégica y una ética inquebrantable.
              </p>

              <blockquote className="border-l-2 border-gold-500 pl-6 mb-12 max-w-md">
                <p className="text-navy-900 font-serif italic text-lg leading-[1.7]">
                  &ldquo;La defensa de los intereses de nuestros clientes requiere más que conocimiento legal; requiere visión estratégica, carácter y una ética inquebrantable.&rdquo;
                </p>
                <p className="text-gold-700 text-[10px] tracking-[0.3em] uppercase mt-4 font-semibold">
                  Americo Monteza — Socio Fundador
                </p>
              </blockquote>

              {/* Stats */}
              <div className="flex gap-10 lg:gap-14 mb-12">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    <span className="font-serif text-3xl lg:text-4xl text-navy-900 font-semibold">{stat.number}</span>
                    <p className="text-ink/85 text-[10px] tracking-[0.2em] uppercase mt-2 font-medium">{stat.label}</p>
                  </motion.div>
                ))}
              </div>

              <Link
                href="/nosotros"
                className="group inline-flex items-center gap-3 text-navy-900 text-[12px] font-semibold tracking-[0.2em] uppercase hover:text-gold-700 transition-colors duration-500"
              >
                Conocer la firma
                <ArrowRight className="group-hover:translate-x-2 transition-transform duration-500 text-gold-600" size={14} />
              </Link>
            </motion.div>

            {/* Imagen con marco del manual */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 lg:col-start-8 relative"
            >
              <div className="relative aspect-4/5 w-full max-w-md mx-auto bg-navy-900 overflow-hidden gilded-frame shadow-[0_30px_80px_rgba(1,38,65,0.25)]">
                <Image
                  src="/americo.jpg"
                  alt="Americo Monteza — Socio Fundador"
                  fill
                  className="object-cover transition-transform duration-1000 hover:scale-[1.03]"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-navy-950/85 to-transparent pt-16 pb-5 px-6 z-10">
                  <p className="text-white font-serif text-xl">Americo Monteza</p>
                  <p className="text-gold-400 text-[10px] tracking-[0.25em] uppercase mt-1">Socio Fundador &amp; Director</p>
                </div>
              </div>
              {/* Marco offset navy */}
              <div className="absolute -top-4 -right-0 lg:-right-4 w-full h-full border border-navy-900/20 -z-10 hidden lg:block" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
