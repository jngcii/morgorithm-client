import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import LineProblem from "../LineProblem";
const cx = classNames.bind(styles);

export default () => (
  <div className={cx("wrapper")}>
    <header className={cx("header")}>
      Problems
      <span className={cx("more")}>더보기</span>
    </header>

    <section className={cx("body")}>
      <LineProblem
        site={"BaekJoon"}
        num={1234}
        title={"벽돌부수기"}
        level={null}
        solved={false}
      />

      <LineProblem
        site={"BaekJoon"}
        num={42314}
        title={"dragon curve"}
        level={null}
        solved={true}
      />

      <LineProblem
        site={"Programmers"}
        num={null}
        title={"라면공장"}
        level={3}
        solved={true}
      />

      <LineProblem
        site={"SWEA"}
        num={5346}
        title={"암호문 해석"}
        level={"D3"}
        solved={true}
      />

      <LineProblem
        site={"SWEA"}
        num={1314}
        title={"암호문 해석2"}
        level={"D3"}
        solved={true}
      />

      <LineProblem
        site={"SWEA"}
        num={9875}
        title={"하나로"}
        level={"D4"}
        solved={true}
      />
    </section>
  </div>
);
