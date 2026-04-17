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
    <div className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden bg-navy-950">
      {/* Fondo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-navy-950/75 z-10" />
        <div className="absolute inset-0 bg-linear-to-t from-navy-950 via-navy-950/40 to-navy-950/60 z-10" />
        <div className="absolute inset-0 bg-linear-to-r from-navy-950/80 via-transparent to-navy-950/60 z-10" />
        <Image src={image} alt={title} fill priority className="object-cover opacity-40" />
      </div>

      {/* Líneas decorativas */}
      <div className="absolute left-[6%] top-0 w-px h-full bg-linear-to-b from-transparent via-gold-400/10 to-transparent z-10 hidden xl:block" />

      {/* Contenido — alineado abajo */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 w-full pb-16 lg:pb-20"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="flex items-center gap-5 mb-6">
            <span className="h-px w-12 bg-gold-400/50" />
            <span className="text-gold-400/60 text-[11px] font-medium tracking-[0.35em] uppercase">{subtitle}</span>
          </div>
          <h1 className="font-serif text-[clamp(2.8rem,6vw,5.5rem)] font-normal text-white leading-[0.95]">
            {title}
          </h1>
        </div>
      </motion.div>
    </div>
  );
}
