import React from 'react'
import './styles/App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import AppRoutes from './routes/AppRoutes'


import Publicidad from "./assets/publicidades/nivel2/publicidad2.png";
import Publicidad1 from "./assets/publicidades/nivel1/2nivel1.webp";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <Footer />
    </div>
  );
}

export default App; 
