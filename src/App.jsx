import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Application/navBar";
import Header from "./components/Application/header";
import Body from "./components/Application/body";
import { productDisplay } from "./components/Application/data/data";
import BodyCarousel from "./components/Application/bodyCarousel";
import {
  displayCarousel,
  responsive,
} from "./components/Application/data/item_display/displayCarousel";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import userLogin from "./userLog";

function App(props) {
  const product = productDisplay.map((item) => (
    <Body key={item.id} name={item.name} img={item.image} price={item.price} />
  ));

  const carousel = displayCarousel.map((prod) => (
    <BodyCarousel key={prod.id} img1={prod.image} />
  ));
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="body">
        {product}
        {/* <Carousel responsive={responsive}>{carousel} </Carousel> */}
        <Carousel showThumbs={false} responsive={responsive}>
          {carousel}
        </Carousel>
      </div>
    </>
  );
}
export default App;
