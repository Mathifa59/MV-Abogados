'use client';

import { motion } from 'framer-motion';

const testimonials = [
  { quote: 'Su capacidad de análisis y visión estratégica fueron determinantes para resolver un caso que otros consideraban perdido.', author: 'Director General', company: 'Sector financiero' },
  { quote: 'Profesionalismo, discreción y resultados. Monteza Villegas se convirtió en nuestro aliado legal de confianza.', author: 'Gerente Legal', company: 'Grupo multinacional' },
  { quote: 'La atención personalizada y el rigor con el que manejan cada detalle nos dieron la tranquilidad que necesitábamos.', author: 'Socio Fundador', company: 'Firma de inversiones' },
];

export default function Testimonials() {
  return (
    <section className="section-view bg-grain bg-columns bg-linear-to-b from-mist via-ivory to-mist-deep">
      {/* Atmósfera */}
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-gold-400/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-32 right-1/4 w-[450px] h-[450px] bg-navy-700/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 w-full py-24 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 lg:mb-20"
          >
            <span className="text-gold-700 text-[11px] font-semibold tracking-[0.35em] uppercase">Confianza Comprobada</span>
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,4rem)] font-medium text-navy-900 mt-5 leading-[1.05]">
              Lo que dicen
              <br />
              <span className="text-navy-700 italic font-normal">nuestros clientes</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="group bg-paper/90 backdrop-blur-sm border border-navy-900/15 p-10 relative hover:border-gold-500/50 hover:shadow-[0_20px_60px_rgba(1,38,65,0.12)] hover:-translate-y-1 transition-all duration-700"
              >
                <span className="font-serif text-[90px] text-gold-500/20 absolute -top-3 left-6 leading-none group-hover:text-gold-500/40 transition-colors duration-700 select-none pointer-events-none">
                  &ldquo;
                </span>

                <p className="text-ink text-[15px] leading-[1.8] italic relative z-10 mb-10 min-h-[100px]">
                  {t.quote}
                </p>

                <div className="border-t border-navy-900/15 pt-5">
                  <p className="text-navy-900 text-sm font-semibold">{t.author}</p>
                  <p className="text-gold-700 text-[10px] tracking-[0.2em] uppercase mt-1 font-medium">{t.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
