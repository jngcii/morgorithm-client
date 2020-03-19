import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import Auth from "../Auth";
import NavList from "../NavList";
const cx = classNames.bind(styles);

export default ({ isLoggedIn, setIsLoggedIn }) => (
  <nav className={cx(isLoggedIn ? "in" : "out")}>
    <div className={cx("logoContainer")}>
      <Link to="/" className={cx("link", isLoggedIn ? "in" : "out")} >morgorithm</Link>
    </div>

    {/* blank division */}
    <div className={cx(isLoggedIn ? "fakein" : "fakeout")} />

    <div className={cx("right")}>
      {isLoggedIn ? (
        <NavList />
      ) : (
        <Auth setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  </nav>
);
