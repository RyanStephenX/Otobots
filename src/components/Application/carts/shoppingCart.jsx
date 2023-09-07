import React, { useEffect, useState } from "react";
import "./css/shoppingCart.css";

const PRICE_PER_ITEM = 5;
function Cart(index) {
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  useEffect(() => {
    setTotalPrice(quantity * PRICE_PER_ITEM);
  }, [quantity]);

  return (
    <>
      <div className="my-cart">
        <h1>My Cart</h1>
      </div>
      <div className="horizontal-line">
        <hr className="custom-line"></hr>
      </div>
      <div className="container">
        <div className="product-content">
          <div className="product-img">
            <img
              src="https://media.cnn.com/api/v1/images/stellar/prod/mens-shorts-madewell-courdory.jpg?c=16x9&q=h_720,w_1280,c_fill"
              alt=""
            />
          </div>
          <div className="product-name">
            <h2>Short</h2>
            <div className="product-description">
              <span>Price: </span>
              <span>Color:</span>
              <span>Size</span>
              <span>Stock</span>
            </div>
          </div>

          <div className="quantity">
            <div className="quan">
              <span className="hwmny">{quantity}</span>
            </div>{" "}
            <button className="button-4" onClick={decrement}>
              -
            </button>
            <button className="button-4" onClick={increment}>
              +
            </button>
          </div>

          {/* <div className="vertical-line"></div> */}
        </div>
      </div>
      <form className="checkout-form">
        <div className="item-container">
          <div className="item-total">
            <h6>Items: {quantity}</h6>
          </div>
          <div className="horizontal-line">
            <hr className="custom-line"></hr>
          </div>
          <div className="checkout">
            <p>Total: {totalPrice}</p>
            <button className="button-3">Checkout</button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Cart;
