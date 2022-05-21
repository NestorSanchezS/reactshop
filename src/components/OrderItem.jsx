import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "../Styles/OrderItem.scss";

export const OrderItem = ({ product }) => {
  const { removeFromCart } = useContext(AppContext);

  const handleRemove = (product) => removeFromCart(product);
  return (
    <div className="OrderItem">
      <figure>
        <img src={product.images[0]} alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <img
        src="../assets/icons/icon_close.png"
        alt="X"
        onClick={() => handleRemove(product)}
      />
    </div>
  );
};
