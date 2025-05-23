import React from "react";

import IndiceCategoriasBanner from './../components/catalogo/IndiceCategoriasBanner'
import CategoriasRecomendadasBanner from "./../components/catalogo/CategoriasRecomendadasBanner";
import PublicidadBanner from "./../components/catalogo/PublicidadNivel2Banner";
import PublicidadNivel1 from "./../components/catalogo/PublicidadNivel1Banner";
import BeneficiosBanner from "./../components/catalogo/BeneficiosBanner";
import OfertasBanner from './../components/catalogo/OfertasBanner'
import IndicePublicacionesBanner from "./../components/catalogo/IndicePublicacionesBanner";
import AccesosRapidosBanner from "./../components/catalogo/AccesosRapidosBanner";


const PaginaPrincipal: React.FC = () => {
    return (
        <div>
            <PublicidadNivel1 imagen={`${process.env.REACT_APP_BACKEND_URL}/uploads/publicidades/nivel1/2nivel1.webp`} link="/ofertas" alt="PublicidadNivel1" />

            <main className="flex-grow bg-[#FFCE83]">

                <div className="container mx-auto py-8 space-y-10">
                    
                    <AccesosRapidosBanner/>

                    <IndicePublicacionesBanner/>
                    <IndicePublicacionesBanner/>

                    <OfertasBanner />
                    <PublicidadBanner 
                        imagen={`${process.env.REACT_APP_BACKEND_URL}/uploads/publicidades/nivel2/publicidad2.png`}
                        link="https://tusitio.com/productos"
                        alt="Conoce todos los productos"
                    />

                    <IndicePublicacionesBanner/>
                    <IndicePublicacionesBanner/>

                    <BeneficiosBanner/>
                    <PublicidadBanner 
                        imagen={`${process.env.REACT_APP_BACKEND_URL}/uploads/publicidades/nivel2/publicidad3.png`}
                        link="https://tusitio.com/productos"
                        alt="Conoce todos los productos"
                    />

                    <IndicePublicacionesBanner/>
                    <IndicePublicacionesBanner/>

                    <CategoriasRecomendadasBanner />
                    <IndiceCategoriasBanner />

                </div>
            </main>
      
        </div> 

    );
};

export default PaginaPrincipal;