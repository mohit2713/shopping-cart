import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "./shop.css";

const Product = (props) => {
  const { id, name, price, image } = props.list;
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemsAmount = cartItems[id];
  return (
    <div className="product">
      <div className="product-container-img">
        <img src={image} alt={Product.img} className="product-images" />
      </div>
      <div className="desciption">
        <p>
          <b>{name}</b>
        </p>
        <p>
          <b>$ {price}</b>
        </p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Add to cart {cartItemsAmount > 0 && <>({cartItemsAmount})</>}
      </button>
    </div>
  );
};

export default Product;
