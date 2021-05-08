import React from "react";
import "./checkout.scss";
import checkout from "./checkout.jpg";
import Subtotal from "./Subtotal/Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <img className="checkout_image" src={checkout} alt="" />

      <div className="container">
        <div className="basket_cart">
          <h2 className="checkout_title">Your Cart</h2>
        </div>

        <div className="checkout_right">
          <h2 className="amount_heading">Total Amount</h2>
          {/* Total amount to be paid */}
          <Subtotal />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
