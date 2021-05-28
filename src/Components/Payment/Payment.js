import React from "react";
import "./Payment.scss";
import { useStateValue } from "../StateProvider";
import CheckProduct from "../Checkout/CheckProduct";
import { Link } from "react-router-dom";
import Checkout from "../Checkout/Checkout";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [disable, setDisable] = useState(true);

  const handleSubmit = (e) => {};
  const handleChange = (event) => {
    setDisable(event.empty);
    setError(event.error? event.error.message:"");
  };
  return (
    <div className="payment">
      <div className="payment-container">
        <Link to="/checkout">
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
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
            </form>
            {/* <CardElement> </CardElement> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
