import React from "react";
import "./Header.scss";
import Buygenix_logo from "./Buygenix_logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Header() {
  return (
    <div className="header">
      {/*logo in Header*/}
      <img className="header_logo" src={Buygenix_logo} />
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

      <div className="basket">
        <ShoppingCartIcon className="basket_icon" />
        <span className="count">0</span>
      </div>
    </div>
  );
}

export default Header;
