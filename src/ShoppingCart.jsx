import { useState, useEffect } from 'react'
import './ShoppingCart.css'
import Navbar from './components/Navbar.jsx'
import ProductCard from './components/ProductCard.jsx'
import { useOutletContext } from "react-router-dom";

function ShoppingCart() {
  const { cart, setCart } = useOutletContext();
  const [hovered, setHovered] = useState(null);

  function handleClickk(title){
    const index = cart.findIndex((item) => item.title === title);
    const copyCart = cart;
    copyCart.splice(index,1);
    setCart(copyCart);
  }

  return (
    <>
      <Navbar />
      <div className="shoppingCart-container">
        <div className="cartList">
          <h2>Shopping Cart</h2>
          <hr />
          <br></br>
          <div className="cartItems">
            {cart.map(({title, price, img, quantity}) =>
              <div className="cartItem">
                <p key = {title}>{quantity} {title} <span class = "bold">Total:</span> ${quantity*price} 
                <button onMouseEnter={() => setHovered(title)} onMouseLeave={() => setHovered(null)} onClick = {() => handleClickk(title)}>
                {hovered !== title ? 
                (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete</title><path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" /></svg>)
                : (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete-empty</title><path d="M20.37,8.91L19.37,10.64L7.24,3.64L8.24,1.91L11.28,3.66L12.64,3.29L16.97,5.79L17.34,7.16L20.37,8.91M6,19V7H11.07L18,11V19A2,2 0 0,1 16,21H8A2,2 0 0,1 6,19Z" /></svg>)
                }
                </button> 
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default ShoppingCart
