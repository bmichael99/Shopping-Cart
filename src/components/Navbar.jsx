import { useState } from 'react'
import { Link } from "react-router-dom";
import './Navbar.css'

function Navbar() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className = "navbar">
        <nav>
          <div className="navbar-left">
            <p className = "navbar-logo">Store</p>
          </div>
          <div className="navbar-center">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link>Cart</Link></li>
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
