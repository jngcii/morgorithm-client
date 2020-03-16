import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

export default ({name, count}) => (
  <div className={cx("wrapper")}>
    <div className={cx("name")}>{name}</div>
    <div className={cx("count")}>{count}</div>
  </div>
);