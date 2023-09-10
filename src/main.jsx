import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Cart from "./components/Application/carts/cartApp.jsx";
import Checkout from "./components/Application/checkOut/checkOut";
// import User from "./userLog";
import { CheckoutFrame } from "./components/Application/checkOut/frames.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <Cart />
  </React.StrictMode>
);
