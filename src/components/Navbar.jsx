import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header class = "navbar">
        <nav>
          <div className="navbar-left">
            <p class = "navbar-logo">Store</p>
          </div>
          <div className="navbar-center">
            <ul>
              <li>Home</li>
              <li>Shop</li>
              <li>Cart</li>
            </ul>
          </div>
          <div className="navbar-right">
            <button>Sign up</button>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar
