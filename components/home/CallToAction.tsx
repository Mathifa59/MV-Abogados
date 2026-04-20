'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="py-24 lg:py-32 bg-navy-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/4 to-transparent" />
      {/* Glow sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gold-400/[0.02] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-16 relative">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-gold-400/50 text-[11px] font-medium tracking-[0.35em] uppercase">Dé el primer paso</span>

            <h2 className="font-serif text-[clamp(2.2rem,5vw,4rem)] font-normal text-white mt-8 mb-8 leading-[1.1]">
              ¿Tiene un asunto legal que requiere
              <br className="hidden lg:block" />
              <span className="text-white/50"> atención inmediata?</span>
            </h2>

            <p className="text-white/70 text-[15px] leading-[1.9] font-light mb-14 max-w-lg mx-auto">
              Permítanos evaluar su situación con absoluta confidencialidad. La primera consulta estratégica es sin compromiso.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/51962281357?text=Buenas%2C%20quisiera%20agendar%20una%20consulta%20legal."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-gold-400 text-navy-950 text-[13px] font-semibold uppercase tracking-[0.15em] transition-all duration-500 hover:bg-gold-300 hover:shadow-[0_0_60px_rgba(212,175,55,0.15)]"
              >
                Agendar Consulta
                <ArrowRight className="group-hover:translate-x-1.5 transition-transform duration-500" size={15} />
              </a>
              <a
                href="https://wa.me/51962281357?text=Buenas%2C%20quisiera%20agendar%20una%20consulta%20legal."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-10 py-4 border border-white/10 text-white/70 text-[13px] font-medium uppercase tracking-[0.15em] transition-all duration-500 hover:border-gold-400/30 hover:text-gold-400/70"
              >
                +51 962 281 357
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
