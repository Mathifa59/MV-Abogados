'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { team } from '@/lib/team';

export default function Team() {
  return (
    <section id="equipo" className="section-view bg-grain bg-linear-to-b from-ivory via-paper to-gold-300/20 scroll-mt-20">
      {/* Atmósfera */}
      <div className="absolute -top-40 left-1/3 w-[500px] h-[500px] bg-gold-400/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-linear-to-r from-transparent via-gold-500/60 to-transparent" />

      {/* Isotipo fantasma tras el encabezado */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[380px] h-[280px] opacity-[0.05] pointer-events-none select-none">
        <Image src="/brand/logo-v-negro.png" alt="" fill className="object-contain" />
      </div>

      <div className="relative z-10 w-full py-24 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14 lg:mb-16 max-w-2xl mx-auto"
          >
            <span className="text-gold-700 text-[11px] font-semibold tracking-[0.35em] uppercase">Nuestro Equipo</span>
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,4rem)] font-medium text-navy-900 mt-5 leading-[1.05]">
              Los pilares
              <br />
              <span className="text-navy-700 italic font-normal">de la firma</span>
            </h2>
            <p className="text-ink text-[15px] leading-[1.8] mt-6">
              Profesionales comprometidos con la excelencia jurídica. Cada integrante aporta especialización y criterio a la defensa de sus intereses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {team.map((member, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                className="group bg-paper/80 backdrop-blur-sm border border-navy-900/10 p-4 pb-6 hover:border-gold-500/40 hover:shadow-[0_20px_50px_rgba(1,38,65,0.12)] transition-all duration-700"
              >
                {/* Foto con marco dorado interior */}
                <div className="relative aspect-4/5 w-full bg-navy-900 overflow-hidden gilded-frame mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover grayscale-[0.25] group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-navy-950/10 group-hover:bg-transparent transition-colors duration-700" />
                </div>

                <h3 className="font-serif text-xl text-navy-900 font-medium">{member.name}</h3>
                <p className="text-gold-700 text-[10px] tracking-[0.25em] uppercase font-semibold mt-1.5">
                  {member.role} · {member.area}
                </p>
                <p className="text-ink/90 text-[13px] leading-[1.75] mt-4">
                  {member.bio}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
