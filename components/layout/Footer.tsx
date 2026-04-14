import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-navy-800/50 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 mb-16">
          <div>
            <Image src="/logo2.png" alt="Monteza Villegas & Abogados" width={240} height={70} className="h-12 w-auto object-contain mb-6" />
            <p className="text-slate-500 text-sm leading-relaxed font-light">
              Compromiso con la excelencia jurídica, la ética profesional y la defensa rigurosa de los intereses de nuestros clientes.
            </p>
          </div>
          <div>
            <h4 className="text-slate-400 text-[11px] tracking-[0.25em] uppercase font-semibold mb-6">Navegación</h4>
            <ul className="space-y-3">
              {[{ n: 'Inicio', h: '/' }, { n: 'Áreas de Práctica', h: '/areas' }, { n: 'La Firma', h: '/nosotros' }, { n: 'Contacto', h: '/contacto' }].map((l) => (
                <li key={l.n}><Link href={l.h} className="text-slate-500 text-sm hover:text-gold-400 transition-colors duration-300">{l.n}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-slate-400 text-[11px] tracking-[0.25em] uppercase font-semibold mb-6">Áreas Legales</h4>
            <ul className="space-y-3">
              {['Derecho Corporativo', 'Defensa Penal', 'Litigios Civiles', 'Derecho Laboral', 'Derecho de Familia', 'Derecho Administrativo'].map((a) => (
                <li key={a}><Link href="/areas" className="text-slate-500 text-sm hover:text-gold-400 transition-colors duration-300">{a}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-slate-400 text-[11px] tracking-[0.25em] uppercase font-semibold mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-slate-500 text-sm"><MapPin className="text-gold-400/50 shrink-0 mt-0.5" size={16} strokeWidth={1.5} /><span>Av. Javier Prado Este 1234, Of. 501<br />San Isidro, Lima — Perú</span></li>
              <li className="flex gap-3 text-slate-500 text-sm"><Phone className="text-gold-400/50 shrink-0" size={16} strokeWidth={1.5} /><span>+51 (01) 234-5678</span></li>
              <li className="flex gap-3 text-slate-500 text-sm"><Mail className="text-gold-400/50 shrink-0" size={16} strokeWidth={1.5} /><span>contacto@monteza-villegas.com</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-navy-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 text-xs tracking-wide">&copy; {new Date().getFullYear()} Monteza Villegas &amp; Abogados. Todos los derechos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="text-slate-600 text-xs hover:text-gold-400/60 transition-colors duration-300">Política de Privacidad</a>
            <a href="#" className="text-slate-600 text-xs hover:text-gold-400/60 transition-colors duration-300">Términos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
