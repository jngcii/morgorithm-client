import React from "react";
import { useLocation } from 'react-router-dom'
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import CustomModal from "../CustomModal";
import BoxCreateGroup from "../BoxCreateGroup";
const cx = classNames.bind(styles);


const PlusBtn = (handleOpen) => (
  <div className={cx("each", "plus")} onClick={handleOpen}>
    <img src={require("../../assets/plus.png")} width={25} />
  </div>
);


export default () => {
  const { pathname } = useLocation();
  const out = pathname !== "/" && pathname !== "/user" && !~pathname.indexOf("/group");

  return (
    <div className={cx("wrapper", out ? "out" : "in")}>
      <div className={cx("container")}>
        <div className={cx("each")}>전체 문제 (145/531)</div>
        <hr />
        <div className={cx("each")}>A형 대비 (15/45)</div>
        <div className={cx("each")}>DP 조지기 (15/45)</div>
        <div className={cx("each")}>Kakao 기출 (2/60)</div>
        <hr />
        <CustomModal btnComponent={PlusBtn} contentComponent={BoxCreateGroup} />
      </div>
    </div>
  );
};
