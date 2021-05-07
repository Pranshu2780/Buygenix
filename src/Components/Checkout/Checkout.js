import React from "react";
import "./checkout.scss";
import checkout from "./checkout.jpg";

function Checkout() {
  return (
    <div className="checkout">
      <img className="checkout_image" src={checkout} alt="" />

      <div className="container">
    
        <div className="basket_cart">
          <h2 className="checkout_title">Your Cart</h2>
          
        </div>

        <div className="checkout_right">
          {/* Total amount to be paid */}
          <h2 className="amount_heading">Total Amount</h2>
        </div>
    
      </div>
    
    </div>
  );
}

export default Checkout;
