import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import SectionUser from "../../Components/SectionUser";
import SolvingStatusBar from "../../Components/SolvingStatusBar";
import SectionSolvingList from "../../Components/SectionSolvingList";
import SectionProblem from "../../Components/SectionProblem";
import SectionQuestion from "../../Components/SectionQuestion";
const cx = classNames.bind(styles);

export default () => (
  <div className={cx("wrapper")}>
    <SectionUser />
    <SolvingStatusBar />
    <SectionSolvingList />
    <SectionProblem />
    <SectionQuestion />
  </div>
);