import React from "react";
import "./Payment.scss";
import { useStateValue } from "../StateProvider";
import CheckProduct from "../Checkout/CheckProduct";
import { Link } from "react-router-dom"
import Checkout from "../Checkout/Checkout"

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="payment">
      <div className="payment-container">
          <Link to= "/checkout">
            <h1>Checkout {basket?.length} items</h1>
          </Link>
        <div className="payment-row">
          <div className="payment-title">
            <h3> Delivery Address </h3>
            <div className="payment-address">
              <p> {user?.email}</p>
              <p> 399, Satya Nagar, Raebareli </p>
            </div>
          </div>
        </div>

        <div className="payment-row">
          <div className="payment-title">
            <h3> Review Items </h3>
          </div>
          <div className="payment-items">
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
        </div>

        <div className="payment-row">
          <div className="payment-title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment-details">

          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
