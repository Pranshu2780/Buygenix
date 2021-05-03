import React from "react";
import "./Home.scss";
import shoppingimage from "./shoppingimage.jpg";
import Product from "./Product/Product";
import powerbank from './Product/powerbank.jpg'

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img className="ShoppingImage" src={shoppingimage} alt="" />
      </div>

      <div className="body_row">
        <Product title="first product" price={20} image={powerbank} rating={3} />
        <Product title="second product" price={10} image={powerbank} rating={4}/>
      </div>

      <div className="body_row">
        <Product title="third product" price={70} image={powerbank} rating={1} />
        <Product title="fourth product" price={90} image={powerbank} rating={5} />
        <Product title="fifth product" price={50} image={powerbank} rating={2}/>
      </div>

      <div className="body_row">
        <Product title="sixth product" price={80} image={powerbank} rating={3} /> 
      </div>
    </div>
  );
}

export default Home;
