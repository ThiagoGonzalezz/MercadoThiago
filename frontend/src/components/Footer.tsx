import React from 'react';

const Footer = () => {
  return (
    <footer style={{ background: 'linear-gradient(to right, #6b21a8, #9333ea)' }} className="text-white text-center py-3">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-center gap-3 mb-2 small">
          <span>Términos y condiciones</span>
          <span>Aviso de Privacidad</span>
          <span>Tus opciones de privacidad de los anuncios</span>
          <span>Libro de quejas</span>
          <span>Defensa del consumidor</span>
        </div>
        <div className="text-white-50 small">
          © 2024-2025 MercadoThiago, Inc. o sus afiliados
        </div>
      </div>
    </footer>
  );
};

export default Footer;