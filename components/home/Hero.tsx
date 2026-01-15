'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    // CAMBIO: min-h-screen permite que el div crezca si el contenido en movil es muy alto
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-navy-950">
      
      {/* FONDO */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-navy-950/85 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2000" 
          alt="Biblioteca Legal Monteza Villegas"
          fill
          priority
          className="object-cover opacity-70"
        />
      </div>

      {/* CONTENIDO RESPONSIVE */}
      <div className="relative z-20 container mx-auto px-6 pt-32 pb-20 md:pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Etiqueta adaptativa */}
          <div className="inline-flex flex-wrap items-center gap-2 px-3 py-2 rounded-sm bg-navy-900/50 border border-gold-400/30 text-gold-400 text-[10px] md:text-sm mb-6 md:mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse shrink-0" />
            <span className="font-bold tracking-widest uppercase wrap-break-word">Especialistas en Derecho Corporativo y Penal</span>
          </div>
          
          {/* Título que escala: text-4xl en movil -> text-7xl en PC */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-6 drop-shadow-lg font-serif">
            Defendemos tu legado, <br />
            <span className="text-gold-400">
              protegemos tu futuro.
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-slate-200 mb-8 md:mb-10 max-w-xl leading-relaxed border-l-2 border-gold-400 pl-4 md:pl-6 drop-shadow-md">
            En <strong>Monteza Villegas & Abogados</strong>, la excelencia no es una opción, es nuestro estándar. Soluciones legales estratégicas para casos complejos.
          </p>

          {/* Botones apilados en movil (flex-col), lado a lado en PC (sm:flex-row) */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link 
              href="/contacto" 
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-gold-400 hover:bg-gold-500 text-navy-900 rounded-sm font-bold text-lg transition-all shadow-[0_0_20px_rgba(207,166,87,0.3)] hover:shadow-[0_0_30px_rgba(207,166,87,0.5)]"
            >
              Agendar Consulta
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            
            <Link 
              href="/areas" 
              className="group flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-slate-400 text-white hover:bg-white/10 rounded-sm font-semibold text-lg transition-all backdrop-blur-sm"
            >
              Nuestras Áreas
              <ChevronRight className="text-gold-400 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}