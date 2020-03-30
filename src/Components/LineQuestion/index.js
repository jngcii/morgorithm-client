import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

export default ({ question, isDetail }) => (
  <div>
    {!!isDetail && (
      <div className={cx("prob")}>
        <span className={cx("span")}>{question.problem.category}</span>
        <span className={cx("span")}>{question.problem.number}</span>
        <span className={cx("span")}>{question.problem.title}</span>
        {question.problem.level && (
          <span className={cx("span")}>{question.problem.level}</span>
        )}
      </div>
    )}

    <div className={cx("wrapper")}>
      <div className={cx("title")}>{question.caption}</div>

      <div className={cx("cnt")}>
        <img src={require("../../assets/grey-small-view.png")} />
        <span className={cx("num")}>{question.view}</span>
      </div>

      <div className={cx("cnt")}>
        <img src={require("../../assets/grey-small-comment.png")} />
        <span className={cx("num")}>{question.comment_count}</span>
      </div>
    </div>
  </div>
);
