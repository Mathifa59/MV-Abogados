'use client';

import { motion } from 'framer-motion';
import { Shield, Briefcase, Scale, FileText, Gavel, Users, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const services = [
  { icon: <Briefcase strokeWidth={1} className="w-6 h-6" />, title: 'Derecho Corporativo', description: 'Fusiones, adquisiciones, estructuración societaria y gobierno corporativo.', accent: 'M&A' },
  { icon: <Shield strokeWidth={1} className="w-6 h-6" />, title: 'Defensa Penal', description: 'Litigios complejos, delitos económicos y de cuello blanco.', accent: 'Penal' },
  { icon: <Scale strokeWidth={1} className="w-6 h-6" />, title: 'Litigios Civiles', description: 'Conflictos contractuales, responsabilidad civil y arbitraje.', accent: 'Civil' },
  { icon: <FileText strokeWidth={1} className="w-6 h-6" />, title: 'Derecho Laboral', description: 'Gestión preventiva y controversias laborales para organizaciones.', accent: 'Laboral' },
  { icon: <Users strokeWidth={1} className="w-6 h-6" />, title: 'Derecho de Familia', description: 'Sucesiones, patrimonios familiares y procesos de custodia.', accent: 'Familia' },
  { icon: <Gavel strokeWidth={1} className="w-6 h-6" />, title: 'Derecho Administrativo', description: 'Organismos reguladores, licencias y contratación pública.', accent: 'Admin.' },
];

export default function Services() {
  return (
    <section className="py-24 lg:py-32 bg-navy-950 relative overflow-hidden">
      {/* Decorativo: línea vertical dorada */}
      <div className="absolute top-0 left-1/2 w-px h-32 bg-linear-to-b from-gold-400/30 to-transparent hidden lg:block" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
        {/* Header — centrado con acento grande */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20 lg:mb-24 relative"
        >
          {/* Texto fantasma grande detrás */}
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[clamp(5rem,15vw,14rem)] text-white/1.5 leading-none select-none pointer-events-none whitespace-nowrap">
            Práctica
          </span>
          <span className="text-gold-400/50 text-[11px] font-medium tracking-[0.35em] uppercase relative">Nuestra Experiencia</span>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-normal text-white mt-6 leading-[1.05] relative">
            Áreas de Práctica
          </h2>
        </motion.div>

        {/* Cards — lista vertical estilo editorial en desktop */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="group border-t border-white/5 first:border-t-0"
            >
              <div className="grid grid-cols-12 items-center py-8 lg:py-10 gap-4 lg:gap-8 cursor-default">
                {/* Número */}
                <div className="col-span-2 lg:col-span-1">
                  <span className="text-gold-400/20 font-serif text-2xl lg:text-3xl font-light group-hover:text-gold-400/50 transition-colors duration-700 select-none">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Icono + Título */}
                <div className="col-span-10 lg:col-span-4 flex items-center gap-5">
                  <div className="text-gold-400/30 group-hover:text-gold-400/80 transition-colors duration-700 hidden sm:block">
                    {service.icon}
                  </div>
                  <h3 className="font-serif text-lg lg:text-[1.35rem] text-white/80 group-hover:text-gold-400 transition-colors duration-500">
                    {service.title}
                  </h3>
                </div>

                {/* Descripción */}
                <div className="col-span-12 lg:col-span-5 lg:col-start-6">
                  <p className="text-white/25 text-[13px] lg:text-sm leading-[1.8] font-light pl-0 lg:pl-4">
                    {service.description}
                  </p>
                </div>

                {/* Flecha */}
                <div className="hidden lg:flex col-span-2 justify-end">
                  <div className="w-10 h-10 rounded-full border border-white/5 flex items-center justify-center group-hover:border-gold-400/30 group-hover:bg-gold-400/5 transition-all duration-500">
                    <ArrowUpRight size={14} className="text-white/15 group-hover:text-gold-400/70 transition-colors duration-500" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 flex justify-center"
        >
          <Link href="/areas" className="inline-flex items-center gap-4 text-gold-400/40 text-[12px] tracking-[0.2em] uppercase hover:text-gold-400/80 transition-colors duration-500 group">
            <span className="h-px w-10 bg-gold-400/20 group-hover:w-16 group-hover:bg-gold-400/40 transition-all duration-500" />
            Ver todas las áreas
            <span className="h-px w-10 bg-gold-400/20 group-hover:w-16 group-hover:bg-gold-400/40 transition-all duration-500" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
