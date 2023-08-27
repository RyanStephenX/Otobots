import React from "react";
import Nav from "./components/Application/navBar";
import Header from "./components/Application/header";
import Body from "./components/Application/body";
import { productDisplay } from "./components/Application/data/data";

function App(props) {
  const product = productDisplay.map((item) => (
    <Body name={item.name} img={item.image} price={item.price} />
  ));
  return (
    <>
      <html>
        <head>
          <title>{/* Your title content */}</title>
        </head>
        <body>
          <header>
            <Header />
          </header>
          <div className="nav-container">
            <Nav />
          </div>
          {product}
        </body>
      </html>
    </>
  );
}
export default App;
