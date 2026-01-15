'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="py-20 bg-linear-to-r from-gold-600 to-gold-400 relative overflow-hidden">
      {/* Patrón decorativo de fondo */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl text-navy-900"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
              ¿Tiene un caso complejo? Hablemos hoy.
            </h2>
            <p className="text-navy-900/80 text-lg font-medium">
              La primera consulta estratégica es gratuita. Permítanos evaluar su situación y ofrecerle el mejor camino legal.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link 
              href="/contacto" 
              className="flex items-center justify-center gap-2 px-8 py-4 bg-navy-900 text-white rounded font-bold hover:bg-navy-800 transition-all shadow-xl"
            >
              Contactar Ahora
              <ArrowRight size={20} />
            </Link>
            <a 
              href="tel:+51999999999" 
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white/20 border border-navy-900 text-navy-900 rounded font-bold hover:bg-white/30 transition-all"
            >
              <Phone size={20} />
              Llamar
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}