import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#a646c6] text-white text-sm py-6 mt-auto">
      <div className="container mx-auto flex flex-col items-center space-y-2 md:flex-row md:justify-center md:space-x-8 md:space-y-0">
        <a href="#" className="hover:underline">Términos y condiciones</a>
        <a href="#" className="hover:underline">Aviso de Privacidad</a>
        <a href="#" className="hover:underline text-center">Tus opciones de privacidad de los anuncios</a>
        <a href="#" className="hover:underline">Libro de quejas</a>
        <a href="#" className="hover:underline">Defensa del consumidor</a>
      </div>
      <div className="text-center mt-2 text-sm text-white/70">
        © 2024–2025 MercadoThiago, Inc. o sus afiliados
      </div>
    </footer>
  );
};

export default Footer;