import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import Nav from "../Nav";
import SideBar from "../SideBar";
import MainScreen from "../../Screens/MainScreen";
import ProblemScreen from "../../Screens/ProblemScreen";
import Footer from "../Footer";
const cx = classNames.bind(styles);

export default () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [screen, setScreen] = useState("main");

  return (
    <div className={cx("wrapper")}>
      <Nav
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
        setScreen={setScreen}
      />
      {isLoggedIn ? (
        <section className={cx("body")}>
          <SideBar screen={screen} />

          <div className={cx("content")}>
            {screen === "main" && <MainScreen />}
            {screen === "problem" && <ProblemScreen />}
          </div>
        </section>
      ) : (
        <div className={cx("fake")} />
      )}
      <Footer isLoggedIn={isLoggedIn} />
    </div>
  );
};
