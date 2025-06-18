import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import ProductCard from './components/ProductCard.jsx'

function App() {
  const [count, setCount] = useState(0)

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
