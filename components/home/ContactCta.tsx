'use client';

import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Mail, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const WHATSAPP = 'https://wa.me/51962281357?text=Buenas%2C%20quisiera%20agendar%20una%20consulta%20legal.';

const info = [
  { icon: <MapPin size={15} strokeWidth={1.5} />, value: 'Av. Javier Prado Este 1234, Of. 501 — San Isidro, Lima' },
  { icon: <Mail size={15} strokeWidth={1.5} />, value: 'contacto@monteza-villegas.com' },
  { icon: <Clock size={15} strokeWidth={1.5} />, value: 'Lunes a Viernes, 9:00 — 18:00' },
];

export default function ContactCta() {
  return (
    <section className="section-view bg-grain bg-columns-dark bg-linear-to-b from-navy-900 to-navy-950">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gold-400/50 to-transparent" />

      {/* Marco dorado interior */}
      <div className="absolute inset-5 lg:inset-8 border border-gold-400/15 pointer-events-none hidden md:block" />

      {/* Auroras */}
      <div className="aurora w-[700px] h-[400px] bg-gold-400/12 top-1/3 left-1/2 -translate-x-1/2" />
      <div className="aurora aurora-slow w-[400px] h-[400px] bg-navy-700/40 -bottom-20 -left-20" />

      {/* Isotipo dorado de fondo */}
      <div className="absolute right-[6%] bottom-[8%] w-[300px] h-[300px] opacity-[0.08] pointer-events-none select-none hidden lg:block">
        <Image src="/brand/logo-v-dorado.png" alt="" fill className="object-contain" />
      </div>

      <div className="relative z-10 w-full py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-gold-400 text-[11px] font-semibold tracking-[0.35em] uppercase">Dé el primer paso</span>

              <h2 className="font-serif text-[clamp(2.2rem,5vw,4rem)] font-medium text-white mt-8 mb-8 leading-[1.1]">
                ¿Tiene un asunto legal que requiere
                <br className="hidden lg:block" />
                <span className="text-gold-400 italic font-normal"> atención inmediata?</span>
              </h2>

              <p className="text-white/75 text-[15px] leading-[1.9] font-light mb-12 max-w-lg mx-auto">
                Permítanos evaluar su situación con absoluta confidencialidad. La primera consulta estratégica es sin compromiso.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-gold-400 text-navy-950 text-[13px] font-semibold uppercase tracking-[0.15em] transition-all duration-500 hover:bg-gold-300 hover:shadow-[0_0_60px_rgba(215,183,118,0.2)]"
                >
                  Agendar por WhatsApp
                  <ArrowRight className="group-hover:translate-x-1.5 transition-transform duration-500" size={15} />
                </a>
                <Link
                  href="/contacto"
                  className="inline-flex items-center justify-center gap-3 px-10 py-4 border border-white/25 text-white/85 text-[13px] font-medium uppercase tracking-[0.15em] transition-all duration-500 hover:border-gold-400/60 hover:text-gold-400"
                >
                  Formulario de contacto
                </Link>
              </div>

              {/* Datos de contacto condensados */}
              <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-x-10 gap-y-3">
                {info.map((item, i) => (
                  <div key={i} className="flex items-center justify-center gap-2.5 text-white/65 text-[13px] font-light">
                    <span className="text-gold-400/80">{item.icon}</span>
                    {item.value}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
