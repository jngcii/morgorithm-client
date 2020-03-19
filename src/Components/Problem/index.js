import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import Title from "../Title";
const cx = classNames.bind(styles);

export default () => (
  <div className={cx("wrapper")}>
    <header>
      <div className={cx("btn")}>
        <img src={require("../../assets/go-back.png")} />
      </div>

      <div className={cx("title")}>
        <Title />
      </div>
    </header>

    <section>
      <a href="https://www.acmicpc.net/problem/2922" target="_blank">
        https://www.acmicpc.net/problem/2922
      </a>
    </section>
  </div>
);
