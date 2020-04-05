import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import { MEDIA_URL } from "../../constants";
const cx = classNames.bind(styles);

export default ({ creator }) => (
  <div className={cx("wrapper")}>
    <div className={cx("imgWrapper")}>
      <img src={creator.avatar ? `${MEDIA_URL}${creator.avatar}` : require("../../assets/no-profile.png")} />
    </div>
    
    <div className={cx("text")}>
      <div className={cx("username")}>{creator.username}</div>
      <div className={cx("name")}>{creator.name}</div>
    </div>
  </div>
)