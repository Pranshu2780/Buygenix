import React from "react";
import "./checkout.scss";
import { useStateValue } from "../StateProvider";

function CheckProduct({ id, title, price, image, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "Remove_From_Basket",
      id: id,
    });
  };
  return (
    <div className="CheckProduct">
      <img className="check-image" src={image} alt="" />

      <div className="checkProduct_info">
        <p className="checkProduct_title"> {title}</p>

        <p className="checkProduct_price">
          <small>Rs.</small>
          <strong>{price}</strong>
        </p>
        <div className="checkProduct_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove</button>
      </div>
    </div>
  );
}

export default CheckProduct;
