'use client';

import PageHeader from '@/components/shared/PageHeader';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactoPage() {
  return (
    <main className="bg-navy-950 min-h-screen">
      <Navbar />
      
      {/* HEADER con imagen de biblioteca */}
      <PageHeader 
        title="Contacto" 
        subtitle="Agende su Consulta"
        image="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2000"
      />

      <section className="py-24 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* INFO DE CONTACTO */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white font-serif mb-8">Estamos listos para asistirle</h2>
            <p className="text-slate-400 mb-12 text-lg leading-relaxed">
              Póngase en contacto con nosotros para programar una reunión inicial. Nuestro equipo revisará su caso con absoluta confidencialidad.
            </p>

            <div className="space-y-10">
              <div className="flex gap-6 items-start">
                <div className="bg-navy-800 p-4 rounded-full text-gold-400 shadow-lg"><MapPin size={24} /></div>
                <div>
                  <h4 className="font-bold text-white text-xl mb-1 font-serif">Oficina Principal</h4>
                  <p className="text-slate-400">Av. Javier Prado Este 1234, Of. 501<br/>San Isidro, Lima - Perú</p>
                </div>
              </div>
              
              <div className="flex gap-6 items-start">
                <div className="bg-navy-800 p-4 rounded-full text-gold-400 shadow-lg"><Phone size={24} /></div>
                <div>
                  <h4 className="font-bold text-white text-xl mb-1 font-serif">Teléfono</h4>
                  <p className="text-slate-400">+51 (01) 234-5678</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="bg-navy-800 p-4 rounded-full text-gold-400 shadow-lg"><Mail size={24} /></div>
                <div>
                  <h4 className="font-bold text-white text-xl mb-1 font-serif">Correo Electrónico</h4>
                  <p className="text-slate-400">contacto@monteza-villegas.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* FORMULARIO */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-navy-900 p-8 md:p-12 rounded-sm border border-navy-800 shadow-2xl relative"
          >
            <h3 className="text-2xl font-bold text-white mb-8 font-serif border-l-4 border-gold-400 pl-4">Envíenos un Mensaje</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" className="w-full p-4 bg-navy-950 border border-navy-800 text-white rounded focus:border-gold-400 transition-all outline-none" placeholder="Nombre" />
                <input type="tel" className="w-full p-4 bg-navy-950 border border-navy-800 text-white rounded focus:border-gold-400 transition-all outline-none" placeholder="Teléfono" />
              </div>
              <input type="email" className="w-full p-4 bg-navy-950 border border-navy-800 text-white rounded focus:border-gold-400 transition-all outline-none" placeholder="Email" />
              
              <select className="w-full p-4 bg-navy-950 border border-navy-800 text-white rounded focus:border-gold-400 transition-all outline-none">
                <option>Derecho Corporativo</option>
                <option>Litigios</option>
                <option>Propiedad Intelectual</option>
                <option>Otro Asunto</option>
              </select>

              <textarea rows={4} className="w-full p-4 bg-navy-950 border border-navy-800 text-white rounded focus:border-gold-400 transition-all outline-none resize-none" placeholder="Mensaje..."></textarea>

              <button type="submit" className="w-full py-4 bg-gold-400 text-navy-900 font-bold rounded hover:bg-gold-500 transition-all uppercase tracking-widest text-sm shadow-lg">
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