import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import LineGroup from "../LineGroup";
import EmptyBox from "../EmptyBox";
import { MEDIA_URL } from "../../constants";
const cx = classNames.bind(styles);

export default ({ user, self }) => (
  <div className={cx("wrapper")}>
    <div className={cx("user")}>
      <div className={cx("imgWrapper")}>
        <img src={user.avatar ? `${MEDIA_URL}${user.avatar}` : require("../../assets/no-profile.png")}draggable={false} />
      </div>
      <div className={cx("username")}>{ user.username }</div>
      { user.name && <div className={cx("name")}>{ user.name }</div> }
      <Link className={cx("link")} to={"/editprofile"}><button className={cx("edit")}>edit</button></Link>
    </div>

    <span className={cx("in")}>in</span>

    <div className={cx("group")}>
      <header className={cx("groupHeader")}>
        <span className={cx("title")}>Group</span>
        {self && <Link className={cx("more")} to={"/group"}>더보기</Link>}
      </header>

      <div className={cx("list")}>

        {user.group ? user.group.slice(0,5).map(g => (
          <div className={cx("line")} key={g.id}>
            <LineGroup group={g} />
          </div>
        )) : <EmptyBox bgColor={true} />}

      </div>
    </div>
  </div>
);