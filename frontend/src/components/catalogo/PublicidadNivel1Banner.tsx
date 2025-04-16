import React from "react";

type PublicidadNivel1Props = {
    imagen: string;
    alt?: string;
    link?: string;
  };

const PublicidadNivel1: React.FC<PublicidadNivel1Props> = ({ imagen, link = "#", alt = "" }) => {
    return (
        <a href={link} className="block w-full">
            <div className="relative w-full max-w-full h-auto overflow-hidden">
                {/* Imagen de fondo a pantalla completa */}
                <img
                    src={imagen}
                    alt={alt}
                    className="w-full object-cover"
                />

                {/* Degradado inferior que se funde con el fondo */}
                <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-b from-transparent to-[#FFCE83] pointer-events-none" />
            </div>
        </a>
    );
};

export default PublicidadNivel1;