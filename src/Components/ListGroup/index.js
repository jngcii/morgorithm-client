import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

export default () => (
  <div className={cx("wrapper")}>
    <table>
      <thead>
        <tr>
          <th className={cx("name")}>그룹명</th>
          <th className={cx("cnt")}>인원</th>
          <th className={cx("btn")}></th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <th className={cx("name")}>ssafy31</th>
          <th className={cx("cnt")}>26</th>
          <th className={cx("btn")}>leave</th>
        </tr>
        <tr>
          <th className={cx("name")}>ssafy31</th>
          <th className={cx("cnt")}>26</th>
          <th className={cx("btn")}>leave</th>
        </tr>
        <tr>
          <th className={cx("name")}>ssafy31</th>
          <th className={cx("cnt")}>26</th>
          <th className={cx("btn")}>leave</th>
        </tr>
      </tbody>
    </table>
  </div>
)