import React from "react";

type AnuncioClickeableProps = {
  imagen: string;
  link: string;
  alt?: string;
};

const AnuncioClickeable: React.FC<AnuncioClickeableProps> = ({ imagen, link, alt = "Anuncio" }) => {
  return (
    <div className="block w-full max-w-6xl mx-auto rounded-xl overflow-hidden shadow-lg">
        <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        >
        <img
            src={imagen}
            alt={alt}
            className="w-full h-auto object-cover rounded-2x shadow-lg"
        />
        </a>
    </div>
  );
};

export default AnuncioClickeable;