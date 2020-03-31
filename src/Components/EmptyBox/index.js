import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

export default () => (
  <div className={cx("empty")}>
    <span>목록이 비어있습니다.</span>
  </div>
);
