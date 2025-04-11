// Header.jsx
import { ShoppingCartIcon, BellIcon, SearchIcon, MapPinIcon, MessageCircleIcon } from 'lucide-react'

function Header() {
  return (
    <header className="bg-gradient-to-r from-purple-700 to-purple-500 text-white shadow-md">
      <div className="flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.svg" alt="Logo" className="w-10 h-10" />
          <h1 className="text-xl font-bold">MercadoThiago</h1>
        </div>

        {/* Search */}
        <div className="flex-1 mx-4 max-w-xl">
          <div className="flex bg-white rounded-full overflow-hidden shadow-sm">
            <input
              type="text"
              placeholder="Buscar productos, marcas y más..."
              className="flex-1 px-4 py-2 text-black outline-none"
            />
            <button className="bg-yellow-400 px-4">
              <SearchIcon className="text-black" />
            </button>
          </div>
        </div>

        {/* Icons & user info */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 text-sm">
            <MapPinIcon size={16} />
            <span>
              Enviar a Thiago<br />
              <span className="text-xs">Colonia 1141</span>
            </span>
          </div>
          <span className="font-semibold">Mis Compras</span>
          <span className="font-semibold">Mi Cuenta</span>
        </div>
      </div>

      {/* Navegación */}
      <nav className="flex gap-4 px-4 py-2 text-sm border-t border-purple-400">
        <span className="cursor-pointer hover:underline">Categorías</span>
        <span>Ofertas</span>
        <span>Vender</span>
        <span>Cupones</span>
        <span>Favoritos</span>
        <span>Ayuda</span>
        <MessageCircleIcon />
        <BellIcon />
        <ShoppingCartIcon />
      </nav>
    </header>
  )
}

export default Header;