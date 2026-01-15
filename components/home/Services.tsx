'use client';

import { motion } from 'framer-motion';
import { Shield, Briefcase, Scale, FileText, Gavel, Users } from 'lucide-react';

const services = [
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Derecho Corporativo",
    description: "Asesoría integral para empresas, fusiones, adquisiciones y estructuración societaria."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Defensa Penal",
    description: "Representación estratégica en litigios complejos y delitos de cuello blanco."
  },
  {
    icon: <Scale className="w-8 h-8" />,
    title: "Litigios Civiles",
    description: "Resolución de conflictos, contratos y responsabilidad civil con enfoque en resultados."
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Derecho Laboral",
    description: "Gestión preventiva y solución de controversias laborales para empleadores."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Derecho de Familia",
    description: "Manejo sensible y reservado de sucesiones, herencias y patrimonios familiares."
  },
  {
    icon: <Gavel className="w-8 h-8" />,
    title: "Administrativo",
    description: "Defensa ante organismos reguladores y gestión de licencias estatales."
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-navy-900 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold-400 font-semibold tracking-widest uppercase text-sm">Nuestra Experiencia</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 font-serif">Áreas de Práctica</h2>
          <div className="w-24 h-1 bg-gold-400 mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 border border-slate-800 bg-navy-800/30 hover:bg-navy-800 transition-all duration-300 rounded-sm hover:border-gold-400/50"
            >
              <div className="text-gold-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}