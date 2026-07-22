'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { team } from '@/lib/team';

export default function Team() {
  return (
    <section className="section-view bg-grain bg-linear-to-b from-ivory via-paper to-gold-300/20">
      {/* Atmósfera */}
      <div className="absolute -top-40 left-1/3 w-[500px] h-[500px] bg-gold-400/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-linear-to-r from-transparent via-gold-500/60 to-transparent" />

      {/* Isotipo fantasma tras el encabezado */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[380px] h-[280px] opacity-[0.05] pointer-events-none select-none">
        <Image src="/brand/logo-v-negro.png" alt="" fill className="object-contain" />
      </div>

      <div className="relative z-10 w-full py-24 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14 lg:mb-16 max-w-2xl mx-auto"
          >
            <span className="text-gold-700 text-[11px] font-semibold tracking-[0.35em] uppercase">Nuestro Equipo</span>
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,4rem)] font-medium text-navy-900 mt-5 leading-[1.05]">
              Los pilares
              <br />
              <span className="text-navy-700 italic font-normal">de la firma</span>
            </h2>
            <p className="text-ink text-[15px] leading-[1.8] mt-6">
              Profesionales comprometidos con la excelencia jurídica. Cada integrante aporta especialización y criterio a la defensa de sus intereses.
            </p>
          </motion.div>

          {/* Adelanto: retratos sin biografía — el detalle vive en /equipo */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href="/equipo" className="group block">
                  <div className="relative aspect-4/5 w-full bg-navy-900 overflow-hidden gilded-frame mb-4">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover grayscale-[0.25] group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-navy-950/10 group-hover:bg-transparent transition-colors duration-700" />
                  </div>
                  <h3 className="font-serif text-lg text-navy-900 font-medium text-center group-hover:text-gold-700 transition-colors duration-500">
                    {member.name}
                  </h3>
                  <p className="text-gold-700 text-[10px] tracking-[0.2em] uppercase font-semibold mt-1 text-center">
                    {member.role}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 flex justify-center"
          >
            <Link
              href="/equipo"
              className="group inline-flex items-center gap-4 px-8 py-3.5 bg-navy-900 text-gold-300 text-[12px] tracking-[0.2em] uppercase font-semibold hover:bg-navy-800 transition-colors duration-500"
            >
              Conocer al equipo completo
              <ArrowRight className="group-hover:translate-x-2 transition-transform duration-500" size={14} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
