import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import Problem from "../../Components/Problem";
import UploadCode from "../../Components/UploadCode";
import ListSolution from "../../Components/ListSolution";
import LoadingBox from "../../Components/LoadingBox";
const cx = classNames.bind(styles);

export default ({ problem, solutionList, questionList }) => (
  <div className={cx("wrapper")}>

    {problem ? <Problem problem={problem} /> : <LoadingBox />}

    <UploadCode />

    <div className={cx("lists")}>
      <div className={cx("list")}>
        <div className={cx("listHeader")}>
          Solutions
          <Link className={cx("more", "link")} to={`/`}>더 보기</Link>
        </div>
        <ListSolution list={solutionList} subject={"solution"}/>
      </div>

      <div className={cx("list")}>
        <div className={cx("listHeader")}>
          Questions
          {problem && <Link className={cx("more", "link")} to={`/problem/${problem.origin.id}/questions`}>더 보기</Link>}
        </div>
        <ListSolution list={questionList} subject={"question"}/>
      </div>
    </div>

  </div>
);
