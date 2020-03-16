import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import Auth from "../Auth";
import NavList from "../NavList";
const cx = classNames.bind(styles);

export default ({ isLoggedIn, setIsLoggedIn, setScreen }) => (
  <nav className={cx(isLoggedIn ? "in" : "out")}>
    <div className={cx("logoContainer")}>
      <span className={cx(isLoggedIn ? "in" : "out")} onClick={()=>{
        if(isLoggedIn) setScreen("main")
      }}>morgorithm</span>
    </div>

    {/* blank division */}
    <div className={cx(isLoggedIn ? "fakein" : "fakeout")} />

    <div className={cx("right")}>
      {isLoggedIn ? (
        <NavList setScreen={setScreen} />
      ) : (
        <Auth setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  </nav>
);
