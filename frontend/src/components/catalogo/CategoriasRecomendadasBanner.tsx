import React from "react";
import CategoriaRecomendada from "./CategoriaRecomendada";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

const CategoriasRecomendadas: React.FC = () => {
  return (
    <div className="items-center justify-center w-full max-w-6xl mx-auto px-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      <CategoriaRecomendada
        titulo="Celulares"
        imagenPrincipal = {`${backendUrl}/uploads/categorias_recomendadas/celulares-recomendados.png`}
        miniaturas={[
          `${backendUrl}/uploads/publicaciones/celular1.png`,
          `${backendUrl}/uploads/publicaciones/celular2.png`,
          `${backendUrl}/uploads/publicaciones/celular3.png`,
          `${backendUrl}/uploads/publicaciones/celular4.png`,
        ]}
      />

      <CategoriaRecomendada
        titulo="Textiles"
        imagenPrincipal = {`${backendUrl}/uploads/categorias_recomendadas/textiles-recomendados.png`}
        miniaturas={[
          `${backendUrl}/uploads/publicaciones/textil1.png`,
          `${backendUrl}/uploads/publicaciones/textil2.png`,
          `${backendUrl}/uploads/publicaciones/textil3.png`,
          `${backendUrl}/uploads/publicaciones/textil4.png`,
        ]}
      />

      <CategoriaRecomendada
        titulo="Deportes"
        imagenPrincipal = {`${backendUrl}/uploads/categorias_recomendadas/deportes-recomendados.png`}
        miniaturas={[
          `${backendUrl}/uploads/publicaciones/deporte1.png`,
          `${backendUrl}/uploads/publicaciones/deporte2.png`,
          `${backendUrl}/uploads/publicaciones/deporte3.png`,
          `${backendUrl}/uploads/publicaciones/deporte4.png`,
        ]}
      />
    </div>
  );
};

export default CategoriasRecomendadas;