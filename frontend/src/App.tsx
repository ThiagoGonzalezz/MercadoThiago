import React from 'react'
import './styles/App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'


function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
      <div className="container mx-auto py-8">
          {/* Tu contenido va acá */}
          <h1 className="text-2xl font-bold">Página de ejemplo</h1>
          <p>Contenido de la página...</p>
        </div>
      </main>
     
      <Footer />
    </div>
  );
};

export default App; 
