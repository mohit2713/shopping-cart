import React, { useContext } from "react";
import { PRODUCTS } from "../../product";
import { ShopContext } from "../../context/shop-context";
import CartItem from "./cartItem";
import "./cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  return (
    
    <div className="cart">
      <div className="cart-heading">
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart-items">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p className="subtotal"> Subtotal:- $ {totalAmount}</p>
          <button onClick={() => navigate("/")}> Continue Shopping</button>
          <button> Checkout</button>
        </div>
      ) : (
        <h1>Empty Cart</h1>
      )}
    </div>
  );
};

export default Cart;
