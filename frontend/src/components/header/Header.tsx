import React from "react";

import {
  ShoppingCartIcon,
  BellIcon,
  SearchIcon,
  MapPinIcon,
  MessageCircleIcon,
} from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-[#A248C3] text-white text-sm font-montserrat shadow-lg">
      {/* Primera línea */}
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo + nombre */}
        <div className="flex items-center space-x-3">
          <img src="./../../assets/logo512-borde-blanco.png" alt="Logo" className="w-16 h-16 rounded-full" />
          <h1 className="mercado-logo-text">MercadoThiago</h1>
        </div>

        {/* Barra de búsqueda */}
        <div className="flex-1 mx-6 max-w-2xl">
          <div className="flex rounded-lg overflow-hidden shadow">
            <input
              type="text"
              placeholder="Buscar productos, marcas y más..."
              className="flex-1 px-5 py-2 text-gray-700 placeholder-gray-500 focus:outline-none"
            />
            <button className="bg-[#ffaa17] px-4 flex items-center justify-center text-white hover:bg-[#e99c0c]">
              <SearchIcon />
            </button>
          </div>
        </div>

        {/* Envío + links */}
        <div className="flex items-center space-x-6">
          <a href="#" className="flex items-center space-x-2 hover:scale-110 transition">
            <MapPinIcon className="h-9 w-9" />
            <div className="leading-4">
              <p className="text-xs font-montserrat font-medium text-[#E8E8E8]">Enviar a Thiago</p>
              <p className="text-sm font-montserrat font-semibold">Colonia 1141</p>
            </div>
          </a>
          <a href="#" className="font-bold hover:scale-110 transition">Mis Compras</a>
          <a href="#" className="font-bold hover:scale-110 transition">Mi Cuenta</a>
        </div>
      </div>

      {/* Segunda línea */}
      <div className="bg-[#C258E9] px-6 py-2 flex items-center justify-between text-white font-montserrat font-medium text-sm shadow-lg">
        {/* Menú */}
        <div className="flex space-x-5 font-light">
          <a href="#" className="hover:underline">Categorías</a>
          <a href="#" className="hover:underline">Ofertas</a>
          <a href="#" className="hover:underline">Cupones</a>
          <a href="#" className="hover:underline">Favoritos</a>
          <a href="#" className="hover:underline">Vender</a>
          <a href="#" className="hover:underline">Ayuda</a>
        </div>

        {/* Íconos */}
        <div className="flex space-x-5 text-lg">
          <MessageCircleIcon className="cursor-pointer hover:scale-110 transition" />
          <BellIcon className="cursor-pointer hover:scale-110 transition" />
          <ShoppingCartIcon className="cursor-pointer hover:scale-110 transition" />
        </div>
      </div>
    </header>
  );
};

export default Header;