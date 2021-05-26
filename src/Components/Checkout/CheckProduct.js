import React from "react";
import "./checkout.scss";

function CheckProduct(id, title, price, image, rating) {
  return (
    <div className="CheckoutProduct">
      <img className="checkout-image" src={image} />

      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title"> {title}</p>
        
      </div>
    </div>
  );
}

export default CheckProduct;
