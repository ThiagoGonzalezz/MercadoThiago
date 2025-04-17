import React from "react";

import Imagen from "../../assets/publicaciones/auriculares.png";

interface PublicacionIndiceProps {
  nombre: string;
  imagen: string;
  precioActual: number;
  precioAnterior?: number;
  descuento?: string;
  cuotas: string;
  envio: string;
}

const TarjetaPublicacionIndice: React.FC<PublicacionIndiceProps> = ({
  nombre,
  imagen,
  precioActual,
  precioAnterior,
  descuento,
  cuotas,
  envio,
}) => {
  return (
    <a href="#" className="flex flex-col gap-1 text-sm group p-2 rounded transition">
      {/*Cambiar Imagen por imagen*/}
      <img src={Imagen} alt={nombre} className="w-full h-40 object-contain" />
      <span className="leading-tight text-black font-medium line-clamp-2 group-hover:text-purple-600">
        {nombre}
      </span>
      {precioAnterior && (
        <span className="text-gray-400 text-xs line-through">$ {precioAnterior}</span>
      )}
      <span className="text-black font-bold text-base">$ {precioActual.toLocaleString()}</span>
      {descuento && <span className="text-xs text-purple-600 font-medium">{descuento}</span>}
      <span className="text-black text-xs">{cuotas}</span>
      <span className="text-purple-600 text-xs font-semibold select-none">{envio}</span>
    </a>
  );
};

export default TarjetaPublicacionIndice;