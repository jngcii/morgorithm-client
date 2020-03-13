import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

export default ({ isLoggedIn }) => (
  <footer className={cx(isLoggedIn ? "in" : "out")}>
    <ul>
      <li>INTRODUCTION</li>
      <li>INFORMATION</li>
      <li>CUSTOMER SERVICE</li>
      <li>LANGUAGE</li>
    </ul>
  </footer>
);
