import React, { useContext, useState } from "react";
import { Menu } from "./Menu";
import { AppContext } from "../context/AppContext";
import { MyOrder } from "../containers/MyOrder";

import "../Styles/Header.scss";

// import menu from "@icons/icon_menu.svg";
// import logo from "@logos/logo_yard_sale.svg";
// import shoppingCart from "@icons/icon_shopping_cart.svg";

export const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const { state } = useContext(AppContext);

  return (
    <nav>
      <img src="icons/icon_menu.svg" alt="menu" className="menu" />
      <div className="navbar-left">
        <img src="logos/logo_yard_sale.svg" alt="logo" className="nav-logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={() => setToggle(!toggle)}>
            platzi@example.com
          </li>
          <li
            className="navbar-shopping-cart"
            onClick={() => setToggleOrders(!toggleOrders)}
          >
            <img src="icons/icon_shopping_cart.svg" alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
          </li>
        </ul>
      </div>
      {toggle ? <Menu /> : null}
      {toggleOrders ? <MyOrder /> : null}
    </nav>
  );
};
