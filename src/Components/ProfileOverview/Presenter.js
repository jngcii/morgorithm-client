import React from "react";
import { Link } from "react-router-dom"
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import { MEDIA_URL } from "../../constants";
const cx = classNames.bind(styles);

export default ({ profile }) => (
  <Link className={cx("wrapper", "link")} to={"/editprofile"}>
    <div className={cx("imgWrapper")}>
      <img src={profile.avatar ? (`${MEDIA_URL}${profile.avatar}` ): require("../../assets/no-profile.png")} />
    </div>
    <span>{profile.email}</span>
    <span>{profile.username}</span>
    <span>{profile.name}</span>
    <span className={cx("edit")}>edit</span>
  </Link>
)