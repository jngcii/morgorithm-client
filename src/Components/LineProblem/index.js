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
        state: { problem }
      }}
    >
      <div className={cx("container")}>
        <div className={cx("num")}>{problem.origin.number || "-"}</div>
        <div className={cx("site")}>{problem.origin.category}</div>
        <div className={cx("title")}>
          <span>{problem.origin.title}</span>
        </div>
        {problem.origin.level && (
          <div className={cx(problem.origin.level ? "level" : "noLevel")}>
            level {problem.origin.level}
          </div>
        )}
        <div className={cx("solved", problem.is_solved && "yes")}>solved</div>
      </div>
    </Link>
  </div>
);
