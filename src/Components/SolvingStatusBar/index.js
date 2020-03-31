import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

export default ({ status }) => (
  <div className={cx("wrapper")}>
    <div className={cx("eachStatus")}>
      <div className={cx("dot", "all")} />
      <div className={cx("txt")}>all problems</div>
      <div className={cx("cnt")}>{status.problemsCount}</div>
    </div>

    <div className={cx("eachStatus")}>
      <div className={cx("dot", "success")} />
      <div className={cx("txt")}>solved problems</div>
      <div className={cx("cnt")}>{status.solvedCount}</div>
    </div>

    <div className={cx("eachStatus")}>
      <div className={cx("dot", "fail")} />
      <div className={cx("txt")}>questions</div>
      <div className={cx("cnt")}>{status.questionsCount}</div>
    </div>
  </div>
);