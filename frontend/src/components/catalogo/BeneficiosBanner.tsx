import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Image from "../../assets/beneficios/hbo.png";

type BenefitItem = {
  src: string;
  alt: string;
  href: string;
};

const benefits: BenefitItem[] = [
  { src: Image, alt: "Beneficio 1", href: "https://beneficio1.com" },
  { src: Image, alt: "Beneficio 2", href: "https://beneficio2.com" },
  { src: Image, alt: "Beneficio 3", href: "https://beneficio3.com" },
  { src: Image, alt: "Beneficio 4", href: "https://beneficio4.com" },
  { src: Image, alt: "Beneficio 5", href: "https://beneficio5.com" },
];

const BeneficiosBanner: React.FC = () => {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? benefits.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === benefits.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative bg-white rounded-xl shadow-lg px-6 py-4 max-w-6xl mx-auto overflow-visible">
      <div className="flex items-center gap-3 mb-2">
        <h2 className="text-lg font-semibold font-montserrat">Beneficios</h2>
        <a
          href="#"
          className="text-sm font-roboto font-medium text-[#A248C3] hover:underline"
        >
          Ver todos los beneficios
        </a>
      </div>

      <div className="relative flex items-center">

        {/* Carrusel */}
        <div className="flex gap-2 overflow-hidden w-full justify-between">
          {benefits.slice(index, index + 3).map((item, i) => (
            <a
            key={i}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 block"
          >
            <img
              src={item.src}
              alt={item.alt}
              className="w-full object-cover rounded-md hover:scale-[1.02] transition-transform duration-300"
            />
          </a>
          ))}
        </div>

    </div>
    {/* Botones de navegación */}
    <button
    className="absolute left-0 top-[57%] -translate-x-1/2 -translate-y-1/2 bg-[#CF6EF3] text-white rounded-full p-3 shadow-md hover:bg-purple-600 hover:drop-shadow-lg transition"
    >
    <ChevronLeft />
    </button>

    <button
    className="absolute right-0 top-[57%] -translate-y-1/2 translate-x-1/2 bg-[#CF6EF3] text-white rounded-full p-3 shadow-md hover:bg-purple-600 hover:drop-shadow-lg transition"
    >
    <ChevronRight />
    </button>

    </div>
  );
};

export default BeneficiosBanner;