import React, { useState } from "react";
import classes from "./css/body.module.css";

function Body(props) {
  return (
    <>
      <div className={classes.cardcontainer}>
        <div className={classes.card}>
          <img className={classes.img} src={props.img} alt="" />
          <div className={classes.container}>
            <h1>{props.name}</h1>
            <p>{props.price}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Body;
