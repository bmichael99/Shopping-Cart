import { useState } from 'react'
import { Link, useOutletContext } from "react-router-dom";
import './Navbar.css'

function Navbar() {
  const { cart, setCart } = useOutletContext();

  function cartCount(){
    return 
  }

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
              <li><Link to="/cart">Cart </Link>
              <span className = "cartCount">
              {
              cart.reduce((accumulator, cartObj) => {
              return cartObj.quantity + accumulator;
              } ,0)
              }
              
              </span>
              
              </li>
              
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
