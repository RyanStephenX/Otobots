import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Cart from "./components/Application/carts/shoppingCart";
import Checkout from "./components/Application/checkOut/checkOut";
// import User from "./userLog";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <Checkout />
  </React.StrictMode>
);
