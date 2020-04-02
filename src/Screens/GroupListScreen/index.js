import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import ProfileOverview from "../../Components/ProfileOverview";
import Group from "../../Components/Group";
const cx = classNames.bind(styles);

export default () => (
  <div className={cx("wrapper")}>
    <ProfileOverview />
    <Group />
  </div>
);
