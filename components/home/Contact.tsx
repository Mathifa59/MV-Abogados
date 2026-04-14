'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';

const contactInfo = [
  { icon: <MapPin size={16} strokeWidth={1} />, label: 'Oficina', value: 'Av. Javier Prado Este 1234, Of. 501\nSan Isidro, Lima — Perú' },
  { icon: <Phone size={16} strokeWidth={1} />, label: 'Teléfono', value: '+51 (01) 234-5678' },
  { icon: <Mail size={16} strokeWidth={1} />, label: 'Correo', value: 'contacto@monteza-villegas.com' },
  { icon: <Clock size={16} strokeWidth={1} />, label: 'Horario', value: 'Lunes a Viernes, 9:00 — 18:00' },
];

export default function Contact() {
  return (
    <section className="relative bg-navy-950 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Lado izquierdo — fondo oscuro con info */}
        <div className="bg-navy-900/50 py-28 lg:py-36 relative">
          {/* Glow decorativo */}
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold-400/[0.02] rounded-full blur-[150px] pointer-events-none" />

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-lg mx-auto lg:ml-auto lg:mr-16 xl:mr-24 px-6 lg:px-0 relative"
          >
            <span className="text-gold-400/50 text-[11px] font-medium tracking-[0.35em] uppercase">Contacto</span>
            <h2 className="font-serif text-[clamp(2.2rem,4vw,3.8rem)] font-normal text-white mt-6 mb-6 leading-[1.05]">
              Estamos listos
              <br /><span className="text-white/30">para asistirle</span>
            </h2>
            <p className="text-white/25 text-[15px] leading-[1.9] font-light mb-16 max-w-sm">
              Programemos una reunión inicial. Absoluta confidencialidad garantizada.
            </p>

            <div className="space-y-8">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                  className="flex gap-5 group"
                >
                  <div className="shrink-0 w-10 h-10 rounded-full border border-white/[0.06] flex items-center justify-center text-gold-400/30 group-hover:border-gold-400/20 group-hover:text-gold-400/60 transition-all duration-500">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white/15 text-[10px] tracking-[0.3em] uppercase mb-1">{item.label}</p>
                    <p className="text-white/50 text-sm whitespace-pre-line font-light">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Lado derecho — formulario */}
        <div className="py-28 lg:py-36">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-lg mx-auto lg:mr-auto lg:ml-16 xl:ml-24 px-6 lg:px-0"
          >
            <p className="text-white/15 text-[10px] tracking-[0.3em] uppercase mb-10">Envíenos un mensaje</p>

            <form className="space-y-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div className="relative">
                  <input type="text" placeholder="Nombre completo" className="w-full px-0 py-3 bg-transparent border-b border-white/[0.06] text-white/80 text-sm placeholder:text-white/15 focus:border-gold-400/30 transition-colors duration-500 outline-none peer" />
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-gold-400/50 peer-focus:w-full transition-all duration-500" />
                </div>
                <div className="relative">
                  <input type="tel" placeholder="Teléfono" className="w-full px-0 py-3 bg-transparent border-b border-white/[0.06] text-white/80 text-sm placeholder:text-white/15 focus:border-gold-400/30 transition-colors duration-500 outline-none peer" />
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-gold-400/50 peer-focus:w-full transition-all duration-500" />
                </div>
              </div>

              <div className="relative">
                <input type="email" placeholder="Correo electrónico" className="w-full px-0 py-3 bg-transparent border-b border-white/[0.06] text-white/80 text-sm placeholder:text-white/15 focus:border-gold-400/30 transition-colors duration-500 outline-none peer" />
                <div className="absolute bottom-0 left-0 w-0 h-px bg-gold-400/50 peer-focus:w-full transition-all duration-500" />
              </div>

              <div className="relative">
                <select className="w-full px-0 py-3 bg-transparent border-b border-white/[0.06] text-white/40 text-sm appearance-none focus:border-gold-400/30 transition-colors duration-500 outline-none cursor-pointer">
                  <option value="" className="bg-navy-950 text-white">Área de consulta</option>
                  <option value="corporativo" className="bg-navy-950">Derecho Corporativo</option>
                  <option value="penal" className="bg-navy-950">Defensa Penal</option>
                  <option value="civil" className="bg-navy-950">Litigios Civiles</option>
                  <option value="laboral" className="bg-navy-950">Derecho Laboral</option>
                  <option value="familia" className="bg-navy-950">Derecho de Familia</option>
                  <option value="otro" className="bg-navy-950">Otro Asunto</option>
                </select>
              </div>

              <div className="relative">
                <textarea rows={3} placeholder="Describa brevemente su consulta..." className="w-full px-0 py-3 bg-transparent border-b border-white/[0.06] text-white/80 text-sm placeholder:text-white/15 focus:border-gold-400/30 transition-colors duration-500 resize-none outline-none peer" />
                <div className="absolute bottom-0 left-0 w-0 h-px bg-gold-400/50 peer-focus:w-full transition-all duration-500" />
              </div>

              <button type="submit" className="group inline-flex items-center gap-4 px-0 py-2 bg-transparent text-gold-400/70 text-[13px] font-medium uppercase tracking-[0.2em] hover:text-gold-400 transition-colors duration-500">
                Enviar consulta
                <span className="w-12 h-px bg-gold-400/30 group-hover:w-20 group-hover:bg-gold-400/60 transition-all duration-500" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
