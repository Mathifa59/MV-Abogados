'use client';

import PageHeader from '@/components/shared/PageHeader';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function ContactoPage() {
  return (
    <main className="bg-navy-950 min-h-screen flex flex-col">
      <Navbar />
      
      <PageHeader 
        title="Contacto" 
        subtitle="Agende su Consulta"
        image="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2000"
      />

      <section className="py-16 md:py-24 container mx-auto px-4 md:px-6 grow">
        {/* En móvil: 1 columna. En Desktop: 2 columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* INFO CONTACTO */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1" // En movil sale segundo, en PC primero
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white font-serif mb-6 md:mb-8">Estamos listos para asistirle</h2>
            <p className="text-slate-400 mb-10 text-base md:text-lg leading-relaxed">
              Póngase en contacto con nosotros para programar una reunión inicial. Nuestro equipo revisará su caso con absoluta confidencialidad.
            </p>

            <div className="space-y-8">
              {/* Item Dirección */}
              <div className="flex gap-4 md:gap-6 items-start">
                <div className="bg-navy-800 p-3 md:p-4 rounded-full text-gold-400 shrink-0 shadow-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg md:text-xl mb-1 font-serif">Oficina Principal</h4>
                  <p className="text-slate-400 text-sm md:text-base">Av. Javier Prado Este 1234, Of. 501<br/>San Isidro, Lima - Perú</p>
                </div>
              </div>
              
              {/* Item Teléfono */}
              <div className="flex gap-4 md:gap-6 items-start">
                <div className="bg-navy-800 p-3 md:p-4 rounded-full text-gold-400 shrink-0 shadow-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg md:text-xl mb-1 font-serif">Teléfono</h4>
                  <p className="text-slate-400 text-sm md:text-base">+51 (01) 234-5678</p>
                </div>
              </div>

              {/* Item Correo */}
              <div className="flex gap-4 md:gap-6 items-start">
                <div className="bg-navy-800 p-3 md:p-4 rounded-full text-gold-400 shrink-0 shadow-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg md:text-xl mb-1 font-serif">Correo Electrónico</h4>
                  <p className="text-slate-400 text-sm md:text-base">contacto@monteza-villegas.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FORMULARIO */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="order-1 lg:order-2 bg-navy-900 p-6 md:p-12 rounded-sm border border-navy-800 shadow-2xl relative overflow-hidden"
          >
            {/* Fondo decorativo */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/5 blur-[60px] rounded-full"></div>

            {/* Cabecera del Formulario Centrada */}
            <div className="flex flex-col items-center text-center mb-8">
              <div className="mb-6 relative h-12 w-40 md:h-16 md:w-48">
                 <Image
                  src="/logo2.png"
                  alt="Monteza Villegas"
                  fill
                  className="object-contain"
                />
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-white font-serif relative inline-block pb-3">
                Envíenos un Mensaje
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gold-400 rounded-full"></span>
              </h3>
            </div>
            
            <form className="space-y-4 md:space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-xs md:text-sm font-bold text-gold-400 mb-2 uppercase tracking-wider">Nombre</label>
                  <input type="text" className="w-full p-3 md:p-4 bg-navy-950 border border-navy-800 text-white rounded focus:border-gold-400 outline-none transition-all placeholder:text-slate-700" placeholder="Su nombre" />
                </div>
                <div>
                  <label className="block text-xs md:text-sm font-bold text-gold-400 mb-2 uppercase tracking-wider">Teléfono</label>
                  <input type="tel" className="w-full p-3 md:p-4 bg-navy-950 border border-navy-800 text-white rounded focus:border-gold-400 outline-none transition-all placeholder:text-slate-700" placeholder="+51..." />
                </div>
              </div>
              
              <div>
                <label className="block text-xs md:text-sm font-bold text-gold-400 mb-2 uppercase tracking-wider">Correo</label>
                <input type="email" className="w-full p-3 md:p-4 bg-navy-950 border border-navy-800 text-white rounded focus:border-gold-400 outline-none transition-all placeholder:text-slate-700" placeholder="correo@empresa.com" />
              </div>

              <div>
                <label className="block text-xs md:text-sm font-bold text-gold-400 mb-2 uppercase tracking-wider">Asunto</label>
                <div className="relative">
                  <select className="w-full p-3 md:p-4 bg-navy-950 border border-navy-800 text-white rounded focus:border-gold-400 outline-none appearance-none">
                    <option>Derecho Corporativo</option>
                    <option>Litigios & Arbitraje</option>
                    <option>Propiedad Intelectual</option>
                    <option>Otro Asunto</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs md:text-sm font-bold text-gold-400 mb-2 uppercase tracking-wider">Mensaje</label>
                <textarea rows={4} className="w-full p-3 md:p-4 bg-navy-950 border border-navy-800 text-white rounded focus:border-gold-400 outline-none resize-none placeholder:text-slate-700" placeholder="Consulta..."></textarea>
              </div>

              <button type="submit" className="w-full py-4 bg-gold-400 text-navy-900 font-bold rounded hover:bg-gold-500 transition-all uppercase tracking-widest text-sm shadow-lg active:scale-95">
                Enviar Consulta
              </button>
            </form>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}