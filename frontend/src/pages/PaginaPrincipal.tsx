import React from "react";

import IndiceCategoriasBanner from './../components/catalogo/IndiceCategoriasBanner'
import CategoriasRecomendadasBanner from "./../components/catalogo/CategoriasRecomendadasBanner";
import PublicidadBanner from "./../components/catalogo/PublicidadNivel2Banner";
import PublicidadNivel1 from "./../components/catalogo/PublicidadNivel1Banner";
import BeneficiosBanner from "./../components/catalogo/BeneficiosBanner";
import OfertasBanner from './../components/catalogo/OfertasBanner'
import IndicePublicacionesBanner from "./../components/catalogo/IndicePublicacionesBanner";
import AccesosRapidosBanner from "./../components/catalogo/AccesosRapidosBanner";


import Publicidad from "./assets/publicidades/nivel2/publicidad2.png";
import Publicidad1 from "./assets/publicidades/nivel1/2nivel1.webp";

const PaginaPrincipal: React.FC = () => {
    return (
        <div>
            <PublicidadNivel1 imagen={Publicidad1} link="/ofertas" alt="PublicidadNivel1" />


            <main className="flex-grow bg-[#FFCE83]">

                <div className="container mx-auto py-8">
                    <AccesosRapidosBanner/>
                    
                    <CategoriasRecomendadasBanner />
                    < BeneficiosBanner/>
                    <PublicidadBanner 
                        imagen={Publicidad}
                        link="https://tusitio.com/productos"
                        alt="Conoce todos los productos"
                    />
                    <IndiceCategoriasBanner />
                    <OfertasBanner />
                    <IndicePublicacionesBanner/>
                </div>
            </main>
      
        </div> 

    );
};

export default PaginaPrincipal;