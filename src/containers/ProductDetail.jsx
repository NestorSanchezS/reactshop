import React from "react";
import { ProductInfo } from "../components/ProductInfo";
import icon_close from "../assets/icons/icon_close.png";
import "../styles/ProductDetail.scss";

export const ProductDetail = () => {
  return (
    <aside className="ProductDetail">
      <div className="ProductDetail-close">
        <img src={icon_close} alt="close" />
      </div>
      <ProductInfo />
    </aside>
  );
};
