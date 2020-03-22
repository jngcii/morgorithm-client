import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import LineSolution from "../LineSolution";
import LineQuestion from "../LineQuestion";
const cx = classNames.bind(styles);

export default ({ subject }) => (
  <div className={cx("wrapper")}>
    <header>
      {subject === "solution" && <h4>다른 사람의 풀이</h4>}
      {subject === "question" && <h4>질문 목록</h4>}
      <div class={cx("more")}>더보기</div>
    </header>

    <section>
      <Link className={cx("line")} to={{pathname:"/problem/1234/1234"}}>
        {subject === "solution" && <LineSolution />}
        {subject === "question" && <LineQuestion />}
      </Link>

      <Link className={cx("line")} to={{pathname:"/problem/1234/1234"}}>
        {subject === "solution" && <LineSolution />}
        {subject === "question" && <LineQuestion />}
      </Link>
    </section>
  </div>
);
