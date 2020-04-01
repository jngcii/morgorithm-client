import React from "react";
import { Switch, Route } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import Nav from "../Nav";
import SideBar from "../SideBar";
import MainScreen from "../../Screens/MainScreen";
import ProblemListScreen from "../../Screens/ProblemListScreen";
import ProblemScreen from "../../Screens/ProblemScreen";
import SolutionScreen from "../../Screens/SolutionScreen";
import QuestionListScreen from "../../Screens/QuestionListScreen"
import GroupListScreen from "../../Screens/GroupListScreen";
import GroupScreen from "../../Screens/GroupScreen";
import UserScreen from "../../Screens/UserScreen";
import Footer from "../Footer";
const cx = classNames.bind(styles);

export default ({isLoggedIn}) => {

  return (
    <div className={cx("wrapper")}>
      <Nav isLoggedIn={isLoggedIn} />

      {isLoggedIn ? (
        <section className={cx("body")}>
          <SideBar />

          <div className={cx("content")}>
            <Switch>
              <Route exact path="/" component={MainScreen} />
              <Route exact path="/problem" component={ProblemListScreen} />
              <Route path="/problem/:problemId/:solutionId" component={SolutionScreen} />
              <Route path="/problem/:problemId" component={ProblemScreen} />
              <Route path="/question" component={QuestionListScreen} />
              <Route exact path="/group" component={GroupListScreen} />
              <Route path="/group/:id" component={GroupScreen} />
              <Route path="/:username" component={UserScreen} />
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
