'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  image?: string;
}

export default function PageHeader({ title, subtitle, image = '/hero-bg.jpg' }: PageHeaderProps) {
  return (
    <div className="relative min-h-[420px] h-[52vh] flex items-end overflow-hidden bg-navy-900 bg-grain">
      {/* Fondo */}
      <div className="absolute inset-0 z-0">
        <Image src={image} alt={title} fill priority className="object-cover opacity-25" />
        <div className="absolute inset-0 bg-linear-to-r from-navy-900 via-navy-900/70 to-navy-900/40 z-10" />
        <div className="absolute inset-0 bg-linear-to-t from-navy-950 via-transparent to-navy-950/50 z-10" />
      </div>

      {/* Aurora dorada */}
      <div className="aurora w-[450px] h-[450px] bg-gold-400/12 -top-32 -left-32 z-10" />

      {/* Isotipo dorado de fondo */}
      <div className="absolute right-[5%] bottom-[10%] w-[260px] h-[260px] opacity-[0.1] z-10 pointer-events-none select-none hidden lg:block">
        <Image src="/brand/logo-v-dorado.png" alt="" fill className="object-contain" />
      </div>

      {/* Marco dorado interior — motivo del manual */}
      <div className="absolute inset-4 lg:inset-6 border border-gold-400/25 z-10 pointer-events-none hidden md:block" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-20 w-full pb-16 lg:pb-20"
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <div className="flex items-center gap-5 mb-6">
            <span className="h-px w-12 bg-gold-400/70" />
            <span className="text-gold-400 text-[11px] font-medium tracking-[0.35em] uppercase">{subtitle}</span>
          </div>
          <h1 className="font-serif text-[clamp(2.2rem,4.5vw,4.2rem)] font-medium text-white leading-[1.02]">
            {title}
          </h1>
        </div>
      </motion.div>
    </div>
  );
}
