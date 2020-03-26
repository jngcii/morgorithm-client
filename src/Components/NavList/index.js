import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import NavMenu from "../NavMenu";
const cx = classNames.bind(styles);

const Profile = () => (
  <div className={cx("navProfile")}>
    <img src={require("../../assets/no-profile.png")} draggable={false} />
  </div>
);

export default () => (
  <ul className={cx("navlist")}>
    <li>
      <Link to="/question" className={cx("link")}>
        questions
      </Link>
    </li>

    <li>
      <Link to="/problem" className={cx("link")}>
        problems
      </Link>
    </li>

    <li>
      {/* <Link to="/group" className={cx("link")}> */}
      <NavMenu />
      <Profile />
      {/* </Link> */}
    </li>
  </ul>
);
