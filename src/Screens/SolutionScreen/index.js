import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import Problem from "../../Components/Problem";
import UploadCode from "../../Components/UploadCode";
const cx = classNames.bind(styles);

export default () => (
  <div className={cx("wrapper")}>
    <Problem />
    <UploadCode />
  </div>
);