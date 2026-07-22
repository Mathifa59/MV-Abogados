'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const reasons = [
  { num: 'I', title: 'Confianza', description: 'Análisis exhaustivo, fundamentación sólida y estrategia diseñada para prevalecer.' },
  { num: 'II', title: 'Compromiso', description: 'Cada cliente recibe un plan legal construido a la medida de su situación.' },
  { num: 'III', title: 'Confidencialidad', description: 'Su información y sus asuntos se manejan con reserva total.' },
  { num: 'IV', title: 'Profesionalismo', description: 'Comunicación directa y reportes claros en cada etapa del proceso.' },
];

export default function Commitment() {
  return (
    <section className="section-view bg-columns-dark bg-grain bg-linear-to-br from-navy-900 via-navy-900 to-navy-950">
      {/* Filo dorado superior */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gold-400/50 to-transparent" />

      {/* Auroras */}
      <div className="aurora w-[500px] h-[500px] bg-gold-400/10 -right-32 -bottom-32" />
      <div className="aurora aurora-slow w-[400px] h-[400px] bg-navy-700/50 -top-20 left-1/4" />

      {/* Isotipo dorado fantasma */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-[420px] h-[420px] opacity-[0.07] pointer-events-none select-none hidden lg:block">
        <Image src="/brand/logo-v-dorado.png" alt="" fill className="object-contain" />
      </div>

      <div className="relative z-10 w-full py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 lg:mb-20 max-w-2xl"
          >
            <span className="text-gold-400 text-[11px] font-semibold tracking-[0.35em] uppercase">Nuestro Compromiso</span>
            <h2 className="font-serif text-[clamp(2.3rem,5vw,4.2rem)] font-medium text-white mt-6 leading-[1.05]">
              Por qué confiar
              <br />
              <span className="text-gold-400 italic font-normal">en nosotros</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group py-10 lg:py-2 lg:pr-10 border-b lg:border-b-0 lg:border-r border-white/10 last:border-0 lg:pl-6 first:lg:pl-0"
              >
                <span className="text-gold-400/50 font-serif text-5xl lg:text-6xl font-medium leading-none mb-6 block group-hover:text-gold-400 transition-colors duration-700 select-none">
                  {reason.num}
                </span>
                <h3 className="text-white text-lg font-medium font-serif mb-3">{reason.title}</h3>
                <p className="text-white/75 text-[13.5px] leading-[1.8] font-light">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
