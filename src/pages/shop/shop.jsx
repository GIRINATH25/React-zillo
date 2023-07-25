import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./Com.css";

export const Shop = () => {
  return (
      <div className="con">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
  );
};
