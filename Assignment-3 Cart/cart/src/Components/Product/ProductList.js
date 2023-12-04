import React from 'react'
import Product from './Product';
import { useSelector } from "react-redux";

function ProductList() {
  const products = useSelector(state => state.product);
  return (
    <div className="productContainer" id="lws-productContainer">
      {products.map(product => <Product key={product.id} product={product} />)}
          
    </div>
  )
}

export default ProductList;