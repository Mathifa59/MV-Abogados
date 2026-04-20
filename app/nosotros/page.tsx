'use client';

import PageHeader from '@/components/shared/PageHeader';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';

const values = [
  { num: '01', title: 'Rigor Académico', desc: 'Fundamentación jurídica sólida respaldada por formación continua.' },
  { num: '02', title: 'Visión Estratégica', desc: 'Cada caso se aborda con perspectiva integral y orientación a resultados.' },
  { num: '03', title: 'Ética Inquebrantable', desc: 'La integridad profesional como pilar de cada decisión y acción.' },
];

export default function NosotrosPage() {
  return (
    <main className="bg-navy-950 min-h-screen">
      <Navbar />
      <PageHeader
        title="La Firma"
        subtitle="Trayectoria y Valores"
        image="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2000"
      />

      {/* Visión — layout editorial con texto grande */}
      <section className="py-32 lg:py-44 relative">
        {/* Texto fantasma decorativo */}
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[clamp(6rem,18vw,16rem)] text-white/1 leading-none select-none pointer-events-none whitespace-nowrap">
          Excelencia
        </span>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5"
            >
              <span className="text-gold-400/50 text-[11px] font-medium tracking-[0.35em] uppercase">Nuestra Visión</span>
              <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-normal text-white mt-6 leading-[1.05]">
                Excelencia Legal
                <br /><span className="text-white/50">desde el Primer Día</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-6 lg:col-start-7 flex items-end"
            >
              <p className="text-white/70 text-base lg:text-lg leading-[1.9] font-light">
                Fundada bajo la visión de <span className="text-white/70">Americo Monteza</span>, nuestra firma nació con un propósito claro: redefinir la práctica legal combinando el rigor académico tradicional con estrategias innovadoras. No solo interpretamos la ley, <span className="text-gold-400/70 italic">diseñamos soluciones</span>.
              </p>
            </motion.div>
          </div>

          {/* Valores — horizontal con números */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mt-28 lg:mt-36">
            {values.map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="py-10 lg:py-0 lg:pr-12 border-b md:border-b-0 md:border-r border-white/4 last:border-0 group"
              >
                <span className="text-gold-400/15 font-serif text-5xl font-light leading-none mb-6 block group-hover:text-gold-400/30 transition-colors duration-700 select-none">{v.num}</span>
                <h3 className="text-white/80 text-lg font-medium font-serif mb-3">{v.title}</h3>
                <p className="text-white/60 text-[13px] leading-[1.8] font-light">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fundador — full bleed split */}
      <section className="relative bg-navy-900 overflow-hidden">

        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[85vh]">
          {/* Foto — full height */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="relative min-h-[500px] lg:min-h-0 order-2 lg:order-1"
          >
            <Image src="/americo.jpg" alt="Americo Monteza — Socio Fundador" fill className="object-cover" />
            <div className="absolute inset-0 bg-linear-to-l from-navy-900 via-navy-900/30 to-transparent hidden lg:block" />
            <div className="absolute inset-0 bg-linear-to-t from-navy-900/80 via-transparent to-transparent lg:hidden" />
          </motion.div>

          {/* Texto */}
          <div className="flex items-center py-28 lg:py-0 order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-xl mx-auto lg:mr-auto lg:ml-16 xl:ml-24 px-6 lg:px-0"
            >
              <span className="text-gold-400/50 text-[11px] font-medium tracking-[0.35em] uppercase">Socio Fundador</span>
              <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-normal text-white mt-6 mb-3 leading-none">
                Americo Monteza
              </h2>
              <p className="text-gold-400/40 text-[12px] tracking-[0.25em] uppercase font-medium mb-12">Director &amp; Socio Fundador</p>

              <blockquote className="border-l border-gold-400/30 pl-8 mb-12">
                <p className="text-white/50 font-serif text-xl lg:text-2xl italic leading-[1.6]">
                  &ldquo;La defensa de los intereses de nuestros clientes requiere más que conocimiento legal; requiere visión estratégica, carácter y una ética inquebrantable.&rdquo;
                </p>
              </blockquote>

              <p className="text-white/60 text-[15px] leading-[1.9] font-light mb-10">
                Con una trayectoria consolidada en derecho penal y corporativo, fundó la firma con la convicción de que la práctica legal debe combinar rigor intelectual con un compromiso genuino hacia cada cliente.
              </p>

              <div className="flex gap-12">
                <div>
                  <p className="text-white/40 text-[10px] tracking-[0.3em] uppercase mb-2">Especialización</p>
                  <p className="text-white/60 text-sm font-light">Derecho Penal y Corporativo</p>
                </div>
                <div>
                  <p className="text-white/40 text-[10px] tracking-[0.3em] uppercase mb-2">Enfoque</p>
                  <p className="text-white/60 text-sm font-light">Resultados y prevención</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
