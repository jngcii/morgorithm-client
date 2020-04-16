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
import QuestionListScreen from "../../Screens/QuestionListScreen";
import SolutionListScreen from "../../Screens/SolutionListScreen";
import GroupListScreen from "../../Screens/GroupListScreen";
import GroupScreen from "../../Screens/GroupScreen";
import UserScreen from "../../Screens/UserScreen";
import ProfileEdit from "../../Screens/ProfileEditScreen";
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
              <Route exact path="/editprofile" component={ProfileEdit} />
              <Route exact path="/problem" component={ProblemListScreen} />
              <Route path="/problem/:originId(\\d+)/questions" component={QuestionListScreen} />
              <Route path="/problem/:originId(\\d+)/solutions" component={SolutionListScreen} />
              <Route path="/problem/:originId(\\d+)/:solutionId(\\d+)" component={SolutionScreen} />
              <Route path="/problem/:originId(\\d+)" component={ProblemScreen} />
              <Route exact path="/group" component={GroupListScreen} />
              <Route path="/group/:groupId(\\d+)" component={GroupScreen} />
              <Route path="/:username/questions" component={QuestionListScreen} />
              <Route path="/:username/solutions" component={SolutionListScreen} />
              <Route path="/:username(\\w+)" component={UserScreen} />
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
