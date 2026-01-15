'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  image: string;
}

export default function PageHeader({ title, subtitle, image }: PageHeaderProps) {
  return (
    <div className="relative h-[40vh] min-h-75 flex items-center justify-center overflow-hidden border-b border-navy-800 bg-navy-950">
      
      {/* 1. IMAGEN DE FONDO */}
      <div className="absolute inset-0 z-0">
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-navy-950/90 z-10" />
        <Image 
          src={image} 
          alt={title} 
          fill 
          priority
          // CAMBIO AQUÍ: Agregada la clase 'opacity-70'
          className="object-cover opacity-70"
        />
      </div>

      {/* 2. TEXTO CON SOMBRA */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-20 text-center px-6 max-w-4xl"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white font-serif mb-4 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
          {title}
        </h1>
        <div className="flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-gold-400"></span>
          <p className="text-gold-400 text-sm md:text-base uppercase tracking-widest font-bold drop-shadow-md">
            {subtitle}
          </p>
          <span className="h-px w-8 bg-gold-400"></span>
        </div>
      </motion.div>
    </div>
  );
}