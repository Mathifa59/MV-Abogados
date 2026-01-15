'use client';

import PageHeader from '@/components/shared/PageHeader';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Shield, Scale, Briefcase, FileText, Globe, Users } from 'lucide-react';

const areas = [
  {
    title: "Derecho Corporativo & M&A",
    desc: "Asesoramiento estratégico en fusiones, adquisiciones y reestructuraciones empresariales. Diseñamos vehículos de inversión para proteger su capital.",
    icon: <Briefcase className="w-10 h-10 text-gold-400" />
  },
  {
    title: "Litigios & Arbitraje",
    desc: "Defensa legal de alto nivel en disputas civiles y comerciales. Representación ante tribunales arbitrales nacionales e internacionales.",
    icon: <Scale className="w-10 h-10 text-gold-400" />
  },
  {
    title: "Derecho Penal Económico",
    desc: "Protección integral para directivos y empresas ante investigaciones fiscales. Especialistas en compliance penal y delitos de cuello blanco.",
    icon: <Shield className="w-10 h-10 text-gold-400" />
  },
  {
    title: "Derecho Laboral Empresarial",
    desc: "Gestión preventiva de relaciones laborales y negociaciones colectivas para minimizar contingencias y optimizar el talento humano.",
    icon: <Users className="w-10 h-10 text-gold-400" />
  },
  {
    title: "Propiedad Intelectual",
    desc: "Registro y defensa de marcas, patentes y derechos de autor. Protegemos los activos intangibles más valiosos de su organización.",
    icon: <FileText className="w-10 h-10 text-gold-400" />
  },
  {
    title: "Derecho Digital",
    desc: "Consultoría en normativas de privacidad, ciberseguridad y contratos tecnológicos en un entorno digital en constante cambio.",
    icon: <Globe className="w-10 h-10 text-gold-400" />
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function AreasPage() {
  return (
    <main className="bg-navy-950 min-h-screen">
      <Navbar />
      
      {/* CAMBIO: Imagen actualizada a Biblioteca Legal */}
      <PageHeader 
        title="Áreas de Práctica" 
        subtitle="Experiencia Jurídica Especializada"
        image="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2000"
      />
      
      <section className="py-24 container mx-auto px-6">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {areas.map((area, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="flex flex-col gap-4 p-8 bg-navy-900 border border-navy-800 hover:border-gold-400/50 rounded-sm hover:shadow-[0_0_30px_rgba(207,166,87,0.1)] transition-all duration-300 group"
            >
              <div className="p-3 bg-navy-800 w-fit rounded group-hover:bg-navy-950 transition-colors border border-transparent group-hover:border-gold-400/30">
                {area.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white font-serif mb-3 group-hover:text-gold-400 transition-colors">{area.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm md:text-base">{area.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
      <Footer />
    </main>
  );
}