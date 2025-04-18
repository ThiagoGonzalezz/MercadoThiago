import React from "react";

type DestacadaProps = {
  titulo: string;
  imagenPrincipal: string;
  miniaturas: string[];
};

const CategoriasRecomendadas: React.FC<DestacadaProps> = ({
  titulo,
  imagenPrincipal,
  miniaturas,
}) => {
  return (
    <a href="#" className="block w-85">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        {/* Título */}
        <div className="p-4">
          <h3 className="text-lg font-montserrat font-semibold text-[#484848] uppercase">{titulo}</h3>
        </div>

        {/* Imagen principal con fondo violeta */}
        <div className="bg-gradient-to-b from-purple-600 to-purple-500 h-48 overflow-hidden">
          <img
            src={imagenPrincipal}
            alt={titulo}
            className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Miniaturas */}
        <div className="grid grid-cols-4 gap-2 p-4">
          {miniaturas.map((img, idx) => (
            <button
              key={idx}
              className="border border-gray-300 rounded-md p-1 bg-white flex items-center justify-center transition-all duration-300 hover:border-purple-600"
              onClick={(e) => {
                e.preventDefault();
                console.log(`Miniatura ${idx + 1} clickeada`);
              }}
            >
              <img src={img} alt={`Miniatura ${idx + 1}`} className="h-10 object-contain" />
            </button>
          ))}
        </div>
      </div>
    </a>
  );
};

export default CategoriasRecomendadas;