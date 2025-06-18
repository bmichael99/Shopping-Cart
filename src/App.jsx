import { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <main>
        <section class = "hero">
            <p class = "hero-title">Something Inspirational</p>
            <button>Explore Catelog</button>
        </section>

        <section class = "product-preview">
          
        </section>
      </main>


    </>
  )
}

export default App
