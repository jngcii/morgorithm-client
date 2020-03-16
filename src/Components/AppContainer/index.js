import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import Nav from "../Nav";
import SideBar from "../SideBar";
import MainScreen from "../../Screens/MainScreen";
import Footer from "../Footer";
const cx = classNames.bind(styles);

export default () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className={cx("wrapper")}>
      <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      {isLoggedIn ? (
        <section className={cx("body")}>
          <SideBar />
          <MainScreen />
        </section>
      ) : (
        <div className={cx("fake")} />
      )}
      <Footer isLoggedIn={isLoggedIn} />
    </div>
  );
};
