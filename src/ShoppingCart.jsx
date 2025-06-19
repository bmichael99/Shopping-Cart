import { useState, useEffect } from 'react'
import './ShoppingCart.css'
import Navbar from './components/Navbar.jsx'
import ProductCard from './components/ProductCard.jsx'
import { useOutletContext } from "react-router-dom";

function ShoppingCart() {
  const { cart, setCart } = useOutletContext();
  return (
    <>
      <Navbar />
      <div className="cartList">
      {cart.map(({title, price, img, quantity}) =>
      <p>{quantity} {title} Total: ${quantity*price}</p>
      )}
      </div>
    </>
  )
}

export default ShoppingCart
