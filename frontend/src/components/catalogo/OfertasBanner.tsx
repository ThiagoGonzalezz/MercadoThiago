import React from "react";
import TarjetaOferta from "./Oferta"; 
import Imagen from "../../assets/ofertas/baterias.png";

const OfertasBanner: React.FC = () => {
    return (
      <div className="flex flex-col md:flex-row gap-4 w-full max-w-6xl mx-auto shadow-lg">
        <TarjetaOferta
          title="HASTA 20% OFF EN BATERÍAS DE AUTO"
          subtitle="Hacé el cambio"
          image={Imagen} // reemplazá con la ruta real
          href="https://ejemplo.com/baterias"
        />
        <TarjetaOferta
          title="HASTA 25% OFF Y 3X SIN INTERÉS"
          subtitle="¡Decorá tu hogar!"
          image={Imagen} // reemplazá con la ruta real
          href="https://ejemplo.com/deco"
        />
      </div>
    );
  };
  
  export default OfertasBanner;