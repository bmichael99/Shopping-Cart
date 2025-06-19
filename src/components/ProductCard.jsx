import "./ProductCard.css"
import { useState, useEffect } from 'react'
import { useOutletContext } from "react-router-dom";

function ProductCard({title, price, img}) {
  const [quantity, setQuantity] = useState(1);
  const { cart, setCart } = useOutletContext();

  function increase(){
    setQuantity((qty) => qty+1);
  }

   function decrease(){
    if(quantity > 0)
      setQuantity((qty) => qty-1);
  }

  function handleChange(e){
    const val = Math.max(0, parseInt(e.target.value) || 0);
    setQuantity(val);
  }

  function addItem(){
    if (quantity === 0) return;

    const index = cart.findIndex((item) => item.title === title);
    
    if (index !== -1){
      const updatedCart = [...cart];
      updatedCart[index].quantity += quantity;
      setCart(updatedCart);
    }else{
      const item = {title, price, img, quantity};
      setCart([...cart, item]);
    }

    setQuantity(0);
  }

  return(
  <div className="card-container">
    <div className="card-top">
      <img src={img} alt={title} />
    </div>
    <div className="card-middle">
      <p className="card-title two-line-text">{title}</p>
      <p className="card-price">${price}</p>
    </div>
    <div className="card-bottom">
      <div className="qty">
        <button className="decrease-quantity" onClick={decrease}>-</button>
        <input type="number" value={quantity} onChange={handleChange}/>
        <button className="increase-quantity" onClick={increase}>+</button>
      </div>
      <button className = "addItemButton" onClick={addItem}>Add To Cart</button>
    </div>
  </div>
  );
}

export default ProductCard