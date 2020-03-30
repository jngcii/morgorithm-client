import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import LineProblem from "../LineProblem";
const cx = classNames.bind(styles);

export default ({ problemList, subject }) => (
  <div className={cx("wrapper")}>
    <header className={cx("header")}>
      {subject}
      <span className={cx("more")}>더보기</span>
    </header>

    <section className={cx("body")}>
      {problemList.map(problem => (
        <LineProblem key={problem.id} problem={problem} />
      ))}
    </section>
  </div>
);
