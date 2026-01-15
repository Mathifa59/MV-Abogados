import Link from 'next/link';
import Image from 'next/image'; // <--- Importante
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
// Quitamos la importación de 'Scale' porque ya no la usamos

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-navy-800 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Columna 1: Brand con IMAGEN DEL LOGO */}
          <div>
            <div className="mb-8">
              <Image
                src="/logo2.png"
                alt="Monteza Villegas & Abogados"
                width={300}
                height={90}
                className="h-16 w-auto object-contain" // Tamaño adecuado para el footer
              />
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
            <h4 className="text-white font-bold mb-6 text-lg font-serif">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {['Inicio', 'Áreas de Práctica', 'Nuestra Firma', 'Contacto'].map((item) => (
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
            <h4 className="text-white font-bold mb-6 text-lg font-serif">Áreas Legales</h4>
            <ul className="space-y-3">
              {['Derecho Corporativo', 'Litigios & Arbitraje', 'Derecho Penal Económico', 'Propiedad Intelectual', 'Derecho Laboral'].map((item) => (
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
            <h4 className="text-white font-bold mb-6 text-lg font-serif">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-slate-400 text-sm group">
                <MapPin className="text-gold-400 shrink-0 group-hover:text-white transition-colors" size={18} />
                <span>Av. Javier Prado Este 1234, Of. 501<br/>San Isidro, Lima - Perú</span>
              </li>
              <li className="flex gap-3 text-slate-400 text-sm group">
                <Phone className="text-gold-400 shrink-0 group-hover:text-white transition-colors" size={18} />
                <span>+51 (01) 234-5678</span>
              </li>
              <li className="flex gap-3 text-slate-400 text-sm group">
                <Mail className="text-gold-400 shrink-0 group-hover:text-white transition-colors" size={18} />
                <span>contacto@monteza-villegas.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-800 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Monteza Villegas & Abogados. Todos los derechos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold-400 transition-colors">Política de Privacidad</a>
            <a href="#" className="hover:text-gold-400 transition-colors">Términos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}