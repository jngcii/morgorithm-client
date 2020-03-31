import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import LineProblem from "../LineProblem";
const cx = classNames.bind(styles);

export default ({ problemList, subject }) => (
  <div className={cx("wrapper")}>
    {subject && (
      <header className={cx("header")}>
        {subject}
        <Link className={cx("more", "link")} to={{pathname:'/problem', state:{}}}>더보기</Link>
      </header>
    )}

    <section className={cx("body")}>
      {problemList.map(problem => (
        <LineProblem key={problem.id} problem={problem} />
      ))}
    </section>
  </div>
);
