import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import ProductCard from './components/ProductCard.jsx'
import { useOutletContext } from "react-router-dom";

function App() {

  return (
    <>
      <Navbar />
      <main>
        <section className = "hero">
            <p className = "hero-title">Something Inspirational</p>
            <button>Explore Catelog</button>
        </section>

      

        <section className = "product-preview">
          
        </section>
      </main>
    </>
  )
}

export default App
