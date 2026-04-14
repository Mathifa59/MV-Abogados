'use client';

import PageHeader from '@/components/shared/PageHeader';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Shield, Scale, Briefcase, FileText, Globe, Users, ArrowUpRight } from 'lucide-react';

const areas = [
  { title: 'Derecho Corporativo & M&A', desc: 'Asesoramiento estratégico en fusiones, adquisiciones y reestructuraciones empresariales. Diseñamos vehículos de inversión para proteger su capital.', icon: <Briefcase strokeWidth={1} className="w-6 h-6" /> },
  { title: 'Litigios & Arbitraje', desc: 'Defensa legal de alto nivel en disputas civiles y comerciales. Representación ante tribunales arbitrales nacionales e internacionales.', icon: <Scale strokeWidth={1} className="w-6 h-6" /> },
  { title: 'Derecho Penal Económico', desc: 'Protección integral para directivos y empresas ante investigaciones fiscales. Especialistas en compliance penal y delitos de cuello blanco.', icon: <Shield strokeWidth={1} className="w-6 h-6" /> },
  { title: 'Derecho Laboral Empresarial', desc: 'Gestión preventiva de relaciones laborales y negociaciones colectivas para minimizar contingencias y optimizar el talento humano.', icon: <Users strokeWidth={1} className="w-6 h-6" /> },
  { title: 'Propiedad Intelectual', desc: 'Registro y defensa de marcas, patentes y derechos de autor. Protegemos los activos intangibles más valiosos de su organización.', icon: <FileText strokeWidth={1} className="w-6 h-6" /> },
  { title: 'Derecho Digital', desc: 'Consultoría en normativas de privacidad, ciberseguridad y contratos tecnológicos en un entorno digital en constante cambio.', icon: <Globe strokeWidth={1} className="w-6 h-6" /> },
];

export default function AreasPage() {
  return (
    <main className="bg-navy-950 min-h-screen">
      <Navbar />
      <PageHeader
        title="Áreas de Práctica"
        subtitle="Experiencia Jurídica Especializada"
        image="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2000"
      />

      <section className="py-32 lg:py-44">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          {/* Lista editorial */}
          <div className="space-y-0">
            {areas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="group border-t border-white/[0.05] first:border-t-0"
              >
                <div className="grid grid-cols-12 items-center py-10 lg:py-14 gap-4 lg:gap-8 cursor-default">
                  {/* Número */}
                  <div className="col-span-2 lg:col-span-1">
                    <span className="text-gold-400/20 font-serif text-3xl lg:text-4xl font-light group-hover:text-gold-400/50 transition-colors duration-700 select-none">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Icono + Título */}
                  <div className="col-span-10 lg:col-span-4 flex items-center gap-5">
                    <div className="text-gold-400/30 group-hover:text-gold-400/80 transition-colors duration-700 hidden sm:block">
                      {area.icon}
                    </div>
                    <h3 className="font-serif text-xl lg:text-2xl text-white/80 group-hover:text-gold-400 transition-colors duration-500">
                      {area.title}
                    </h3>
                  </div>

                  {/* Descripción */}
                  <div className="col-span-12 lg:col-span-5 lg:col-start-6">
                    <p className="text-white/25 text-[13px] lg:text-sm leading-[1.8] font-light pl-0 lg:pl-4">
                      {area.desc}
                    </p>
                  </div>

                  {/* Flecha */}
                  <div className="hidden lg:flex col-span-2 justify-end">
                    <div className="w-10 h-10 rounded-full border border-white/[0.05] flex items-center justify-center group-hover:border-gold-400/30 group-hover:bg-gold-400/5 transition-all duration-500">
                      <ArrowUpRight size={14} className="text-white/15 group-hover:text-gold-400/70 transition-colors duration-500" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
