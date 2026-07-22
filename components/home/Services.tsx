'use client';

import { motion } from 'framer-motion';
import { Shield, Briefcase, Scale, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const featured = [
  {
    numeral: 'I',
    icon: <Briefcase strokeWidth={1} className="w-7 h-7" />,
    title: 'Derecho Corporativo',
    description:
      'Estructuramos operaciones de M&A, gobierno corporativo y protección patrimonial para empresas que necesitan certeza jurídica en cada decisión.',
    areas: ['Fusiones & Adquisiciones', 'Gobierno Corporativo', 'Estructuración Societaria'],
  },
  {
    numeral: 'II',
    icon: <Shield strokeWidth={1} className="w-7 h-7" />,
    title: 'Defensa Penal',
    description:
      'Representación de alto nivel en investigaciones fiscales, delitos económicos y compliance penal. Protegemos la libertad y reputación de nuestros clientes.',
    areas: ['Delitos Económicos', 'Compliance Penal', 'Cuello Blanco'],
  },
  {
    numeral: 'III',
    icon: <Scale strokeWidth={1} className="w-7 h-7" />,
    title: 'Litigios & Arbitraje',
    description:
      'Defensa estratégica en disputas civiles, comerciales y arbitraje. Cada caso se prepara con la rigurosidad de quien va a juicio.',
    areas: ['Arbitraje Comercial', 'Disputas Civiles', 'Responsabilidad Civil'],
  },
];

export default function Services() {
  return (
    <section className="section-view bg-columns bg-grain bg-linear-to-b from-mist-deep via-mist to-ivory">
      {/* Atmósfera: brillo dorado + tinte navy */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-gold-400/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-32 w-[500px] h-[500px] bg-navy-700/20 rounded-full blur-[140px] pointer-events-none" />
      {/* Degradado de entrada desde el hero navy */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gold-500/50 to-transparent" />

      <div className="relative z-10 w-full py-24 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          {/* Header asimétrico */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-14 lg:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6"
            >
              <span className="text-gold-700 text-[11px] font-semibold tracking-[0.35em] uppercase">Lo que hacemos</span>
              <h2 className="font-serif text-[clamp(2.2rem,4.5vw,4rem)] font-medium text-navy-900 mt-5 leading-[1.05]">
                Práctica legal
                <br />
                <span className="text-navy-700 italic font-normal">de alto nivel</span>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 lg:col-start-8 flex items-end"
            >
              <p className="text-ink text-[15px] leading-[1.8]">
                Nos especializamos en las áreas del derecho donde la precisión y la estrategia marcan la diferencia entre un resultado favorable y uno adverso.
              </p>
            </motion.div>
          </div>

          {/* Cards estilo columna: capitel dorado arriba */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {featured.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="group relative bg-paper/90 backdrop-blur-sm border border-navy-900/15 p-8 lg:p-10 transition-all duration-700 hover:border-gold-500/50 hover:shadow-[0_20px_60px_rgba(1,38,65,0.12)] hover:-translate-y-1"
              >
                {/* Capitel — barra dorada superior */}
                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-gold-500/70 via-gold-400 to-gold-500/70 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />

                <div className="flex items-center justify-between mb-8">
                  <div className="text-gold-600 group-hover:text-gold-700 transition-colors duration-700">
                    {item.icon}
                  </div>
                  <span className="text-navy-900/15 font-serif text-5xl font-medium select-none group-hover:text-gold-500/40 transition-colors duration-700">
                    {item.numeral}
                  </span>
                </div>

                <h3 className="font-serif text-2xl text-navy-900 mb-4 font-medium">
                  {item.title}
                </h3>

                <p className="text-ink/90 text-[14px] leading-[1.8] mb-8">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.areas.map((area, i) => (
                    <span
                      key={i}
                      className="text-navy-800 text-[10px] tracking-[0.15em] uppercase border border-navy-900/20 px-3 py-1.5 group-hover:border-gold-500/40 transition-all duration-500"
                    >
                      {area}
                    </span>
                  ))}
                </div>
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
              href="/areas"
              className="group inline-flex items-center gap-4 text-navy-900 text-[12px] tracking-[0.2em] uppercase font-semibold hover:text-gold-700 transition-colors duration-500"
            >
              Ver las 6 áreas de práctica
              <ArrowRight className="group-hover:translate-x-2 transition-transform duration-500 text-gold-600" size={14} />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Isotipo fantasma */}
      <div className="absolute -right-16 -bottom-16 w-[340px] h-[340px] opacity-[0.05] pointer-events-none select-none hidden lg:block">
        <Image src="/brand/logo-v-negro.png" alt="" fill className="object-contain" />
      </div>
    </section>
  );
}
