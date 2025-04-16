import React from 'react'
import './styles/App.css'
//import Footer from './components/utils/Footer'
import Header from './components/utils/Header'


function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Header />
      <main className="flex-grow-1">
        {/* Acá va el contenido de la página */}
      </main>
      {/*<Footer />*/}
    </div>
  );
};

export default App; 
