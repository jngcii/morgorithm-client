import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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

  return (
    <div className={cx("wrapper")}>
      <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      {isLoggedIn ? (
        <section className={cx("body")}>
          <SideBar />

          <div className={cx("content")}>
            <Switch>
              <Route exact path="/">
                <MainScreen />
              </Route>

              <Route path="/problem">
                <ProblemScreen />
              </Route>

              <Route path="/question">{/* <ProblemScreen /> */}</Route>

              <Route path="/user">{null}</Route>
            </Switch>
          </div>
        </section>
      ) : (
        <div className={cx("fake")} />
      )}

      <Footer isLoggedIn={isLoggedIn} />
    </div>
  );
};
