import React from "react";

import {
  ShoppingCartIcon,
  BellIcon,
  SearchIcon,
  MapPinIcon,
  MessageCircleIcon,
} from 'lucide-react';

import logo from "../../assets/logo512-borde-blanco.png";

const Header: React.FC = () => {
  return (
    <header className="bg-[#a646c6] text-white text-sm">
      {/* Primera línea */}
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo + nombre */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="w-12 h-12 rounded-full" />
          <h1 className="text-2xl font-bold">MercadoThiago</h1>
        </div>

        {/* Barra de búsqueda */}
        <div className="flex-1 mx-6 max-w-2xl">
          <div className="flex rounded-full overflow-hidden shadow">
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
          <div className="flex items-center space-x-2">
            <MapPinIcon className="text-xl" />
            <div className="leading-4">
              <p className="text-xs">Enviar a Thiago</p>
              <p className="text-sm font-semibold">Colonia 1141</p>
            </div>
          </div>
          <a href="#" className="font-semibold hover:underline">Mis Compras</a>
          <a href="#" className="font-semibold hover:underline">Mi Cuenta</a>
        </div>
      </div>

      {/* Segunda línea */}
      <div className="bg-[#b453c6] px-6 py-2 flex items-center justify-between text-white font-medium text-sm">
        {/* Menú */}
        <div className="flex space-x-5">
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