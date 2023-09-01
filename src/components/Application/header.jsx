import React, { useEffect, useState } from "react";
import classes from "./css/header.module.css";
import Nav from "./navBar";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import userLogin from "../../userLog";

function Header(props) {
  const [show, handleShow] = useState(true);

  const transitionNavBar = () => {
    if (window.scrollY > 250) {
      handleShow(false);
    } else {
      handleShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <>
      {/* <div className={classes.frame1}> */}
      <Router>
        <div className={classes.frame2}>
          <div className={classes.image2}></div>
          <div className={classes.image3}></div>
          <div className={classes.image1}></div>

          <div className={classes.oTOBOTS}>OTOBOTS</div>
          <div className={classes.oTOBOTS2}>OTOBOTS</div>
          <div className={classes.aPPAREL}>APPAREL</div>
          <div className={classes.oTOBOTS3}>OTOBOTS</div>
          <div className={classes.oTOBOTS4}>OTOBOTS</div>
          {/* <div className={classes.rectangle2}></div> */}
          <div className={classes.rectangle2}>
            <Link to="../../userLog">SHOP NOW</Link>
          </div>

          {/* <a href="../userLog.jsx" className={classes.rectangle2}>
            <div className={classes.sHOPNOW}>SHOP NOW</div>
          </a> */}
        </div>
      </Router>

      {/* <Route path="../../userLog" component={userLogin} /> */}

      {/* </div> */}
    </>
  );
}

export default Header;
