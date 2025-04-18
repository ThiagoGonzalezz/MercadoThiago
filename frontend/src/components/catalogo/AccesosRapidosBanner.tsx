import React, { useState } from "react";
import TarjetaAccesoRapido from "./TarjetaAccesoRapido";
import { ChevronLeft, ChevronRight } from "lucide-react"; // asegurate de tener este ícono instalado

const tarjetas = [
  {
    titulo: "Tiendas oficiales",
    descripcion: "Encontrá tus marcas preferidas.",
    textoBoton: "Mostrar tiendas",
    imagenSrc: "./../../../assets/accesos_rapidos/tiendas-oficiales.png",
  },
  {
    titulo: "Medios de pago",
    descripcion: "Pagá tus compras de forma rápida y segura.",
    textoBoton: "Conocer medios de pago",
    imagenSrc: "./../../../assets/accesos_rapidos/medios-de-pago.png",
  },
  {
    titulo: "Menos de $20.000",
    descripcion: "Descubrí productos con precios bajos.",
    textoBoton: "Mostrar productos",
    imagenSrc: "./../../../assets/accesos_rapidos/productos-baratos.png",
  },
  {
    titulo: "Más vendidos",
    descripcion: "Explorá los productos que son tendencia.",
    textoBoton: "Ir a Más vendidos",
    imagenSrc: "./../../../assets/accesos_rapidos/mas-vendidos.png",
  },
];

const AccesosRapidosBanner: React.FC = () => {
    return (
      <div className="relative w-full max-w-6xl mx-auto -mt-20">
        <div className="grid grid-cols-4 gap-x-4 gap-y-4 w-full">
          {tarjetas.map((tarjeta, index) => (
            <TarjetaAccesoRapido key={index} {...tarjeta} />
          ))}
        </div>

        {/* Botones de navegación */}
        <button
          className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#CF6EF3] text-white rounded-full p-3 shadow-md hover:bg-purple-600 hover:drop-shadow-lg transition"
        >
          <ChevronLeft />
        </button>

        <button
          className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-[#CF6EF3] text-white rounded-full p-3 shadow-md hover:bg-purple-600 hover:drop-shadow-lg transition"
        >
          <ChevronRight />
        </button>
      </div>
    );
  };
  
  export default AccesosRapidosBanner;