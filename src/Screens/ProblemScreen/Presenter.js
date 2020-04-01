import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import Problem from "../../Components/Problem";
import UploadCode from "../../Components/UploadCode";
import ListSolution from "../../Components/ListSolution";
const cx = classNames.bind(styles);

export default ({ problem, solutionList, questionList }) => (
  <div className={cx("wrapper")}>
    <Problem problem={problem} />
    <UploadCode />

    <div className={cx("lists")}>
      <div className={cx("list")}>
        <ListSolution list={solutionList} subject={"solution"} problem={problem} />
      </div>
      <div className={cx("list")}>
        <ListSolution list={questionList} subject={"question"} problem={problem} />
      </div>
    </div>
  </div>
);
