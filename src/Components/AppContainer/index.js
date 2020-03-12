import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";

const cx = classNames.bind(styles);

export default () => {
  // const isLoggedIn = false;

  return (
    <div className={cx("wrapper")}>
      <nav className={cx("nav")}>
        <div className={cx("logoContainer")}>
          <div className={cx("logo")}>morgorithm</div>
        </div>
        <div className={cx("authContainer")}>
          <div className={cx("auth")} />
          <div className={cx("auth")} />
        </div>
      </nav>
    </div>
  );
};
