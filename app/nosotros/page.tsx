'use client';

import PageHeader from '@/components/shared/PageHeader';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function NosotrosPage() {
  return (
    <main className="bg-navy-950 min-h-screen">
      <Navbar />
      
      <PageHeader 
        title="Nuestra Firma" 
        subtitle="Trayectoria y Valores"
        image="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2000"
      />

      {/* Historia / Misión */}
      <section className="py-24 container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <span className="text-gold-400 font-bold tracking-widest uppercase text-sm mb-4 block">Nuestra Visión</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white font-serif mb-8 leading-tight">Excelencia Legal desde el Primer Día</h2>
          <p className="text-xl text-slate-300 leading-relaxed font-light">
            Fundada bajo la visión de <strong>Americo Monteza</strong>, nuestra firma nació con un propósito claro: redefinir la práctica legal combinando el rigor académico tradicional con estrategias innovadoras. No solo interpretamos la ley, <span className="text-gold-400">diseñamos soluciones</span>.
          </p>
        </motion.div>
      </section>

      {/* El Socio Fundador */}
      <section className="py-24 bg-navy-900 border-y border-navy-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto">
            
            {/* FOTO DEL FUNDADOR */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 relative h-125 md:h-150"
            >
              <div className="absolute inset-0 border-2 border-gold-400 translate-x-4 translate-y-4 rounded-sm" />
              {/* AQUÍ USAMOS TU FOTO LOCAL */}
              <Image 
                src="/americo.jpg" // <--- Asegúrate que la foto se llame así en la carpeta public
                alt="Americo Monteza - Socio Fundador"
                fill
                className="object-cover rounded-sm relative z-10 shadow-2xl"
              />
            </motion.div>

            {/* TEXTO DEL FUNDADOR */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2"
            >
              <span className="text-gold-400 font-bold tracking-widest text-xs uppercase bg-navy-800 px-3 py-1 rounded-full">Socio Fundador</span>
              
              {/* NOMBRE ACTUALIZADO */}
              <h2 className="text-4xl md:text-5xl font-bold text-white font-serif mb-6 mt-6">Americo Monteza</h2>
              
              <blockquote className="text-slate-300 mb-8 italic border-l-2 border-gold-400 pl-6 text-lg">
                &quot;La defensa de los intereses de nuestros clientes requiere más que conocimiento legal; requiere visión estratégica, carácter y una ética inquebrantable.&quot;
              </blockquote>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-gold-400 rounded-full" />
                  Especialista en Derecho Penal y Corporativo.
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-gold-400 rounded-full" />
                  Enfoque en resultados y prevención de conflictos.
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}