import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import User from "../User";
const cx = classNames.bind(styles);

export default () => (
  <div className={cx("wrapper")}>
    <div className={cx("title")}>
      어디가 틀린지 모르겠어요 ㅠㅠ
    </div>

    <div className={cx("cnt")}>
      <img src={require("../../assets/grey-small-view.png")} />
      <span className={cx("num")}>298</span>
    </div>

    <div className={cx("cnt")}>
      <img src={require("../../assets/grey-small-comment.png")} />
      <span className={cx("num")}>113</span>
    </div>
  </div>
);
