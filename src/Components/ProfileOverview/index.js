import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

export default () => (
  <div className={cx("wrapper")}>
    <img src={require("../../assets/no-profile.png")} />
    <span>Username</span>
    <span>email@gmail.com</span>
    <span>name</span>
    <button>수정하기</button>
  </div>
)