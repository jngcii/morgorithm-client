import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

export default ({ problem }) => (
  <div style={{display:"inlineBlock", width: "100%"}}>
    <div>
      <div className={cx("site")}>{problem.category}</div>
      <div className={cx("num")}>{problem.number}</div>
    </div>
    
    <div className={cx("bottom")}>
      <div className={cx("title")}>{problem.title}</div>
      {problem.level && <div className={cx("level")}>{problem.level}</div>}
    </div>
  </div>
);
