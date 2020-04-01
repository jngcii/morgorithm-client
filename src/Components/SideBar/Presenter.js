import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import CustomModal from "../CustomModal";
import BoxCreateGroup from "../BoxCreateGroup";
const cx = classNames.bind(styles);

const PlusBtn = ({ handleOpen }) => (
  <div className={cx("each", "plus")} onClick={handleOpen}>
    <img src={require("../../assets/plus.png")} width={25} />
  </div>
);

export default ({ probGroups }) => {
  const { pathname } = useLocation();
  const out =
    pathname !== "/" && pathname !== "/user" && !~pathname.indexOf("/group");

  return (
    <div className={cx("wrapper", out ? "out" : "in")}>
      <div className={cx("container")}>
        <div className={cx("each")}>
          <Link
            to={{ pathname: "/problem", state: {} }}
            className={cx("each", "link")}
          >
            전체 문제 (145/531)
          </Link>
        </div>

        {probGroups && <hr />}

        {probGroups &&
          probGroups.map(probGroup => (
            <div className={cx("each")} key={probGroup.id}>
              <Link
                to={{ pathname: "/problem", state: { group: probGroup } }}
                className={cx("each", "link")}
              >
                {probGroup.name}
              </Link>
            </div>
          ))}
        <hr />

        <CustomModal btnComponent={PlusBtn} contentComponent={BoxCreateGroup} />
      </div>
    </div>
  );
};
