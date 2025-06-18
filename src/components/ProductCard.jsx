import "./ProductCard.css"


function ProductCard({title, price, img}) {


  return(
  <div className="card-container">
    <div className="card-top">
      <img src={img} alt={title} />
    </div>
    <div className="card-bottom">
      <p className="card-title">{title}</p>
      <p className="card-price">${price}</p>
    </div>
  </div>
  );
}

export default ProductCard