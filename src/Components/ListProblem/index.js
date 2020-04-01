import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import LineProblem from "../LineProblem";
const cx = classNames.bind(styles);

export default ({ problemList }) => (
  <div className={cx("wrapper")}>
    <section className={cx("body")}>
      {problemList.map(problem => (
        <LineProblem key={problem.id} problem={problem} />
      ))}
    </section>
  </div>
);
