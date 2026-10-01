import React from 'react';
import WhatsappIcon from './icons/WhatsappIcon';

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/573001234567?text=Hola%20Seamos%20Genios,%20quiero%20informacion%20sobre%20los%20simulacros%20y%20programas"
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp"
      aria-label="Escríbenos por WhatsApp"
    >
      <WhatsappIcon width={22} height={22} color="#FFFFFF" />
      <span>¿Dudas? Chat en Vivo</span>
    </a>
  );
}
