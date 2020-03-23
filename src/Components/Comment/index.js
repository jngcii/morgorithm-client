import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import LineComment from "../LineComment";
const cx = classNames.bind(styles);

export default () => (
  <div className={cx("wrapper")}>
    <header>Comment</header>

    <section>
      <input className={cx("commentInput")} />

      {[1, 2, 3, 4, 5].map(i => (
        <LineComment key={i} />
      ))}
    </section>
  </div>
);
