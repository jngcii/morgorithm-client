import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import ListSolution from "../../Components/ListSolution";
import LoadingBox from "../../Components/LoadingBox";
import Title from "../../Components/Title";
const cx = classNames.bind(styles);

export default ({ originId, username, solutions }) => (
  <div className={cx("wrapper")}>
    {username ? (
      <header className={cx("header")}>{username}님의 Solutions</header>
    ) : (
      <header className={cx("header")}>
        Solutions  about <Title originId={originId} />
      </header>
    )}

    <section className={cx("body")}>
      {solutions !== null ? (
        <ListSolution list={solutions} subject={"solution"} />
      ) : (
        <LoadingBox />
      )}
    </section>
  </div>
);
