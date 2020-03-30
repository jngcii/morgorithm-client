import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import SectionUser from "../../Components/SectionUser";
import SolvingStatusBar from "../../Components/SolvingStatusBar";
import SectionSolvingList from "../../Components/SectionSolvingList";
import ListProblem from "../../Components/ListProblem";
import ListSolution from "../../Components/ListSolution";
const cx = classNames.bind(styles);

const LoadingBox = () => (
  <div className={cx("loading")} />
);

export default ({ userState, statusState, probGroupState, problemState, questionState }) => (
  <div className={cx("wrapper")}>
    <div className={cx("section")} style={{height:300}}>
      {userState !== null ? (
        <SectionUser user={userState} />
      ) : (
        <LoadingBox />
      )}
    </div>

    <div className={cx("section")} style={{height: 40}}>
      {statusState !== null ? (
        <SolvingStatusBar status={statusState} />
      ) : (
        <LoadingBox />
      )}
    </div>

    <div className={cx("section")}>
      {probGroupState !== null ? (
        <SectionSolvingList probGroup={probGroupState} />
      ) : (
        <LoadingBox />
      )}
    </div>

    <div className={cx("section")} style={{height: 300}}>
      {problemState !== null ? (
        <ListProblem problemList={problemState} subject={"Problems"} />
      ) : (
        <LoadingBox />
      )}
    </div>

    <div className={cx("section")} style={{height: 300}}>
      {questionState !== null ? (
        <ListSolution list={questionState} subject={"question"} />
      ) : (
        <LoadingBox />
      )}
    </div>
  </div>
);
