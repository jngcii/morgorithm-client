import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

export default () => (
  <div className={cx("wrapper")}>
    <div className={cx("eachStatus")}>
      <div className={cx("dot", "all")} />
      <div className={cx("txt")}>전체 문제</div>
      <div className={cx("cnt")}>247</div>
    </div>

    <div className={cx("eachStatus")}>
      <div className={cx("dot", "success")} />
      <div className={cx("txt")}>내가 푼 문제</div>
      <div className={cx("cnt")}>145</div>
    </div>

    <div className={cx("eachStatus")}>
      <div className={cx("dot", "fail")} />
      <div className={cx("txt")}>내가 질문한 문제</div>
      <div className={cx("cnt")}>5</div>
    </div>
  </div>
);