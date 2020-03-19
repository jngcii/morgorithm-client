import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

export default ({ site, num, title, level, solved }) => (
  <div className={cx("wrapper")}>
    <Link className={cx("link")} to={`/problem/${1234}`}>
      <div className={cx("container")}>
        <div className={cx("num")}>{num}</div>
        <div className={cx("site")}>{site}</div>
        <div className={cx("title")}>{title}</div>
        <div className={cx(level ? "level" : "noLevel")}>{level}</div>
        <div className={cx("solved")} />
      </div>
    </Link>
  </div>
);
