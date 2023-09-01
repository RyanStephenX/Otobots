import React, { useEffect, useState } from "react";

const PRICE_PER_ITEM = 5;
function Cart() {
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
      <div className="container">
        <div className="product-image">
          <img src="" alt="" />
        </div>
        <div className="product-content">
          <h2>Product Name:</h2>
          <h3>Price:</h3>
          <h4>Quantity: {quantity}</h4>
          <button onClick={increment}>+</button>
          <button onClick={decrement}>-</button>
        </div>
      </div>
      <div className="item-total">
        <h6>Items: {quantity}</h6>
        <p>Total: {totalPrice}</p>
      </div>
    </>
  );
}

export default Cart;
