import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TarjetaProducto from "./TarjetaPublicacionIndice";

import Imagen from "./../../assets/publicaciones/celular1.png";

const productos = [
  {
    id: 1,
    nombre: "Auriculares Inalámbricos Lenovo Livepod Lp75...",
    imagen: "./../../assets/publicaciones/celular1.png",
    precioAnterior: 28999,
    precioActual: 25499,
    descuento: "12% OFF",
    cuotas: "En 6 cuotas de $ 5.650",
    envio: "Envío gratis",
  },
  {
    id: 2,
    nombre: "Auriculares In-ear Inalámbricos A6s Negro",
    imagen: "./../../assets/publicaciones/celular1.png",
    precioActual: 5693,
    cuotas: "En 6 cuotas de $ 183.692",
    envio: "Llega gratis mañana",
  },
  {
    id: 3,
    nombre: "Auriculares In-ear Gamer Inalámbricos T Auriculares In-ear Gamer Inalámbricos T Auriculares In-ear Gamer Inalámbricos T Auriculares In-ear Gamer Inalámbricos T...",
    imagen: "./../../assets/publicaciones/celular1.png",
    precioActual: 5400,
    cuotas: "En 6 cuotas de $ 88.611",
    envio: "Envío gratis",
  },
  {
    id: 4,
    nombre: "Auriculares Inalámbricos Xiaomi Redmi Buds 3...",
    imagen: "./../../assets/publicaciones/celular1.png",
    precioAnterior: 36990,
    precioActual: 22933,
    descuento: "38% OFF",
    cuotas: "En 6 cuotas de $ 213.163",
    envio: "Llega mañana",
  },
  {
    id: 5,
    nombre: "Auriculares Inalámbricos Xiaomi Redmi Buds 4...",
    imagen: "./../../assets/publicaciones/celular1.png",
    precioAnterior: 26990,
    precioActual: 22401,
    descuento: "17% OFF",
    cuotas: "En 6 cuotas de $ 213.163",
    envio: "Envío gratis",
  },
  {
    id: 6,
    nombre: "Auriculares In-ear Gamer Inalámbricos...",
    imagen: "./../../assets/publicaciones/celular1.png",
    precioActual: 18589,
    cuotas: "En 6 cuotas de $ 26.811",
    envio: "Llega gratis mañana",
  },
];

const IndicePublicacionesBanner: React.FC = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto bg-white p-6 rounded-2xl shadow-lg font-roboto">
      <h2 className="text-xl font-semibold font-montserrat mb-4">Elegidos para vos en Auriculares</h2>

      <div className="grid grid-cols-6 gap-4">
        {productos.map((producto) => (
          <TarjetaProducto key={producto.id} {...producto} />
        ))}
      </div>

      {/* Botones de navegación */}
      <button
      className="absolute left-0 top-[50%] -translate-x-1/2 -translate-y-1/2 bg-[#CF6EF3] text-white rounded-full p-3 shadow-md hover:bg-purple-600 hover:drop-shadow-lg transition"
      >
      <ChevronLeft />
      </button>
  
      <button
      className="absolute right-0 top-[50%] -translate-y-1/2 translate-x-1/2 bg-[#CF6EF3] text-white rounded-full p-3 shadow-md hover:bg-purple-600 hover:drop-shadow-lg transition"
      >
      <ChevronRight />
      </button>
    </div>
  );
};

export default IndicePublicacionesBanner;
