import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import SectionUser from "../../Components/SectionUser";
import SolvingStatusBar from "../../Components/SolvingStatusBar";
import SectionSolvingList from "../../Components/SectionSolvingList";
import ListProblem from "../../Components/ListProblem";
import ListSolution from "../../Components/ListSolution";
const cx = classNames.bind(styles);

const LoadingBox = () => <div className={cx("loading")} />;

export default ({ user, status, probGroups, problems, questions }) => (
  <div className={cx("wrapper")}>
    <div className={cx("section")} style={{height:350}}>
      {user !== null ? (
        <SectionUser user={user} self={true} />
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

    
    <header className={cx("header")}>Solving List</header>
    <div className={cx("section")}>
      {probGroups !== null ? (
        <SectionSolvingList probGroup={probGroups} />
      ) : (
        <LoadingBox />
      )}
    </div>


    <header className={cx("header")}>
      Problems
      {user && (
        <Link className={cx("more", "link")} to={{ pathname:`/problem`, state: {}}}>
          더보기
        </Link>
      )}
    </header>
    <div className={cx("section", "sol")}>
      {problems !== null ? (
        <ListProblem problemList={problems.results.slice(0,7)} subject={"Problems"} />
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
        <ListSolution list={questions.results.slice(0, 7)} subject={"question"} />
      ) : (
        <LoadingBox />
      )}
    </div>
  </div>
);
