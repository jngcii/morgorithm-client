import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import CustomModal from "../CustomModal";
import BoxCreateGroup from "../BoxCreateGroup";
const cx = classNames.bind(styles);

const Block = ({ probGroup, handleOpen }) => (
  <div
    className={cx("blockWrapper")}
    onClick={probGroup ? () => {} : handleOpen}
  >
    <Link
      to={probGroup ? { pathname: "/problem", state: { group: probGroup } } : '/'}
      className={cx("block", "link", !probGroup && "new")}
    >
      {probGroup ? (
        probGroup.name
      ) : (
        <img
          src={require("../../assets/plus-grey.png")}
          width={45}
          style={{ margin: 0 }}
        />
      )}
      <span></span>
    </Link>
  </div>
);

export default ({ probGroups }) => (
  <div className={cx("wrapper")}>
    <header className={cx("header")}>Solving List</header>

    <section className={cx("body")}>
      {probGroups !== null &&
        probGroups.map(probGroup => (
          <Block key={probGroup.id} probGroup={probGroup} />
        ))}
      <CustomModal btnComponent={Block} contentComponent={BoxCreateGroup} />
    </section>
  </div>
);
