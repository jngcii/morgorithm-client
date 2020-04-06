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
      to={
        probGroup ? { pathname: "/problem", state: { group: probGroup } } : "/"
      }
      className={cx("block", "link", !probGroup && "new")}
    >
      {probGroup ? (
        <div className={cx("blockContainer")}>
          <div className={cx("full")} />
          {probGroup.problems_count > 0 && (
            <span
              className={cx("count")}
              style={{
                width: probGroup.solved_problems_count === 0 ? "0%" : `${(probGroup.solved_problems_count /
                  probGroup.problems_count) *
                  100}%`
              }}
            />
          )}
          <span className={cx("count")}>
            {probGroup.solved_problems_count} / {probGroup.problems_count}
          </span>
          <span style={{ zIndex: 5, alignSelf: "center" }}>
            {probGroup.name}
          </span>
        </div>
      ) : (
        <img
          src={require("../../assets/plus-grey.png")}
          width={35}
          style={{ margin: 0 }}
        />
      )}
      <span></span>
    </Link>
  </div>
);

export default ({ probGroups }) => (
  <div className={cx("wrapper")}>
    <section className={cx("body")}>
      {probGroups &&
        probGroups.map(probGroup => (
          <Block key={probGroup.id} probGroup={probGroup} />
        ))}
      <CustomModal btnComponent={Block} contentComponent={BoxCreateGroup} />
    </section>
  </div>
);
