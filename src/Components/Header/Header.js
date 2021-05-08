import React from "react";
import "./Header.scss";
import Buygenix_logo from "./Buygenix_logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      {/*logo in Header*/}
      <Link to="/">
        <img className="header_logo" src={Buygenix_logo} alt="" />
      </Link>

      {/* Search Bar */}
      <div className="search_bar">
        <input className="search_bar_text" type="text" />
        <SearchIcon className="search_icon" />
      </div>

      {/* Div containing Sign In, Order, options */}
      <div className="header_right_container">
        <div className="sign_in">Sign In</div>

        <div className="orders">Orders</div>

        <div className="prime">Prime</div>
      </div>

      <Link to="/Checkout">
        <div className="basket">
          <ShoppingCartIcon className="basket_icon" />
          <span className="count">0</span>
        </div>
      </Link>
    </div>
  );
}

export default Header;
