import React from "react";
import "./checkout.scss";
import checkout from "./checkout.jpg";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img className="checkout_image" src={checkout} alt="" />
      </div>
    </div>
  );
}

export default Checkout;
