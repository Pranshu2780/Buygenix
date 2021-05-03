import React from "react";
import "./Product.scss";
import powerbank from "./powerbank.jpg";

function Product({ id, title, price, image, rating }) {
  return (
    <div className="product">
      {/* Product Name, Ratings, Price, Add to basket button */}
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>Rs.</small>
          <strong>{price}</strong>
        </p>
      </div>

      <div className="product_rating">
        {Array(rating).fill().map((_,i)=>(
           <p>🌟</p>
        ))}
       
      </div>

      <img className="product_image" src={image} alt="" />
      
      <button className="add_to_basket_button">Add to basket</button>
    </div>
  );
}

export default Product;
