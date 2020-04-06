import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import SectionUser from "../../Components/SectionUser";
import SolvingStatusBar from "../../Components/SolvingStatusBar";
import ListSolution from "../../Components/ListSolution";
const cx = classNames.bind(styles);

const LoadingBox = () => <div className={cx("loading")} />;

export default ({ user, status, questions, solutions }) => (
  <div className={cx("wrapper")}>
    <div className={cx("section")} style={{height:350}}>
      {user !== null ? (
        <SectionUser user={user} />
      ) : (
        <LoadingBox />
      )}
    </div>

    <div className={cx("section")} style={{height: 40}}>
      {status !== null ? (
        <SolvingStatusBar status={status} />
      ) : (
        <LoadingBox />
      )}
    </div>


    <header className={cx("header")}>
      Questions
      {user && (
        <Link className={cx("more", "link")} to={`/${user.username}/questions`}>
          더보기
        </Link>
      )}
    </header>
    <div className={cx("section", "sol")}>
      {questions !== null ? (
        <ListSolution list={questions} subject={"question"} />
      ) : (
        <LoadingBox />
      )}
    </div>

    <header className={cx("header")}>
      Solutions
      {user && (
        <Link className={cx("more", "link")} to={`/${user.username}/solutions`}>
          더보기
        </Link>
      )}
    </header>
    <div className={cx("section", "sol")}>
      {solutions !== null ? (
        <ListSolution list={solutions} subject={"solution"} />
      ) : (
        <LoadingBox />
      )}
    </div>
  </div>
);
