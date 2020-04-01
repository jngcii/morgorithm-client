import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import LineGroup from "../LineGroup";
const cx = classNames.bind(styles);

export default ({ user, self }) => (
  <div className={cx("wrapper")}>
    <div className={cx("user")}>
      <img src={require("../../assets/no-profile.png")} draggable={false} />
      <div className={cx("username")}>{ user.username }</div>
      { user.name && <div className={cx("name")}>{ user.name }</div> }
    </div>

    <span className={cx("in")}>in</span>

    <div className={cx("group")}>
      <header className={cx("groupHeader")}>
        <span className={cx("title")}>Group</span>
        {self && <Link className={cx("more")} to={"/group"}>더보기</Link>}
      </header>

      <div className={cx("list")}>

        {user.group.map(g => (
          <div className={cx("line")} key={g.id}>
            <LineGroup group={g} />
          </div>
        ))}

      </div>
    </div>
  </div>
);