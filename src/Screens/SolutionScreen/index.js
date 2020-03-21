import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import Problem from "../../Components/Problem";
import UploadCode from "../../Components/UploadCode";
import ListSolution from "../../Components/ListSolution";
const cx = classNames.bind(styles);

export default () => (
  <div className={cx("wrapper")}>
    <Problem />
    <UploadCode />

    <div className={cx("lists")}>
      <div className={cx("list")}>
        <ListSolution />
      </div>
      <div className={cx("list")}>
        <ListSolution />
      </div>
    </div>
  </div>
);