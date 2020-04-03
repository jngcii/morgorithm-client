import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import Solution from "../../Components/Solution";
import Comment from "../../Components/Comment";
const cx = classNames.bind(styles);

export default ({ solutionId, counts, comments, msg, getComments, onSubmitComment }) => (
  <div className={cx("wrapper")}>
    <Solution solutionId={solutionId} counts={counts} />
    <Comment comments={comments} msg={msg} getComments={getComments} onSubmitComment={onSubmitComment} />
  </div>
);