import React from "react";
import { PRODUCTS } from "../../product";
import Product from "./product";
import "./shop.css";

const productData = PRODUCTS;

const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1> Products Shop</h1>
      </div>
      <div className="products">
        {productData.map((product) => (
          <Product list={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
