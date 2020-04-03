import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

export default ({ bgColor }) => (
  <div className={cx("empty", bgColor && "tp")}>
    <img style={{margin: 30}} src={require("../../assets/lock.png")} width={50} />
    <span style={{marginBottom: 30}}>Private Group</span>
    <span style={{marginBottom: 30}}>코드 공유를 위해 가입해주세요</span>
  </div>
);
