import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

export default () => (
  <div className={cx("wrapper")}>
    <img src={require("../../assets/no-profile.png")} />
    
    <div className={cx("text")}>
      <div className={cx("username")}>Username</div>
      <div className={cx("name")}>name</div>
    </div>
  </div>
)