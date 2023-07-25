import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="ComBox">
      <div className="contai">
    <div className="img">
      <img src={productImage} />
      <div className="ds">
        <p>
          <b>{productName}</b>
        </p>
        <p> ₹{price}</p>
      </div>
      <button className="addToCart" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
    </div>
    </div>
  );
};
