import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

export default ({ problem }) => (
  <div className={cx("wrapper")}>
    <Link
      className={cx("link")}
      to={{
        pathname: `/problem/${problem.origin.id}`,
        state: {
          problemId: problem.origin.id
        }
      }}
    >
      <div className={cx("container")}>
        <div className={cx("num")}>{problem.origin.number || "-"}</div>
        <div className={cx("site")}>{problem.origin.category}</div>
        <div className={cx("title")}>{problem.origin.title}</div>
        <div className={cx(problem.origin.level ? "level" : "noLevel")}>
          {problem.origin.level}
        </div>
        <div className={cx("solved")} />
      </div>
    </Link>
  </div>
);
