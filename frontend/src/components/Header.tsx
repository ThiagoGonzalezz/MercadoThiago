import {
  ShoppingCartIcon,
  BellIcon,
  SearchIcon,
  MapPinIcon,
  MessageCircleIcon,
} from 'lucide-react';
import React from 'react';

function Header() {
  return (
    <header className="text-white shadow" style={{ background: 'linear-gradient(to right, #A248C3, #A248C3)' }}>
      {/* Top bar */}
      <div className="container-fluid py-2 px-4 d-flex justify-content-between align-items-center">
        {/* Logo + Marca */}
        <div className="d-flex align-items-center gap-2">
          <img src="/logo512-borde-blanco.png" alt="Logo" style={{ width: '40px', height: '40px' }} />
          <h1 className="fs-5 fw-bold mb-0">MercadoThiago</h1>
        </div>

        {/* Search */}
        <div className="flex-grow-1 mx-4" style={{ maxWidth: '600px' }}>
          <div className="input-group shadow-sm rounded-pill overflow-hidden">
            <input
              type="text"
              className="form-control border-0 text-dark px-4 py-2"
              placeholder="Buscar productos, marcas y más..."
              style={{ borderRadius: 0 }}
            />
            <button className="btn btn-warning px-4 rounded-0">
              <SearchIcon size={20} className="text-dark" />
            </button>
          </div>
        </div>

        {/* Info usuario */}
        <div className="d-flex align-items-start gap-4 text-white">
          <div className="d-flex flex-column text-start small">
            <div className="d-flex align-items-center gap-2">
              <MapPinIcon size={40} />

              <div className="d-flex flex-column text-start small montserrat">
                <span>Enviar a Thiago</span>
                <span className="ms-n1 fw-semibold">Colonia 1141</span>
              </div>
            </div>
          </div>
          <a href="#" className="fw-semibold text-white text-decoration-none">Mis Compras</a>
          <a href="#" className="fw-semibold text-white text-decoration-none">Mi Cuenta</a>
        </div>
      </div>

      {/* Barra de navegación */}
      <nav style={{ backgroundColor: '#C258E9' }} className="px-4 py-2">
        <div className="d-flex gap-4 align-items-center small text-white montserrat">
          {['Categorías', 'Ofertas', 'Vender', 'Cupones', 'Favoritos', 'Ayuda'].map((item) => (
            <a key={item} href="#" className="text-white text-decoration-none hover-underline">{item}</a>
          ))}
          <div className="d-flex align-items-center gap-3 ms-auto">
            <MessageCircleIcon size={20} className="cursor-pointer hover-opacity" />
            <BellIcon size={20} className="cursor-pointer hover-opacity" />
            <ShoppingCartIcon size={20} className="cursor-pointer hover-opacity" />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;