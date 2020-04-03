import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

export default ({profile}) => (
  <div className={cx("wrapper")}>
    <img src={require("../../assets/no-profile.png")} />
    <span>{profile.email}</span>
    <span>{profile.username}</span>
    <span>{profile.name}</span>
    <span className={cx("edit")}>edit</span>
  </div>
)