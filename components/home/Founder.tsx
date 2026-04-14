'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Founder() {
  return (
    <section className="py-32 lg:py-44 bg-navy-950 overflow-hidden relative">
      {/* Línea decorativa horizontal */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Foto — 4 columnas, con marco offset */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 relative"
          >
            <div className="relative aspect-[3/4] w-full max-w-sm mx-auto lg:mx-0 bg-navy-800 overflow-hidden">
              <Image src="/americo.jpg" alt="Americo Monteza" fill className="object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-1000" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold-400/[0.08] -z-10 hidden lg:block" />
          </motion.div>

          {/* Texto — 8 columnas, con mucho aire */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 lg:col-start-6"
          >
            <span className="text-gold-400/50 text-[11px] font-medium tracking-[0.35em] uppercase">Liderazgo</span>

            <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-normal text-white mt-6 mb-3 leading-[1]">
              Americo Monteza
            </h2>
            <p className="text-gold-400/40 text-[12px] tracking-[0.25em] uppercase font-medium mb-12">Socio Fundador &amp; Director</p>

            <blockquote className="border-l border-gold-400/30 pl-8 lg:pl-10 mb-12">
              <p className="text-white/50 font-serif text-xl lg:text-[1.65rem] italic leading-[1.6]">
                &ldquo;La defensa de los intereses de nuestros clientes requiere más que conocimiento legal; requiere visión estratégica, carácter y una ética inquebrantable.&rdquo;
              </p>
            </blockquote>

            <p className="text-white/25 text-[15px] leading-[1.9] font-light mb-10 max-w-lg">
              Con una trayectoria consolidada en derecho penal y corporativo, fundó la firma con la convicción de que la práctica legal debe combinar rigor intelectual con un compromiso genuino hacia cada cliente.
            </p>

            <div className="flex gap-12">
              <div>
                <p className="text-white/15 text-[10px] tracking-[0.3em] uppercase mb-2">Especialización</p>
                <p className="text-white/60 text-sm font-light">Derecho Penal y Corporativo</p>
              </div>
              <div>
                <p className="text-white/15 text-[10px] tracking-[0.3em] uppercase mb-2">Enfoque</p>
                <p className="text-white/60 text-sm font-light">Resultados y prevención</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
