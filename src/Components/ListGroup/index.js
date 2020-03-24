import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

export default ({ searching }) => (
  <div className={cx("wrapper")}>
    <table>
      <thead>
        <tr className={cx(!searching && "non")}>
          <th className={cx("name")}>그룹명</th>
          <th className={cx("cnt")}>인원</th>
          <th className={cx("btn")}></th>
        </tr>
      </thead>

      <tbody>
        <tr className={cx(!searching && "non")}>
          <th className={cx("name")}><Link className={cx("link")} to={"/group/123"}>ssafy31</Link></th>
          <th className={cx("cnt")}>26</th>
          <th className={cx("btn")}>
            <button>leave</button>
          </th>
        </tr>
        <tr className={cx(!searching && "non")}>
          <th className={cx("name")}>my group</th>
          <th className={cx("cnt")}>7</th>
          <th className={cx("btn")}>
            <button>leave</button>
          </th>
        </tr>
        <tr className={cx(!searching && "non")}>
          <th className={cx("name")}>your group</th>
          <th className={cx("cnt")}>12</th>
          <th className={cx("btn")}>
            <button>leave</button>
          </th>
        </tr>
      </tbody>
    </table>
  </div>
);
