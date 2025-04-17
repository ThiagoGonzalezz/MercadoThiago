import React from "react";

import Imagen from "./../../assets/accesos_rapidos/mas-vendidos.png";

type TarjetaAccesoRapidoProps = {
  titulo: string;
  descripcion: string;
  textoBoton: string;
  imagenSrc: string;
  onClick?: () => void;
};

const TarjetaAccesoRapido: React.FC<TarjetaAccesoRapidoProps> = ({
  titulo,
  descripcion,
  textoBoton,
  imagenSrc,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer flex flex-col justify-between p-4 rounded-lg shadow-md bg-white w-full border border-gray-200 transition-all duration-200 hover:shadow-lg"
    >
      <h3 className="font-montserrat font-bold text-lg text-left mb-4">{titulo}</h3>

      <div className="flex justify-center mb-4">
        {/*CAMBIAR IMAGEN POR imagenSrc*/}
        <img src={Imagen} alt={titulo} className="h-30" />
      </div>

      <p className="font-roboto text-[#171717] text-center group-hover:text-[#7B30E2] transition-colors duration-200">
        {descripcion}
      </p>

      <button
        className="mt-4 bg-[#F3D7FF] text-[#7B30E2] text-sm font-semibold px-4 py-1 rounded w-full transition-colors duration-200 group-hover:bg-[#D9B2F5]"
        onClick={(e) => e.stopPropagation()} // previene doble ejecución si el botón está dentro de la tarjeta
      >
        {textoBoton}
      </button>
    </div>
  );
};

export default TarjetaAccesoRapido;