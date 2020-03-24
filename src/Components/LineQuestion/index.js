import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

export default ({ isDetail }) => (
  <div>
    {!!isDetail && (
      <div className={cx("prob")}>
        <span className={cx("span")}>Baekjoon</span>
        <span className={cx("span")}>1234</span>
        <span className={cx("span")}>악어새를 찾아라!</span>
        <span className={cx("span")}>D3</span>
      </div>
    )}

    <div className={cx("wrapper")}>
      <div className={cx("title")}>어디가 틀린지 모르겠어요 ㅠㅠ</div>

      <div className={cx("cnt")}>
        <img src={require("../../assets/grey-small-view.png")} />
        <span className={cx("num")}>298</span>
      </div>

      <div className={cx("cnt")}>
        <img src={require("../../assets/grey-small-comment.png")} />
        <span className={cx("num")}>113</span>
      </div>
    </div>
  </div>
);
