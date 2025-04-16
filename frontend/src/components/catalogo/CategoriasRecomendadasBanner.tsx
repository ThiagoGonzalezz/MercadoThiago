import React from "react";
import CategoriaRecomendada from "./CategoriaRecomendada";
import RecomendacionDeportes from "../../assets/categorias_recomendadas/deportes-recomendados.png";
import RecomendacionCelulares from "../../assets/categorias_recomendadas/celulares-recomendados.png";
import RecomendacionTextiles from "../../assets/categorias_recomendadas/textiles-recomendados.png";

import Celular1 from "../../assets/publicaciones/celular1.png";
import Celular2 from "../../assets/publicaciones/celular2.png";
import Celular3 from "../../assets/publicaciones/celular3.png";
import Celular4 from "../../assets/publicaciones/celular4.png";

import Textil1 from "../../assets/publicaciones/textil1.png";
import Textil2 from "../../assets/publicaciones/textil2.png";
import Textil3 from "../../assets/publicaciones/textil3.png";
import Textil4 from "../../assets/publicaciones/textil4.png";

import Deporte1 from "../../assets/publicaciones/deporte1.png";
import Deporte2 from "../../assets/publicaciones/deporte2.png";
import Deporte3 from "../../assets/publicaciones/deporte3.png";
import Deporte4 from "../../assets/publicaciones/deporte4.png";


const CategoriasRecomendadas: React.FC = () => {
  return (
    <div className="items-center justify-center w-full max-w-6xl mx-auto px-0 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      <CategoriaRecomendada
        titulo="Celulares"
        imagenPrincipal={RecomendacionCelulares}
        miniaturas={[
          "/images/samsung.png",
          "/images/huawei.png",
          "/images/xiaomi.png",
          "/images/iphone.png",
        ]}
      />

      <CategoriaRecomendada
        titulo="Textiles"
        imagenPrincipal={RecomendacionTextiles}
        miniaturas={[
          "/images/almohadon.png",
          "/images/colchoneta.png",
          "/images/sabanas.png",
          "/images/cubrelecho.png",
        ]}
      />

      <CategoriaRecomendada
        titulo="Deportes"
        imagenPrincipal={RecomendacionDeportes}
        miniaturas={[
          "/images/cinta.png",
          "/images/mancuernas.png",
          "/images/bicicleta.png",
          "/images/barras.png",
        ]}
      />
    </div>
  );
};

export default CategoriasRecomendadas;