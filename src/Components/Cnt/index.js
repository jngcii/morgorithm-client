import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

export default ({ solution }) => (
  <div className={cx("wrapper")}>
    <div className={cx("cnt")}>
      <img src={require("../../assets/grey-small-view.png")} />
      <span className={cx("num")}>{solution.view}</span>
    </div>

    <div className={cx("cnt")}>
      <img src={require("../../assets/grey-small-like.png")} />
      <span className={cx("num")}>{solution.like_count}</span>
    </div>

    <div className={cx("cnt")}>
      <img src={require("../../assets/grey-small-comment.png")} />
      <span className={cx("num")}>{solution.comment_count}</span>
    </div>
  </div>
);