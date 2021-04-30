import React from "react";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      {/*logo in Header*/}
      <img className="header_logo" src="../../public/logo.jfif" />
      {/* Search Bar */}
      <div className="search_bar">
        <input className="search_bar_text" type="text" />
      </div>

      {/* Div containing Sign In, Order, options */}
      <div className="header_right_container">
        <div className="Sign_In"></div>

        <div className="Orders"></div>

        <div className="Prime"></div>
      </div>
    </div>
  );
}

export default Header;
