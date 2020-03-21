import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

export default ({ subject = "다른 사람의 풀이" }) => (
  <div className={cx("wrapper")}>
    <header>
      <h4>{subject}</h4>
    </header>

    <section>
    </section>
  </div>
);
