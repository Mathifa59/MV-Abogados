import Link from 'next/link';
import { Scale, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-slate-800 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Columna 1: Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-gold-400 p-1.5 rounded-sm text-navy-900">
                <Scale size={20} />
              </div>
              <span className="text-xl font-bold text-white tracking-wide font-serif">
                MV<span className="text-gold-400">&</span>ABOGADOS
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Compromiso, excelencia y resultados. Protegemos sus intereses con la máxima rigurosidad jurídica y ética profesional.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-slate-400 hover:text-gold-400 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-gold-400 transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-gold-400 transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {['Inicio', 'Áreas de Práctica', 'Nuestro Equipo', 'Blog Legal', 'Contacto'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-slate-400 hover:text-gold-400 text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Áreas */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Áreas Legales</h4>
            <ul className="space-y-3">
              {['Derecho Corporativo', 'Litigios Penales', 'Derecho Civil', 'Propiedad Intelectual', 'Laboral'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-slate-400 hover:text-gold-400 text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-slate-400 text-sm">
                <MapPin className="text-gold-400 shrink-0" size={18} />
                <span>Av. Javier Prado Este 1234, Oficina 501<br/>San Isidro, Lima - Perú</span>
              </li>
              <li className="flex gap-3 text-slate-400 text-sm">
                <Phone className="text-gold-400 shrink-0" size={18} />
                <span>+51 (01) 234-5678</span>
              </li>
              <li className="flex gap-3 text-slate-400 text-sm">
                <Mail className="text-gold-400 shrink-0" size={18} />
                <span>contacto@mvabogados.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} MV& Abogados. Todos los derechos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold-400">Política de Privacidad</a>
            <a href="#" className="hover:text-gold-400">Términos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}