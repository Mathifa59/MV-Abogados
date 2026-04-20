'use client';

import { motion } from 'framer-motion';
import { Shield, Briefcase, Scale } from 'lucide-react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const featured = [
  {
    icon: <Briefcase strokeWidth={1} className="w-7 h-7" />,
    title: 'Derecho Corporativo',
    description: 'Estructuramos operaciones complejas de M&A, gobierno corporativo y protección patrimonial para empresas que necesitan certeza jurídica en cada decisión.',
    areas: ['Fusiones & Adquisiciones', 'Gobierno Corporativo', 'Estructuración Societaria'],
  },
  {
    icon: <Shield strokeWidth={1} className="w-7 h-7" />,
    title: 'Defensa Penal',
    description: 'Representación de alto nivel en investigaciones fiscales, delitos económicos y compliance penal. Protegemos la libertad y reputación de nuestros clientes.',
    areas: ['Delitos Económicos', 'Compliance Penal', 'Cuello Blanco'],
  },
  {
    icon: <Scale strokeWidth={1} className="w-7 h-7" />,
    title: 'Litigios & Arbitraje',
    description: 'Defensa estratégica en disputas civiles, comerciales y arbitraje internacional. Cada caso se prepara como si fuera a juicio.',
    areas: ['Arbitraje Comercial', 'Disputas Civiles', 'Responsabilidad Civil'],
  },
];

export default function Services() {
  return (
    <section className="py-24 lg:py-32 bg-navy-950 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        {/* Header asimétrico */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <span className="text-gold-400/50 text-[11px] font-medium tracking-[0.35em] uppercase">Lo que hacemos</span>
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,4rem)] font-normal text-white mt-5 leading-[1.05]">
              Práctica legal<br /><span className="text-white/50">de alto nivel</span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 lg:col-start-8 flex items-end"
          >
            <p className="text-white/60 text-[14px] leading-[1.8] font-light">
              Nos especializamos en las áreas del derecho donde la precisión y la estrategia marcan la diferencia entre un resultado favorable y uno adverso.
            </p>
          </motion.div>
        </div>

        {/* 3 cards destacadas — diseño con sub-áreas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {featured.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative bg-navy-900/40 border border-white/5 p-8 lg:p-10 hover:border-gold-400/20 hover:bg-navy-900/60 transition-all duration-700"
            >
              {/* Número + icono */}
              <div className="flex items-center justify-between mb-8">
                <div className="text-gold-400/30 group-hover:text-gold-400/70 transition-colors duration-700">
                  {item.icon}
                </div>
                <span className="text-white/6 font-serif text-5xl font-light select-none">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className="font-serif text-xl lg:text-2xl text-white/90 mb-4 group-hover:text-gold-400 transition-colors duration-500">
                {item.title}
              </h3>

              <p className="text-white/60 text-[13px] leading-[1.8] font-light mb-8">
                {item.description}
              </p>

              {/* Sub-áreas como tags */}
              <div className="flex flex-wrap gap-2">
                {item.areas.map((area, i) => (
                  <span key={i} className="text-white/50 text-[10px] tracking-[0.15em] uppercase border border-white/6 px-3 py-1.5 group-hover:border-gold-400/15 group-hover:text-gold-400/40 transition-all duration-500">
                    {area}
                  </span>
                ))}
              </div>

              {/* Línea inferior animada */}
              <div className="absolute bottom-0 left-0 w-0 h-px bg-gold-400/40 transition-all duration-700 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        {/* CTA a página completa */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 flex justify-center"
        >
          <Link href="/areas" className="group inline-flex items-center gap-4 text-gold-400/50 text-[12px] tracking-[0.2em] uppercase hover:text-gold-400 transition-colors duration-500">
            Ver las 6 áreas de práctica
            <ArrowRight className="group-hover:translate-x-2 transition-transform duration-500" size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
