import React from 'react'
import './styles/App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import IndiceCategoriasBanner from './components/catalogo/IndiceCategoriasBanner'
import CategoriasRecomendadasBanner from "./components/catalogo/CategoriasRecomendadasBanner";
import PublicidadBanner from "./components/catalogo/PublicidadNivel2Banner";
import PublicidadNivel1 from "./components/catalogo/PublicidadNivel1Banner";
import BeneficiosBanner from "./components/catalogo/BeneficiosBanner";
import OfertasBanner from './components/catalogo/OfertasBanner'
import IndicePublicacionesBanner from "./components/catalogo/IndicePublicacionesBanner";

import Publicidad from "./assets/publicidades/publicidad1.png";
import Publicidad1 from "./assets/publicidades/publicidad2.png";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* Publicidad que ocupa todo el ancho */}
      <PublicidadNivel1 imagen={Publicidad1} link="/ofertas" alt="PublicidadNivel1" />

      <main className="flex-grow bg-[#FFCE83]">
        <div className="container mx-auto py-8">
          {/* Contenido limitado al ancho */}
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

      <Footer />
    </div>
  );
}

export default App; 
