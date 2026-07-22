import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

const WHATSAPP = 'https://wa.me/51962281357?text=Buenas%2C%20quisiera%20agendar%20una%20consulta%20legal.';

export default function Footer() {
  return (
    <footer className="bg-navy-950 pt-20 pb-10 relative overflow-hidden bg-grain">
      {/* Filo dorado superior — motivo del manual */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-gold-400/60 to-transparent" />
      {/* Brillo dorado sutil */}
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gold-400/[0.06] rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 mb-16">
          <div>
            <Image src="/brand/logo-h-dorado.png" alt="Monteza Villegas & Abogados" width={240} height={84} className="h-14 w-auto object-contain mb-6" />
            <p className="text-white/60 text-sm leading-relaxed font-light">
              Confianza, compromiso y profesionalismo. Defensa rigurosa de los intereses de nuestros clientes desde el Perú.
            </p>
          </div>
          <div>
            <h4 className="text-gold-400 text-[11px] tracking-[0.25em] uppercase font-semibold mb-6">Navegación</h4>
            <ul className="space-y-3">
              {[
                { n: 'Inicio', h: '/' },
                { n: 'Áreas de Práctica', h: '/areas' },
                { n: 'La Firma', h: '/nosotros' },
                { n: 'Equipo', h: '/equipo' },
                { n: 'Contacto', h: '/contacto' },
              ].map((l) => (
                <li key={l.n}>
                  <Link href={l.h} className="text-white/60 text-sm hover:text-gold-400 transition-colors duration-300">
                    {l.n}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-gold-400 text-[11px] tracking-[0.25em] uppercase font-semibold mb-6">Áreas Legales</h4>
            <ul className="space-y-3">
              {['Derecho Corporativo', 'Defensa Penal', 'Litigios & Arbitraje', 'Derecho Laboral', 'Propiedad Intelectual', 'Derecho Digital'].map((a) => (
                <li key={a}>
                  <Link href="/areas" className="text-white/60 text-sm hover:text-gold-400 transition-colors duration-300">
                    {a}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-gold-400 text-[11px] tracking-[0.25em] uppercase font-semibold mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-white/60 text-sm">
                <MapPin className="text-gold-400/70 shrink-0 mt-0.5" size={16} strokeWidth={1.5} />
                <span>Av. Javier Prado Este 1234, Of. 501<br />San Isidro, Lima — Perú</span>
              </li>
              <li className="flex gap-3 text-white/60 text-sm">
                <Phone className="text-gold-400/70 shrink-0" size={16} strokeWidth={1.5} />
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="hover:text-gold-400 transition-colors">
                  +51 962 281 357
                </a>
              </li>
              <li className="flex gap-3 text-white/60 text-sm">
                <Mail className="text-gold-400/70 shrink-0" size={16} strokeWidth={1.5} />
                <span>contacto@monteza-villegas.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/45 text-xs tracking-wide">
            &copy; {new Date().getFullYear()} Monteza Villegas &amp; Abogados. Todos los derechos reservados.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-white/45 text-xs hover:text-gold-400/80 transition-colors duration-300">Política de Privacidad</a>
            <a href="#" className="text-white/45 text-xs hover:text-gold-400/80 transition-colors duration-300">Términos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
