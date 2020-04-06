import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

export default ({ bgColor }) => (
  <div className={cx("empty", bgColor && "tp")}>
    <span>목록이 비어있습니다.</span>
  </div>
);
