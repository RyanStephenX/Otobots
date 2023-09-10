import React, { useEffect, useState } from "react";
import "./css/shoppingCart.css";
import { cartItem } from "../data/cart_Item/cart_Item";

function CartCheckout(props) {
  return (
    <>
      <div className="container">
        <form className="checkout-form">
          <div className="item-container">
            <div className="item-total">
              <h6>Items:{props.quantity}</h6>
            </div>
            <div className="horizontal-line2">
              <hr className="custom-line"></hr>
            </div>
            <div className="checkout">
              <p>Total: {props.totalPrice}</p>
              <button className="button-3">Checkout</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default CartCheckout;
