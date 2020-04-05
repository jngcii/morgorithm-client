import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import NavMenu from "../NavMenu";
import { MEDIA_URL } from "../../constants";
const cx = classNames.bind(styles);


const MenuToggler = ({ anchorRef, handleToggle, open }) => (
  <div className={cx("toggler")} onClick={handleToggle}>
    <img
      className={cx("arrow")}
      src={require("../../assets/menu-toggle.png")}
      ref={anchorRef}
      aria-controls={open ? "menu-list-grow" : undefined}
      aria-haspopup="true"
    />
  </div>
);

const Profile = ({ profile }) => (
  <div className={cx("navProfile")}>
    <img src={profile.avatar ? `${MEDIA_URL}${profile.avatar}` : require("../../assets/no-profile.png")} draggable={false} />
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
      <NavMenu component={MenuToggler} />
      <Link to={`/${profile.username}`}><Profile profile={profile} /></Link>
    </li>
  </ul>
);
