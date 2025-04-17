import React from "react";

type TarjetaOfertaProps = {
  title: string;
  subtitle: string;
  image: string;
  href: string;
};

const TarjetaOferta: React.FC<TarjetaOfertaProps> = ({ title, subtitle, image, href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-full max-w-3xl max-h-[200px]  rounded-xl overflow-hidden shadow-lg bg-white transition hover:shadow-xl"
    >
      {/* Lado Izquierdo: Texto */}
      <div className="flex flex-col justify-center px-6 py-4 w-1/2">
        <p className="text-xs uppercase tracking-[0.25em] text-gray-500 font-medium">
          {subtitle}
        </p>
        <h3 className="text-xl font-semibold text-[#484848] mt-1 leading-tight">
          {title}
        </h3>
        <div className="mt-4">
          <span className="inline-block bg-[#A248C3] text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-[#8D45A8]">
            Ver ofertas
          </span>
        </div>
      </div>

      {/* Lado Derecho: Imagen */}
      <div className="w-1/2">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>
    </a>
  );
};

export default TarjetaOferta;