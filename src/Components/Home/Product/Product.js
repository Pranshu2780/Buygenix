import React from "react";
import "./Product.scss";
import powerbank from "./powerbank.jpg";
import { useStateValue } from "../../StateProvider";

function Product({ id, title, price, image, rating }) {
  const [basket, dispatch] = useStateValue();

  console.log("basket", basket);

  const addToBasket = () => {
    // Dispatch function

    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

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
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>🌟</p>
          ))}
      </div>

      <img className="product_image" src={image} alt="" />

      <button className="add_to_basket_button" onClick={addToBasket}>
        Add to basket
      </button>
    </div>
  );
}

export default Product;
