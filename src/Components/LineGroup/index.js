import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

export default ({ group }) => (
  <div className={cx("wrapper")}>
    <div className={cx("name")}>{group.name}</div>
    <div className={cx("count")}>{group.members_count}</div>
  </div>
);