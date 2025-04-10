import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
}

const ProductNavigationScreen: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    axios.get<Product[]>('/api/products')
      .then(res => {
        setProducts(res.data);
        setFilteredProducts(res.data);
      });
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
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Explorá productos</h1>

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
    </div>
  );
};

export default ProductNavigationScreen;
