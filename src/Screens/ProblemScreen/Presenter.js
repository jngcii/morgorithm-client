import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import Problem from "../../Components/Problem";
import UploadCode from "../../Components/UploadCode";
import ListSolution from "../../Components/ListSolution";
const cx = classNames.bind(styles);


const LoadingBox = () => (
  <div className={cx("loading")} />
);


export default ({ solutionList, questionList }) => (
  <div className={cx("wrapper")}>
    <Problem />
    <UploadCode />

    <div className={cx("lists")}>
      <div className={cx("list")}>
        {solutionList !== null && solutionList.length > 0 && (
          <ListSolution list={solutionList} subject={"solution"} />
        )}
        {solutionList === null && <LoadingBox />}
      </div>
      <div className={cx("list")}>
        {questionList !== null && questionList.length > 0 && (
          <ListSolution list={questionList} subject={"question"} />
        )}
        {questionList === null && <LoadingBox />}
      </div>
    </div>
  </div>
);
