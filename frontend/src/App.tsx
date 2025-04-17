import React from 'react'
import './styles/App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <AppRoutes />

      <Footer />
    </div>
  );
}

export default App; 
