// Order Section

import React from "react";
import "./checkout.scss";
import checkout from "./checkout.jpg";
import Subtotal from "./Subtotal/Subtotal";
import { useStateValue } from "../StateProvider";
import CheckProduct from "./CheckProduct";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <img className="checkout_image" src={checkout} alt="" />

      <div className="container">
        <div className="basket_cart">
          <h3>Hi, {user?.email} </h3>
          
          <h2 className="checkout_title">Your Cart</h2>

          {basket.map((item) => (
            <CheckProduct
              id={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              rating={item.rating}
            />
          ))}
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
