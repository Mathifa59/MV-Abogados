'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, ArrowRight } from 'lucide-react';

const contactInfo = [
  { icon: <MapPin size={16} strokeWidth={1} />, label: 'Oficina', value: 'Av. Javier Prado Este 1234, Of. 501\nSan Isidro, Lima — Perú' },
  { icon: <Phone size={16} strokeWidth={1} />, label: 'WhatsApp', value: '+51 962 281 357' },
  { icon: <Mail size={16} strokeWidth={1} />, label: 'Correo', value: 'contacto@monteza-villegas.com' },
  { icon: <Clock size={16} strokeWidth={1} />, label: 'Horario', value: 'Lunes a Viernes, 9:00 — 18:00' },
];

export default function ContactoPage() {
  return (
    <main className="bg-navy-950 min-h-screen flex flex-col">
      <Navbar />

      {/* Hero de contacto — sin PageHeader, diseño propio */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-28 bg-navy-900/50">
        <div className="absolute inset-0 bg-linear-to-b from-navy-950 via-navy-900/50 to-navy-950" />
        <div className="absolute left-[6%] top-0 w-px h-full bg-linear-to-b from-transparent via-gold-400/10 to-transparent hidden xl:block" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative max-w-[1400px] mx-auto px-6 lg:px-16"
        >
          <div className="flex items-center gap-5 mb-6">
            <span className="h-px w-12 bg-gold-400/50" />
            <span className="text-gold-400/60 text-[11px] font-medium tracking-[0.35em] uppercase">Contacto</span>
          </div>
          <h1 className="font-serif text-[clamp(2.8rem,6vw,5.5rem)] font-normal text-white leading-[0.95] max-w-3xl">
            Hablemos sobre
            <br /><span className="text-white/50">su caso.</span>
          </h1>
        </motion.div>
      </section>

      {/* Contenido split */}
      <section className="grow relative">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Lado izquierdo — info */}
          <div className="bg-navy-900/30 py-24 lg:py-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-lg mx-auto lg:ml-auto lg:mr-16 xl:mr-24 px-6 lg:px-0"
            >
              <p className="text-white/60 text-[15px] leading-[1.9] font-light mb-16 max-w-sm">
                Programemos una reunión inicial para evaluar su situación con absoluta confidencialidad. La primera consulta es sin compromiso.
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
                    <div className="shrink-0 w-10 h-10 rounded-full border border-white/6 flex items-center justify-center text-gold-400/30 group-hover:border-gold-400/20 group-hover:text-gold-400/60 transition-all duration-500">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-white/40 text-[10px] tracking-[0.3em] uppercase mb-1">{item.label}</p>
                      <p className="text-white/50 text-sm whitespace-pre-line font-light">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Lado derecho — formulario */}
          <div className="py-24 lg:py-32">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-lg mx-auto lg:mr-auto lg:ml-16 xl:ml-24 px-6 lg:px-0"
            >
              <p className="text-white/40 text-[10px] tracking-[0.3em] uppercase mb-12">Envíenos un mensaje</p>

              <form className="space-y-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  <div className="relative">
                    <input type="text" placeholder="Nombre completo" className="w-full px-0 py-3 bg-transparent border-b border-white/6 text-white/80 text-sm placeholder:text-white/30 focus:border-gold-400/30 transition-colors duration-500 outline-none peer" />
                    <div className="absolute bottom-0 left-0 w-0 h-px bg-gold-400/50 peer-focus:w-full transition-all duration-500" />
                  </div>
                  <div className="relative">
                    <input type="tel" placeholder="Teléfono" className="w-full px-0 py-3 bg-transparent border-b border-white/6 text-white/80 text-sm placeholder:text-white/30 focus:border-gold-400/30 transition-colors duration-500 outline-none peer" />
                    <div className="absolute bottom-0 left-0 w-0 h-px bg-gold-400/50 peer-focus:w-full transition-all duration-500" />
                  </div>
                </div>

                <div className="relative">
                  <input type="email" placeholder="Correo electrónico" className="w-full px-0 py-3 bg-transparent border-b border-white/6 text-white/80 text-sm placeholder:text-white/30 focus:border-gold-400/30 transition-colors duration-500 outline-none peer" />
                  <div className="absolute bottom-0 left-0 w-0 h-px bg-gold-400/50 peer-focus:w-full transition-all duration-500" />
                </div>

                <div className="relative">
                  <select className="w-full px-0 py-3 bg-transparent border-b border-white/6 text-white/70 text-sm appearance-none focus:border-gold-400/30 transition-colors duration-500 outline-none cursor-pointer">
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
                  <textarea rows={3} placeholder="Describa brevemente su consulta..." className="w-full px-0 py-3 bg-transparent border-b border-white/6 text-white/80 text-sm placeholder:text-white/30 focus:border-gold-400/30 transition-colors duration-500 resize-none outline-none peer" />
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

      <Footer />
    </main>
  );
}
