'use client';

import { motion } from 'framer-motion';

const reasons = [
  { num: '01', title: 'Rigor Jurídico', description: 'Análisis exhaustivo, fundamentación sólida y estrategia diseñada para prevalecer.' },
  { num: '02', title: 'Estrategia Personalizada', description: 'Cada cliente recibe un plan legal construido a la medida de su situación.' },
  { num: '03', title: 'Confidencialidad Absoluta', description: 'Su información y sus asuntos se manejan con reserva total.' },
  { num: '04', title: 'Acompañamiento Ejecutivo', description: 'Comunicación directa y reportes claros en cada etapa del proceso.' },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 bg-navy-900 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/4 to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 lg:mb-20 max-w-2xl"
        >
          <span className="text-gold-400/50 text-[11px] font-medium tracking-[0.35em] uppercase">Nuestro Compromiso</span>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-normal text-white mt-6 leading-[1.05]">
            Por qué confiar<br /><span className="text-white/50">en nosotros</span>
          </h2>
        </motion.div>

        {/* Grid horizontal con números grandes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group py-10 lg:py-0 lg:pr-10 border-b lg:border-b-0 lg:border-r border-white/4 last:border-0"
            >
              <span className="text-gold-400/15 font-serif text-5xl lg:text-6xl font-light leading-none mb-6 block group-hover:text-gold-400/30 transition-colors duration-700 select-none">
                {reason.num}
              </span>
              <h3 className="text-white/80 text-base lg:text-lg font-medium font-serif mb-3">{reason.title}</h3>
              <p className="text-white/60 text-[13px] leading-[1.8] font-light">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
