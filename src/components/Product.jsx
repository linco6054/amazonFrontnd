import React from "react";
import Rating from "./Rating";
function Product({ product }) {
  return (
    <div key={product.id} className="card">
      <a href={`/product/${product._id}`}>
        <img className="medium" src={product.image} alt={product.name} />
      </a>
      <div className="card-body">
        <a href={`/product/${product.id}`}>
          <h2>{product.name}</h2>
        </a>

        <Rating rating={product.rating} numReviewes={product.numReviewes} />

        <div className="price">${product.price}</div>
      </div>
    </div>
  );
}

export default Product;
