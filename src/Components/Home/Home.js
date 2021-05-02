import React from "react";
import "./Home.scss";
import shoppingimage from "./shoppingimage.jpg";
import Product from "./Product/Product";
import powerbank from './Product/powerbank.jpg'

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img className="ShoppingImage" src={shoppingimage} />
      </div>

      <div className="body_row">
        <Product title="first product" price={20} image={powerbank} rating={3} />
        <Product />
      </div>

      <div className="body_row">
        <Product />
        <Product />
        <Product />
      </div>

      <div className="body_row">
        <Product /> 
      </div>
    </div>
  );
}

export default Home;
