import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import SectionUser from "../../Components/SectionUser";
import SolvingStatusBar from "../../Components/SolvingStatusBar";
import SectionSolvingList from "../../Components/SectionSolvingList";
import ListProblem from "../../Components/ListProblem";
const cx = classNames.bind(styles);

export default () => (
  <div className={cx("wrapper")}>
    <SectionUser />
    <SolvingStatusBar />
    <SectionSolvingList />
    <ListProblem subject={"모든 문제들"} />
    <ListProblem subject={"내가 질문한 문제들"} />
  </div>
);