import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import ListSolution from "../../Components/ListSolution";
import LoadingBox from "../../Components/LoadingBox";
import Title from "../../Components/Title";
const cx = classNames.bind(styles);

export default ({ originId, username, questions }) => (
  <div className={cx("wrapper")}>
    {username ? (
      <header className={cx("header")}>{username}님의 Questions</header>
    ) : (
      <header className={cx("header")}>
        Questions  about <Title originId={originId} />
      </header>
    )}

    <section className={cx("body")}>
      {questions !== null ? (
        <ListSolution list={questions} subject={"question"} />
      ) : (
        <LoadingBox />
      )}
    </section>
  </div>
);
