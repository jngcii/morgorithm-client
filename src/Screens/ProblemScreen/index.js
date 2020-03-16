import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import SolvingStatusBar from "../../Components/SolvingStatusBar";
import SectionList from "../../Components/SectionList";
const cx = classNames.bind(styles);

export default () => (
  <div className={cx("wrapper")}>
    <SolvingStatusBar />
    <SectionList subject={"내가 푼 문제들"} />
    <SectionList subject={"내가 질문한 문젤들"} />
    <SectionList subject={"아직 안푼 문제들"} />
  </div>
);