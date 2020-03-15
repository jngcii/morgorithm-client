import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

const Block = () => (
  <div className={cx("blockWrapper")}>
    <div className={cx("block")} />
  </div>
)

export default () => (
  <div className={cx("wrapper")}>
    <span className={cx("header")}>나의 Solving List</span>

    <div className={cx("body")}>
      {[1,2,3,4].map(n => <Block key={n} />)}
    </div>
  </div>
);