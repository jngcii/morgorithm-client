import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import Solution from "../../Components/Solution";
import Like from "../../Components/Like";
import Comment from "../../Components/Comment";
const cx = classNames.bind(styles);

export default ({ likable, solutionId, counts, comments, msg, getComments, onSubmitComment, onLikeSolution }) => (
  <div className={cx("wrapper")}>
    <Solution solutionId={solutionId} counts={counts} setLikable={likable.onChange} />
    {likable.value && <Like counts={counts} onLike={onLikeSolution} />}
    <Comment comments={comments} msg={msg} getComments={getComments} onSubmitComment={onSubmitComment} />
  </div>
);