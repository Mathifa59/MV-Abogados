'use client';

import { motion } from 'framer-motion';

const WHATSAPP = 'https://wa.me/51962281357?text=Buenas%2C%20quisiera%20agendar%20una%20consulta%20legal.';

export default function WhatsAppButton() {
  return (
    <motion.a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.5, ease: 'easeOut' }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="group fixed bottom-6 right-6 z-50 flex items-center gap-3"
    >
      {/* Etiqueta que aparece al pasar el mouse */}
      <span className="hidden sm:block max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-out">
        <span className="block whitespace-nowrap bg-navy-900 text-white text-[12px] font-medium tracking-[0.08em] px-4 py-2.5 rounded-full shadow-lg mr-1">
          ¿Necesita asesoría legal?
        </span>
      </span>

      <span className="wa-pulse relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-[0_8px_24px_rgba(37,211,102,0.4)]">
        {/* Glifo oficial de WhatsApp */}
        <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white" aria-hidden="true">
          <path d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.59 4.46 1.71 6.4L3.2 28.8l6.58-1.67a12.74 12.74 0 0 0 6.22 1.62h.01c7.06 0 12.79-5.74 12.79-12.8 0-3.42-1.33-6.63-3.75-9.05a12.72 12.72 0 0 0-9.05-3.7zm0 23.39h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-4.02 1.02 1.07-3.92-.25-.4a10.58 10.58 0 0 1-1.62-5.64c0-5.87 4.78-10.64 10.66-10.64 2.84 0 5.51 1.11 7.52 3.12a10.57 10.57 0 0 1 3.11 7.53c0 5.87-4.78 10.64-10.65 10.64zm5.84-7.97c-.32-.16-1.89-.93-2.19-1.04-.29-.11-.5-.16-.72.16-.21.32-.82 1.04-1.01 1.25-.18.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55l-.61-.01c-.21 0-.56.08-.85.4-.29.32-1.12 1.09-1.12 2.66 0 1.57 1.14 3.08 1.3 3.29.16.21 2.25 3.44 5.45 4.82.76.33 1.36.53 1.82.67.77.24 1.46.21 2.01.13.61-.09 1.89-.77 2.15-1.52.27-.75.27-1.38.19-1.52-.08-.13-.29-.21-.61-.37z" />
        </svg>
      </span>
    </motion.a>
  );
}
