import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

export default () => (
  <div className={cx("wrapper")}>
    <div className={cx("container")}>
      <div className={cx("each")}>전체 문제 (145/531)</div>
      <hr />
      <div className={cx("each")}>A형 대비 (15/45)</div>
      <div className={cx("each")}>DP 조지기 (15/45)</div>
      <div className={cx("each")}>Kakao 기출 (2/60)</div>
    </div>
  </div>
);
