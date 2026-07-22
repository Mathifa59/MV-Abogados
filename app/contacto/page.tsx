'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const contactInfo = [
  { icon: <MapPin size={16} strokeWidth={1.5} />, label: 'Oficina', value: 'Av. Javier Prado Este 1234, Of. 501\nSan Isidro, Lima — Perú' },
  { icon: <Phone size={16} strokeWidth={1.5} />, label: 'WhatsApp', value: '+51 962 281 357' },
  { icon: <Mail size={16} strokeWidth={1.5} />, label: 'Correo', value: 'contacto@monteza-villegas.com' },
  { icon: <Clock size={16} strokeWidth={1.5} />, label: 'Horario', value: 'Lunes a Viernes, 9:00 — 18:00' },
];

const inputClass =
  'w-full px-0 py-3 bg-transparent border-b border-navy-900/15 text-navy-900 text-sm placeholder:text-ink/60 focus:border-gold-500 transition-colors duration-500 outline-none';

export default function ContactoPage() {
  return (
    <main className="bg-ivory min-h-screen flex flex-col">
      <Navbar />

      {/* Hero de contacto */}
      <section className="relative pt-40 pb-20 lg:pt-48 lg:pb-24 bg-navy-900 overflow-hidden bg-grain">
        <div className="aurora w-[450px] h-[450px] bg-gold-400/12 -top-32 -left-32" />
        <div className="absolute inset-4 lg:inset-6 border border-gold-400/25 pointer-events-none hidden md:block" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative max-w-[1400px] mx-auto px-6 lg:px-16"
        >
          <div className="flex items-center gap-5 mb-6">
            <span className="h-px w-12 bg-gold-400/70" />
            <span className="text-gold-400 text-[11px] font-medium tracking-[0.35em] uppercase">Contacto</span>
          </div>
          <h1 className="font-serif text-[clamp(2.2rem,4.5vw,4.2rem)] font-medium text-white leading-[1.02] max-w-3xl">
            Hablemos sobre
            <br />
            <span className="text-gold-400 italic font-normal">su caso.</span>
          </h1>
        </motion.div>
      </section>

      {/* Contenido split */}
      <section className="grow relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Info */}
          <div className="bg-ivory py-24 lg:py-32 relative overflow-hidden bg-grain">
            <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-gold-400/12 rounded-full blur-[130px] pointer-events-none" />
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-lg mx-auto lg:ml-auto lg:mr-16 xl:mr-24 px-6 lg:px-0"
            >
              <p className="text-ink text-[15px] leading-[1.9] mb-16 max-w-sm">
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
                    <div className="shrink-0 w-10 h-10 rounded-full border border-navy-900/15 flex items-center justify-center text-gold-600 group-hover:border-gold-500/50 group-hover:bg-gold-400/10 transition-all duration-500">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-navy-800 text-[10px] tracking-[0.3em] uppercase mb-1 font-semibold">{item.label}</p>
                      <p className="text-ink text-sm whitespace-pre-line">{item.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Formulario */}
          <div className="bg-paper py-24 lg:py-32 border-t lg:border-t-0 lg:border-l border-navy-900/10">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-lg mx-auto lg:mr-auto lg:ml-16 xl:ml-24 px-6 lg:px-0"
            >
              <p className="text-navy-800 text-[10px] tracking-[0.3em] uppercase mb-12 font-semibold">Envíenos un mensaje</p>

              <form className="space-y-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  <input type="text" placeholder="Nombre completo" className={inputClass} />
                  <input type="tel" placeholder="Teléfono" className={inputClass} />
                </div>

                <input type="email" placeholder="Correo electrónico" className={inputClass} />

                <select className={`${inputClass} appearance-none cursor-pointer text-ink/70`}>
                  <option value="">Área de consulta</option>
                  <option value="corporativo">Derecho Corporativo</option>
                  <option value="penal">Defensa Penal</option>
                  <option value="litigios">Litigios & Arbitraje</option>
                  <option value="laboral">Derecho Laboral</option>
                  <option value="pi">Propiedad Intelectual</option>
                  <option value="digital">Derecho Digital</option>
                  <option value="otro">Otro Asunto</option>
                </select>

                <textarea rows={3} placeholder="Describa brevemente su consulta..." className={`${inputClass} resize-none`} />

                <button
                  type="submit"
                  className="group inline-flex items-center gap-4 px-8 py-3.5 bg-navy-900 text-gold-300 text-[13px] font-medium uppercase tracking-[0.2em] hover:bg-navy-800 transition-colors duration-500"
                >
                  Enviar consulta
                  <span className="w-8 h-px bg-gold-400/50 group-hover:w-14 transition-all duration-500" />
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
