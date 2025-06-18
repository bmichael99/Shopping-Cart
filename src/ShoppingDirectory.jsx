import './ShoppingDirectory.css'
import ProductCard from './components/ProductCard.jsx'
import Navbar from './components/Navbar.jsx'
import { useEffect, useState, useRef } from 'react'




function ShoppingDirectory(){
  const [products, setProducts] = useState([]);

  async function callAPI(count){
    let requests = [];

    for(let i = 1; i <= count;i++){
      requests.push(fetch(`https://fakestoreapi.com/products/${i}`).then(res => res.json()));
    }

    const productData = await Promise.all(requests);
    console.log(productData);
    setProducts(productData);
  }

  const hasFetched = useRef(false);

  useEffect(() => {
    if (!hasFetched.current) {
      callAPI(10);
      hasFetched.current = true;
    }
  }, [])





  return(
    
    <div classname = "shopping-body">
      <Navbar />
      
      <div className="cards-container">
      {
        products.map((product) => 
          <ProductCard key = {product.id} title = {product.title} price = {product.price} img = {product.image}/>
        )
      }
      </div>
    </div>
  );

}

export default ShoppingDirectory