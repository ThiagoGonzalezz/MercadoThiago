import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "../../assets/indices_categorias/indice-auto.png";

type Category = {
  name: string;
  image: string;
};

const categories: Category[] = [
  { name: "Autos, Motos y Otros", image: Image },
  { name: "Celulares y Teléfonos", image: Image },
  { name: "Electrodomésticos y Aires Ac.", image: Image },
  { name: "Herramientas", image: Image },
  { name: "Accesorios para Vehículos", image: Image },
  { name: "Ropa y Accesorios", image: Image },
  { name: "Deportes y Fitness", image: Image },
  { name: "Belleza y Cuidado Personal", image: Image },
  { name: "Hogar, Muebles y Jardín", image: Image },
  { name: "Computación", image: Image },
  { name: "Inmuebles", image: Image },
  { name: "Electrónica, Audio y Video", image: Image },
  { name: "Autos, Motos y Otros", image: Image },
  { name: "Celulares y Teléfonos", image: Image },
  { name: "Electrodomésticos y Aires Ac.", image: Image },
  { name: "Herramientas", image: Image },
  { name: "Accesorios para Vehículos", image: Image },
  { name: "Ropa y Accesorios", image: Image },
  { name: "Deportes y Fitness", image: Image },
  { name: "Belleza y Cuidado Personal", image: Image },
  { name: "Hogar, Muebles y Jardín", image: Image },
  { name: "Computación", image: Image },
  { name: "Inmuebles", image: Image },
  { name: "Deportes y Fitness", image: Image },
  { name: "Belleza y Cuidado Personal", image: Image },
  { name: "Hogar, Muebles y Jardín", image: Image },
  { name: "Computación", image: Image },
  { name: "Inmuebles", image: Image },
  { name: "Electrónica, Audio y Video", image: Image },
  { name: "Autos, Motos y Otros", image: Image },
  { name: "Celulares y Teléfonos", image: Image },
  { name: "Electrodomésticos y Aires Ac.", image: Image },
  { name: "Herramientas", image: Image },
  { name: "Accesorios para Vehículos", image: Image },
  { name: "Ropa y Accesorios", image: Image },
  { name: "Deportes y Fitness", image: Image },
  { name: "Belleza y Cuidado Personal", image: Image },
  { name: "Hogar, Muebles y Jardín", image: Image },
  { name: "Computación", image: Image },
  { name: "Inmuebles", image: Image },
];

const ITEMS_PER_PAGE = 12;

const IndiceCategorias: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);

  const totalPages = Math.ceil(categories.length / ITEMS_PER_PAGE);
  const currentPage = Math.floor(startIndex / ITEMS_PER_PAGE);

  const isFirstPage = startIndex === 0;
  const isLastPage = startIndex + ITEMS_PER_PAGE >= categories.length;

  const visibleCategories = categories.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - ITEMS_PER_PAGE, 0));
  };

  const handleNext = () => {
    if (startIndex + ITEMS_PER_PAGE < categories.length) {
      setStartIndex((prev) => prev + ITEMS_PER_PAGE);
    }
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto bg-white p-4 rounded-2xl shadow-lg">
      {/* Header */}
      <div className="flex justify-between items-start px-2 mb-4">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold font-montserrat">Categorías</h2>
          <a
            href="#"
            className="text-sm font-roboto font-medium text-[#A248C3] hover:underline"
          >
            Mostrar todas las categorías
          </a>
        </div>

        {/* Paginación dinámica con puntitos */}
        <div className="flex gap-1 mt-1">
          {Array.from({ length: totalPages }).map((_, i) => (
            <span
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === currentPage ? "bg-purple-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Tarjetas */}
      <div className="grid grid-cols-4 gap-4">
        {visibleCategories.map((cat, idx) => (
          <a
            key={idx}
            href="#"
            className="group flex items-center bg-white border rounded-xl p-0 shadow-sm overflow-hidden hover:shadow-md transition"
          >
            <div className="bg-[#F6F6F6] w-[35%] h-full flex items-center justify-center p-2">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-12 h-12 object-cover rounded-md"
              />
            </div>
            <div className="p-3">
              <span className="text-sm font-medium font-montserrat leading-tight transition-colors duration-300 group-hover:text-purple-600">
                {cat.name}
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* Botones de navegación */}
      {!isFirstPage && (
        <button
          className="absolute left-0 top-[57%] -translate-x-1/2 -translate-y-1/2 bg-[#CF6EF3] text-white rounded-full p-3 shadow-md hover:bg-purple-600 hover:drop-shadow-lg transition"
          onClick={handlePrev}
        >
          <ChevronLeft />
        </button>
      )}

      {!isLastPage && (
        <button
          className="absolute right-0 top-[57%] -translate-y-1/2 translate-x-1/2 bg-[#CF6EF3] text-white rounded-full p-3 shadow-md hover:bg-purple-600 hover:drop-shadow-lg transition"
          onClick={handleNext}
        >
          <ChevronRight />
        </button>
      )}
    </div>
  );
};

export default IndiceCategorias;