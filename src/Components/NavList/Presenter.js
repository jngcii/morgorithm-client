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

export default ({ profile }) => (
  <ul className={cx("navlist")}>
    <li>
      <Link className={cx("link")} to={`/${profile.username}/questions` }>
        questions
      </Link>
    </li>

    <li>
      <Link to={{ pathname: "/problem", state: {} }} className={cx("link")}>
        problems
      </Link>
    </li>

    <li>
      <NavMenu />
      <Profile />
    </li>
  </ul>
);
