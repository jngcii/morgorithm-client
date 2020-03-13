import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

export default ({isLoggedIn, setIsLoggedIn}) => (
  <nav className={cx(isLoggedIn ? "in" : "out")}>
    <div className={cx("logoContainer")}>
      <span className={cx(isLoggedIn ? "in" : "out")}>morgorithm</span>
    </div>

    {/* blank division */}
    <div className={cx(isLoggedIn ? "fakein" : "fakeout")} />

    <div className={cx("testContainer")}>
      <div className={cx("testBtn")} onClick={() => {
        setIsLoggedIn(!isLoggedIn)
      }} />
    </div>
  </nav>
);