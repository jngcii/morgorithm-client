import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import LineSolution from "../LineSolution";
import LineQuestion from "../LineQuestion";
import EmptyBox from "../EmptyBox";
const cx = classNames.bind(styles);

export default ({ list, subject }) => (
  <section className={cx("wrapper")}>
    {!!list && list.length > 0 ? (
      list.map(sol => (
        <Link
          key={sol.id}
          className={cx("line")}
          to={`/problem/${sol.problem.id}/${sol.id}`}
        >
          {subject !== "question" ? (
            <LineSolution solution={sol} />
          ) : (
            <LineQuestion question={sol} isDetail={true} />
          )}
        </Link>
      ))
    ) : (
      <EmptyBox />
    )}
  </section>
);
