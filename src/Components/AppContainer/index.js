import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import Nav from "../Nav";
import SideBar from "../SideBar";
import MainScreen from "../../Screens/MainScreen";
import ProblemListScreen from "../../Screens/ProblemListScreen";
import ProblemScreen from "../../Screens/ProblemScreen";
import SolutionScreen from "../../Screens/SolutionScreen";
import GroupListScreen from "../../Screens/GroupListScreen";
import GroupScreen from "../../Screens/GroupScreen";
import Footer from "../Footer";
const cx = classNames.bind(styles);

export default () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

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

              <Route exact path="/problem">
                <ProblemListScreen />
              </Route>

              <Route path="/problem/:problemId/:solutionId">
                <SolutionScreen />
              </Route>

              <Route path="/problem/:problemId">
                <ProblemScreen />
              </Route>

              <Route path="/question">
                {/* <ProblemListScreen /> */}
              </Route>

              <Route exact path="/group">
                <GroupListScreen />
              </Route>

              <Route path="/group/:id">
                <GroupScreen />
              </Route>

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
