import React from "react";

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
  const envioDestacado = envio.toLowerCase().includes("llega gratis mañana");

  return (
    <a href="#" className="flex flex-col gap-1 text-sm group p-2 rounded">
      <img src={imagen} alt={nombre} className="w-full h-40 object-contain" />
      <span className="leading-tight text-black font-montserrat font-regular line-clamp-2 group-hover:text-purple-600">
        {nombre}
      </span>
      {precioAnterior && (
        <span className="text-gray-400 text-xs font-montserrat font-regular line-through">$ {precioAnterior}</span>
      )}
      <span className="text-black font-bold font-montserrat text-base">$ {precioActual.toLocaleString()}</span>
      {descuento && <span className="text-xs text-purple-600 font-regular">{descuento}</span>}
      <span className="text-black font-montserrat text-xs font-regular">{cuotas}</span>
      <span
        className={`inline-block w-fit text-xs font-medium font-montserrat select-none ${
          envioDestacado ? "px-2 py-0.5 rounded bg-[#CF6EF34A] text-purple-700" : "text-purple-600"
        }`}
      >
        {envio}
      </span>
    </a>
  );
};

export default TarjetaPublicacionIndice;
