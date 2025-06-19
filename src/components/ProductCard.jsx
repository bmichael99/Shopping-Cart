import "./ProductCard.css"


function ProductCard({title, price, img}) {


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
        <button className="decrease-quantity">-</button>
        <input type="number" value="0"/>
        <button className="increase-quantity">+</button>
      </div>
      <button className = "addItemButton">Add To Cart</button>
    </div>
  </div>
  );
}

export default ProductCard