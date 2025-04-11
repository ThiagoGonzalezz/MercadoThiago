import React, { useEffect, useState } from 'react';
import { ShoppingCart, User, Home } from 'lucide-react';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
}

const Header: React.FC = () => (
  <header className="bg-purple-800 text-white p-4 shadow-md">
    <div className="flex items-center justify-between max-w-7xl mx-auto">
      <div className="flex items-center gap-2">
        <ShoppingCart className="w-7 h-7 text-yellow-300" />
        <h1 className="text-2xl font-bold">MercadoThiago</h1>
      </div>
      <nav className="flex gap-6 text-sm">
        <a href="#" className="hover:text-yellow-300 flex items-center gap-1">
          <Home className="w-4 h-4" /> Inicio
        </a>
        <a href="#" className="hover:text-yellow-300 flex items-center gap-1">
          <User className="w-4 h-4" /> Mi cuenta
        </a>
      </nav>
    </div>
  </header>
);

const Footer: React.FC = () => (
  <footer className="bg-fuchsia-100 text-center text-sm text-gray-600 p-4 mt-10 border-t">
    © {new Date().getFullYear()} MercadoThiago - Comprá distinto, comprá mejor 💜
  </footer>
);

const ProductNavigationScreen: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    const mockProducts: Product[] = [
      {
        id: 1,
        title: 'Auriculares Bluetooth',
        description: 'Sonido HD, cancelación de ruido',
        price: 5999,
        imageUrl: 'https://via.placeholder.com/300x200?text=Auriculares',
        category: 'Tecnología',
      },
      {
        id: 2,
        title: 'Zapatillas Urbanas',
        description: 'Diseño liviano y cómodo',
        price: 10999,
        imageUrl: 'https://via.placeholder.com/300x200?text=Zapatillas',
        category: 'Calzado',
      },
      {
        id: 3,
        title: 'Notebook Gamer',
        description: 'Intel i7, 16GB RAM, RTX 3060',
        price: 499999,
        imageUrl: 'https://via.placeholder.com/300x200?text=Notebook',
        category: 'Tecnología',
      },
    ];

    setProducts(mockProducts);
    setFilteredProducts(mockProducts);
  }, []);

  useEffect(() => {
    const filtered = products.filter(product => {
      return (
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (category ? product.category === category : true)
      );
    });
    setFilteredProducts(filtered);
  }, [searchTerm, category, products]);

  const uniqueCategories = Array.from(new Set(products.map(p => p.category)));

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="p-4 flex-grow max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Explorá productos</h2>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Buscar productos..."
            className="p-2 border border-gray-300 rounded"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />

          <select
            className="p-2 border border-gray-300 rounded"
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            <option value="">Todas las categorías</option>
            {uniqueCategories.map((cat, idx) => (
              <option key={idx} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="border rounded shadow p-4">
              <img src={product.imageUrl} alt={product.title} className="w-full h-48 object-cover rounded" />
              <h2 className="text-xl font-semibold mt-2">{product.title}</h2>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-lg font-bold text-purple-700 mt-2">${product.price}</p>
              <button className="mt-4 w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700">Ver más</button>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductNavigationScreen;