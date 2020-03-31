import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import Title from "../Title";
const cx = classNames.bind(styles);

export default ({ problem }) => (
  <div className={cx("wrapper")}>
    <header>
      <div className={cx("btn")}>
        <img src={require("../../assets/go-back.png")} />
      </div>

      <div className={cx("title")}>
        <Title problem={problem.origin} />
      </div>
    </header>

    <section>
      <a href={problem.origin.url} target="_blank">
        {problem.origin.url}
      </a>
    </section>
  </div>
);
