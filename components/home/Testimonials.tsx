'use client';

import { motion } from 'framer-motion';

const testimonials = [
  { quote: 'Su capacidad de análisis y visión estratégica fueron determinantes para resolver un caso que otros consideraban perdido.', author: 'Director General', company: 'Sector financiero' },
  { quote: 'Profesionalismo, discreción y resultados. Monteza Villegas se convirtió en nuestro aliado legal de confianza.', author: 'Gerente Legal', company: 'Grupo multinacional' },
  { quote: 'La atención personalizada y el rigor con el que manejan cada detalle nos dieron la tranquilidad que necesitábamos.', author: 'Socio Fundador', company: 'Firma de inversiones' },
];

export default function Testimonials() {
  return (
    <section className="py-32 lg:py-44 bg-navy-950 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24 lg:mb-32"
        >
          <span className="text-gold-400/50 text-[11px] font-medium tracking-[0.35em] uppercase">Confianza Comprobada</span>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-normal text-white mt-6 leading-[1.05]">
            Lo que dicen nuestros<br /><span className="text-white/30">clientes</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12 }}
              className="group p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/[0.04] last:border-0 relative"
            >
              {/* Comilla grande decorativa */}
              <span className="font-serif text-[80px] lg:text-[100px] text-gold-400/[0.06] absolute -top-2 left-6 leading-none group-hover:text-gold-400/[0.12] transition-colors duration-700 select-none pointer-events-none">
                &ldquo;
              </span>

              <p className="text-white/40 text-[15px] leading-[1.8] font-light italic relative z-10 mb-10 min-h-[100px]">
                {t.quote}
              </p>

              <div>
                <p className="text-white/70 text-sm font-medium">{t.author}</p>
                <p className="text-white/20 text-[11px] tracking-[0.15em] uppercase mt-1">{t.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
