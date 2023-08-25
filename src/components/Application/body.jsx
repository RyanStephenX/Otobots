import React from "react";
import classes from "./css/body.module.css";
import Data from "./data/data";

function Body() {
  return (
    <>
      <div className={classes.card1}>
        <div className={classes.wINDBREAKER}></div>
        <div className={classes.image12}></div>
        <div className={classes.rectangle5}></div>
        {/* <div className={classes._50}>50%</div> */}
        <div className={classes._35000}>₱3500.00</div>
      </div>
    </>
  );
}

export default Body;
