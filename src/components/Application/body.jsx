import React, { useState } from "react";
import classes from "./css/body.module.css";
import { productDisplay } from "./data/data";

function Body(props) {
  return (
    <>
      {productDisplay.map((item) => (
        <div className={classes.cardcontainer}>
          <div key={item.id} className={classes.card}>
            <img className={classes.img} src={item.image} alt="" />
            <div className={classes.content}>
              {/* <h1>{props.name}</h1>
            <p>{props.price}</p> */}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Body;
