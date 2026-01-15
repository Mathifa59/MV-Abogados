'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPreview() {
  return (
    <section className="py-24 bg-navy-900 overflow-hidden border-t border-navy-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Columna de Texto */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <span className="text-gold-400 font-semibold tracking-widest uppercase text-sm">Sobre Nosotros</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-8 font-serif leading-tight">
              Más que abogados, <br/>
              <span className="text-slate-400">somos sus aliados estratégicos.</span>
            </h2>
            
            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
              En Monteza Villegas & Abogados entendemos que cada caso es único. Fundada por <strong>Americo Monteza</strong>, nuestra firma se ha consolidado por ofrecer soluciones legales innovadoras con un enfoque tradicional de excelencia y ética.
            </p>

            <ul className="space-y-4 mb-10">
              {['Atención personalizada 24/7', 'Estrategias legales a medida', 'Historial comprobado de éxito'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="text-gold-400" size={20} />
                  {item}
                </li>
              ))}
            </ul>

            <Link href="/nosotros" className="inline-flex items-center gap-2 text-gold-400 font-bold hover:text-white transition-colors group">
              Conoce a nuestro equipo
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </motion.div>

          {/* Columna de Imagen */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full relative"
          >
            <div className="relative h-150 w-full bg-navy-800 rounded-sm overflow-hidden border border-navy-800 group">
              {/* FOTO ACTUALIZADA AQUÍ TAMBIÉN */}
              <Image 
                src="/americo.jpg" 
                alt="Americo Monteza"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Tarjeta flotante */}
              <div className="absolute bottom-8 left-8 right-8 bg-navy-950/90 backdrop-blur-md p-6 border-l-4 border-gold-400 shadow-xl">
                <p className="text-white font-serif italic text-lg">
                  &quot;La justicia no consiste en dar a cada uno lo suyo, sino en saber reclamarlo con inteligencia.&quot;
                </p>
                <p className="text-gold-400 mt-2 font-bold text-sm">— Americo Monteza, Socio Fundador</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}