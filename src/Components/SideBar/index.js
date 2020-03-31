import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
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
        <div className={cx("each")}>
          <Link to={{pathname:"/problem", state:{}}} className={cx("each", "link")}>전체 문제 (145/531)</Link>
        </div>

        <hr />

        <div className={cx("each")}>
          <Link to={{pathname:"/problem", state:{group:"Kakao"}}} className={cx("each", "link")}>Kakao (145/531)</Link>
        </div>

        <div className={cx("each")}>
          <Link to={{pathname:"/problem", state:{group:"Ready A+"}}} className={cx("each", "link")}>Ready A+ (145/531)</Link>
        </div>
        
        <div className={cx("each")}>
          <Link to={{pathname:"/problem", state:{group:"Kill DP"}}} className={cx("each", "link")}>Kill DP (145/531)</Link>
        </div>

        <hr />

        <CustomModal btnComponent={PlusBtn} contentComponent={BoxCreateGroup} />
      </div>
    </div>
  );
};
