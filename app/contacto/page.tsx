'use client';

import PageHeader from '@/components/shared/PageHeader';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function ContactoPage() {
  return (
    <main className="bg-navy-950 min-h-screen">
      <Navbar />
      
      <PageHeader 
        title="Contacto" 
        subtitle="Agende su Consulta"
        image="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2000"
      />

      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Columna Izquierda: Información (Sin cambios) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white font-serif mb-8">Estamos listos para asistirle</h2>
            <p className="text-slate-400 mb-12 text-lg leading-relaxed">
              Póngase en contacto con nosotros para programar una reunión inicial. Nuestro equipo revisará su caso con absoluta confidencialidad y le responderá en menos de 24 horas.
            </p>

            <div className="space-y-10">
              <div className="flex gap-6 items-start group">
                <div className="bg-navy-800 p-4 rounded-full text-gold-400 group-hover:bg-gold-400 group-hover:text-navy-900 transition-all duration-300 shadow-lg shadow-navy-900/50">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xl mb-1 font-serif">Oficina Principal</h4>
                  <p className="text-slate-400">Av. Javier Prado Este 1234, Of. 501<br/>San Isidro, Lima - Perú</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start group">
                <div className="bg-navy-800 p-4 rounded-full text-gold-400 group-hover:bg-gold-400 group-hover:text-navy-900 transition-all duration-300 shadow-lg shadow-navy-900/50">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xl mb-1 font-serif">Teléfono</h4>
                  <p className="text-slate-400">+51 (01) 234-5678</p>
                  <p className="text-slate-500 text-sm">Lunes a Viernes, 9am - 6pm</p>
                </div>
              </div>

              <div className="flex gap-6 items-start group">
                <div className="bg-navy-800 p-4 rounded-full text-gold-400 group-hover:bg-gold-400 group-hover:text-navy-900 transition-all duration-300 shadow-lg shadow-navy-900/50">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-white text-xl mb-1 font-serif">Correo Electrónico</h4>
                  <p className="text-slate-400">contacto@monteza-villegas.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Columna Derecha: Formulario CORREGIDO */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-navy-900 p-8 md:p-12 rounded-sm border border-navy-800 shadow-2xl relative overflow-hidden"
          >
            {/* Fondo decorativo */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/5 blur-[60px] rounded-full"></div>

            {/* HEADER DEL FORMULARIO CENTRADO */}
            <div className="flex flex-col items-center text-center mb-10">
              <div className="mb-6 relative h-16 w-48">
                 <Image
                  src="/logo2.png"
                  alt="Monteza Villegas"
                  fill
                  className="object-contain"
                />
              </div>
              
              <h3 className="text-2xl font-bold text-white font-serif relative inline-block pb-3">
                Envíenos un Mensaje
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-gold-400 rounded-full"></span>
              </h3>
            </div>
            
            <form className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gold-400 mb-2 uppercase tracking-wider">Nombre</label>
                  <input 
                    type="text" 
                    className="w-full p-4 bg-navy-950 border border-navy-800 text-white rounded focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all placeholder:text-slate-600" 
                    placeholder="Su nombre completo" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gold-400 mb-2 uppercase tracking-wider">Teléfono</label>
                  <input 
                    type="tel" 
                    className="w-full p-4 bg-navy-950 border border-navy-800 text-white rounded focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all placeholder:text-slate-600" 
                    placeholder="+51..." 
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gold-400 mb-2 uppercase tracking-wider">Correo Electrónico</label>
                <input 
                  type="email" 
                  className="w-full p-4 bg-navy-950 border border-navy-800 text-white rounded focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all placeholder:text-slate-600" 
                  placeholder="correo@empresa.com" 
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gold-400 mb-2 uppercase tracking-wider">Asunto Legal</label>
                <div className="relative">
                  <select className="w-full p-4 bg-navy-950 border border-navy-800 text-white rounded focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all appearance-none cursor-pointer">
                    <option>Derecho Corporativo</option>
                    <option>Litigios & Arbitraje</option>
                    <option>Propiedad Intelectual</option>
                    <option>Derecho Penal</option>
                    <option>Otro Asunto</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-gold-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gold-400 mb-2 uppercase tracking-wider">Mensaje</label>
                <textarea 
                  rows={4} 
                  className="w-full p-4 bg-navy-950 border border-navy-800 text-white rounded focus:outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400 transition-all placeholder:text-slate-600 resize-none" 
                  placeholder="Describa brevemente su consulta..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full py-4 bg-gold-400 text-navy-900 font-bold rounded hover:bg-gold-500 transition-all uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(207,166,87,0.2)] hover:shadow-[0_0_30px_rgba(207,166,87,0.4)] hover:-translate-y-1"
              >
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