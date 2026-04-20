'use client';

import PageHeader from '@/components/shared/PageHeader';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { Shield, Scale, Briefcase, FileText, Globe, Users } from 'lucide-react';

const areas = [
  {
    icon: <Briefcase strokeWidth={1} className="w-8 h-8" />,
    title: 'Derecho Corporativo & M&A',
    subtitle: 'Protección patrimonial y crecimiento empresarial',
    desc: 'Asesoramos a empresas nacionales e internacionales en operaciones de fusión, adquisición y reestructuración. Diseñamos vehículos de inversión y estructuras societarias que protegen su capital y facilitan el crecimiento sostenible.',
    tags: ['Fusiones & Adquisiciones', 'Gobierno Corporativo', 'Due Diligence', 'Estructuración Societaria'],
  },
  {
    icon: <Scale strokeWidth={1} className="w-8 h-8" />,
    title: 'Litigios & Arbitraje',
    subtitle: 'Resolución estratégica de disputas complejas',
    desc: 'Representación ante tribunales ordinarios y arbitrales, nacionales e internacionales. Cada caso se prepara con la rigurosidad de quien va a juicio, buscando siempre la resolución más eficiente para nuestros clientes.',
    tags: ['Arbitraje Comercial', 'Disputas Civiles', 'Responsabilidad Civil', 'Mediación'],
  },
  {
    icon: <Shield strokeWidth={1} className="w-8 h-8" />,
    title: 'Derecho Penal Económico',
    subtitle: 'Defensa de directivos y organizaciones',
    desc: 'Protección integral para ejecutivos y empresas ante investigaciones fiscales, procesos penales y requerimientos regulatorios. Especialistas en compliance penal, lavado de activos y delitos de cuello blanco.',
    tags: ['Compliance Penal', 'Delitos Económicos', 'Cuello Blanco', 'Lavado de Activos'],
  },
  {
    icon: <Users strokeWidth={1} className="w-8 h-8" />,
    title: 'Derecho Laboral Empresarial',
    subtitle: 'Gestión preventiva del talento humano',
    desc: 'Asesoría en relaciones laborales individuales y colectivas, negociaciones sindicales, despidos y reestructuraciones de personal. Minimizamos contingencias y optimizamos la gestión del capital humano.',
    tags: ['Relaciones Laborales', 'Negociación Colectiva', 'Despidos', 'Auditoría Laboral'],
  },
  {
    icon: <FileText strokeWidth={1} className="w-8 h-8" />,
    title: 'Propiedad Intelectual',
    subtitle: 'Protección de activos intangibles',
    desc: 'Registro, defensa y monetización de marcas, patentes, derechos de autor y secretos comerciales. Protegemos los activos intangibles que generan valor diferencial para su organización.',
    tags: ['Marcas & Patentes', 'Derechos de Autor', 'Secretos Comerciales', 'Licenciamiento'],
  },
  {
    icon: <Globe strokeWidth={1} className="w-8 h-8" />,
    title: 'Derecho Digital & Tecnología',
    subtitle: 'Navegando el entorno regulatorio digital',
    desc: 'Consultoría en protección de datos personales, ciberseguridad, contratos tecnológicos y regulación de plataformas digitales. Acompañamos a empresas en su transformación digital con seguridad jurídica.',
    tags: ['Protección de Datos', 'Ciberseguridad', 'Contratos Tech', 'E-commerce'],
  },
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

      {/* Intro */}
      <section className="py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white/70 text-base lg:text-lg leading-[1.9] font-light max-w-2xl"
          >
            Nuestra práctica se organiza en seis áreas especializadas, cada una liderada por profesionales con amplia experiencia en su campo. Este enfoque nos permite ofrecer asesoría profunda y estratégica en cada materia.
          </motion.p>
        </div>
      </section>

      {/* Áreas — layout alternado: texto izq/der con separadores */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16">
          {areas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="border-t border-white/5 py-16 lg:py-20"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start ${index % 2 === 1 ? 'lg:direction-rtl' : ''}`}>
                {/* Lado izquierdo: número + icono + título */}
                <div className={`lg:col-span-5 ${index % 2 === 1 ? 'lg:col-start-8' : ''}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-gold-400/20 font-serif text-4xl font-light select-none">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div className="h-px flex-1 bg-white/5" />
                    <div className="text-gold-400/40">
                      {area.icon}
                    </div>
                  </div>

                  <h3 className="font-serif text-2xl lg:text-3xl text-white/90 mb-2">
                    {area.title}
                  </h3>
                  <p className="text-gold-400/40 text-[12px] tracking-[0.2em] uppercase font-medium">
                    {area.subtitle}
                  </p>
                </div>

                {/* Lado derecho: descripción + tags */}
                <div className={`lg:col-span-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : 'lg:col-start-7'}`}>
                  <p className="text-white/70 text-[15px] leading-[1.9] font-light mb-8">
                    {area.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {area.tags.map((tag, i) => (
                      <span key={i} className="text-white/40 text-[10px] tracking-[0.15em] uppercase border border-white/5 px-3 py-1.5">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-16 bg-navy-900/40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-white/70 text-base lg:text-lg font-light mb-8 max-w-lg mx-auto">
              ¿No encuentra su área de consulta? Contáctenos y evaluaremos su caso de forma personalizada.
            </p>
            <a
              href="https://wa.me/51962281357?text=Buenas%2C%20quisiera%20agendar%20una%20consulta%20legal."
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-9 py-4 bg-gold-400 text-navy-950 text-[13px] font-semibold uppercase tracking-[0.15em] transition-all duration-500 hover:bg-gold-300"
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
