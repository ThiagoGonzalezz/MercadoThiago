import React from 'react'
import './styles/App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import IndiceCategoriasBanner from './components/catalogo/IndiceCategoriasBanner'
import CategoriasRecomendadasBanner from "./components/catalogo/CategoriasRecomendadasBanner";
import PublicidadBanner from "./components/catalogo/PublicidadNivel2Banner";

import Publicidad from "./assets/publicidades/publicidad1.png";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-[#FFCE83]">
      <div className="container mx-auto py-8">
          {/* Tu contenido va acá */}
          <CategoriasRecomendadasBanner />
          <PublicidadBanner 
           imagen={Publicidad}
           link="https://tusitio.com/productos"
           alt="Conoce todos los productos"/>
          <IndiceCategoriasBanner />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App; 
