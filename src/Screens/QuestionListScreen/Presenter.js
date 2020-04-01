import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import ListSolution from "../../Components/ListSolution";
import LoadingBox from "../../Components/LoadingBox";
import Title from "../../Components/Title";
const cx = classNames.bind(styles);

export default ({ user, problem, questions }) => (
  <div className={cx("wrapper")}>
    {user && (
      <header className={cx("header")}>{user.username}님의 Questions</header>
    )}
    {problem && (
      <header className={cx("header")}>
        Questions about{" "}
        <Link
          className={cx("title", "link")}
          to={{
            pathname: `/problem/${problem.origin.id}`,
            state: { problem }
          }}
        >
          <Title problem={problem.origin} />
        </Link>
      </header>
    )}

    <section className={cx("body")}>
      {questions !== null ? <ListSolution list={questions} /> : <LoadingBox />}
    </section>
  </div>
);
