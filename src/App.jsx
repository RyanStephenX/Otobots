import React from "react";
import "./App.css";
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

function App(props) {
  const product = productDisplay.map((item) => (
    <Body key={item.id} name={item.name} img={item.image} price={item.price} />
  ));

  const carousel = displayCarousel.map((prod) => (
    <BodyCarousel key={prod.id} img1={prod.image} />
  ));
  return (
    <>
      <Header />
      {product}
      {/* <Carousel responsive={responsive}>{carousel} </Carousel> */}
      <Carousel showThumbs={false} responsive={responsive}>
        {carousel}
      </Carousel>
    </>
  );
}
export default App;
