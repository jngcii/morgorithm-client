import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

const Profile = () => (
  <div className={cx("navProfile")}>
    <img src={require("../../assets/no-profile.png")} draggable={false} />
  </div>
);

export default () => (
  <ul className={cx("navlist")}>
    <li>problem solving</li>
    <li>
      <Profile />
    </li>
  </ul>
);
