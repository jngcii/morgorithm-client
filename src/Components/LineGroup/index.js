import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

export default ({ group }) => (
  <Link
    className={cx("wrapper", "link")}
    to={{ pathname: `/group/${group.id}`, state: { groupId: group.id } }}
  >
    <div className={cx("name")}>{group.name}</div>
    <div className={cx("count")}>{group.members_count}</div>
  </Link>
);
