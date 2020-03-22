import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import Solution from "../../Components/Solution";
const cx = classNames.bind(styles);

export default () => (
  <div className={cx("wrapper")}>
    <Solution />
  </div>
);