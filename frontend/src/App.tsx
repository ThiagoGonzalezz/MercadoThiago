import React from 'react'
import './styles/App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import IndiceCategorias from './components/catalogo/IndiceCategorias'
import CategoriasRecomendadas from "./components/catalogo/CategoriasRecomendadas";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow bg-[#FFCE83]">
      <div className="container mx-auto py-8">
          {/* Tu contenido va acá */}
          <CategoriasRecomendadas />
          <IndiceCategorias />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App; 
