import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import bt_add_to_cart from "../assets/icons/bt_add_to_cart.svg";
import "../Styles/ProductItem.scss";

export const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  const handleCart = (item) => addToCart(item);

  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt={product.title} />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleCart(product)}>
          <img src={bt_add_to_cart} alt="" />
        </figure>
      </div>
    </div>
  );
};
