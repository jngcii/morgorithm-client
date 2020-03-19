import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

export default () => (
  <div style={{display:"inlineBlock"}}>
    <div>
      <div className={cx("site")}>BaekJoon</div>
      <div className={cx("num")}>1234</div>
    </div>
    
    <div className={cx("bottom")}>
      <div className={cx("title")}>악어새를 찾아라!!</div>
      {true && <div className={cx("level")}>D4</div>}
    </div>
  </div>
);
