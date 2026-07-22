'use client';

import PageHeader from '@/components/shared/PageHeader';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { team } from '@/lib/team';

const WHATSAPP = 'https://wa.me/51962281357?text=Buenas%2C%20quisiera%20agendar%20una%20consulta%20legal.';

export default function EquipoPage() {
  return (
    <main className="bg-ivory min-h-screen">
      <Navbar />
      <PageHeader title="Nuestro Equipo" subtitle="Los Pilares de la Firma" />

      {/* Intro */}
      <section className="py-20 lg:py-24 relative overflow-hidden bg-grain bg-columns bg-linear-to-b from-mist-deep to-mist">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gold-400/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 relative">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-ink text-base lg:text-lg leading-[1.9] max-w-2xl"
          >
            Así como las columnas sostienen un palacio, cada integrante sostiene la promesa de la firma: confianza, compromiso y profesionalismo. Conozca a los profesionales que defenderán sus intereses.
          </motion.p>
        </div>
      </section>

      {/* Integrantes — tarjetas horizontales amplias */}
      <section className="py-20 lg:py-28 relative overflow-hidden bg-grain bg-linear-to-b from-mist via-ivory to-mist">
        <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-gold-400/15 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 -right-40 w-[450px] h-[450px] bg-navy-700/20 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {team.map((member, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 2) * 0.12 }}
                className="group grid grid-cols-1 sm:grid-cols-5 bg-paper/90 backdrop-blur-sm border border-navy-900/15 hover:border-gold-500/50 hover:shadow-[0_20px_60px_rgba(1,38,65,0.14)] hover:-translate-y-1 transition-all duration-700 overflow-hidden"
              >
                {/* Foto */}
                <div className="relative sm:col-span-2 aspect-4/5 sm:aspect-auto sm:min-h-[320px] bg-navy-900 overflow-hidden gilded-frame">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 40vw"
                    className="object-cover grayscale-[0.25] group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-1000"
                  />
                </div>

                {/* Texto */}
                <div className="sm:col-span-3 p-8 lg:p-10 flex flex-col justify-center relative">
                  {/* Capitel dorado */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-gold-500/70 via-gold-400 to-gold-500/70 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />

                  <span className="text-gold-500 font-serif text-3xl font-medium select-none mb-4">
                    {['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'][index]}
                  </span>
                  <h2 className="font-serif text-2xl lg:text-3xl text-navy-900 font-medium">{member.name}</h2>
                  <p className="text-gold-700 text-[11px] tracking-[0.25em] uppercase font-semibold mt-2 mb-5">
                    {member.role} · {member.area}
                  </p>
                  <p className="text-ink/90 text-[14px] leading-[1.85]">
                    {member.bio}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-navy-900 relative overflow-hidden bg-grain bg-columns-dark">
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gold-400/50 to-transparent" />
        <div className="aurora w-[500px] h-[300px] bg-gold-400/10 top-0 left-1/2 -translate-x-1/2" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-white/85 text-base lg:text-lg font-light mb-8 max-w-lg mx-auto">
              Nuestro equipo está listo para escucharle. Agende una primera consulta sin compromiso.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-9 py-4 bg-gold-400 text-navy-950 text-[13px] font-semibold uppercase tracking-[0.15em] transition-all duration-500 hover:bg-gold-300"
            >
              Consultar por WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
