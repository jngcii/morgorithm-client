import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import User from "../User";
import Cnt from "../Cnt";
const cx = classNames.bind(styles);

export default ({ solution }) => (
  <div className={cx("wrapper")}>
    <div className={cx("user")}>
      <User creator={solution.creator} />
    </div>

    <Cnt solution={solution} />
  </div>
);
