import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import SectionUser from "../../Components/SectionUser";
import SolvingStatusBar from "../../Components/SolvingStatusBar";
import SectionSolvingList from "../../Components/SectionSolvingList";
import ListProblem from "../../Components/ListProblem";
const cx = classNames.bind(styles);

const LoadingBox = ({ height }) => (
  <div className={cx("loading")} style={{ height: height }} />
);

export default ({ userState, statusState, probGroupState, problemState }) => (
  <div className={cx("wrapper")}>
    <div className={cx("section")}>
      {userState !== null ? (
        <SectionUser user={userState} />
      ) : (
        <LoadingBox height={150} />
      )}
    </div>

    <div className={cx("section")}>
      {statusState !== null ? (
        <SolvingStatusBar status={statusState} />
      ) : (
        <LoadingBox height={40} />
      )}
    </div>

    <div className={cx("section")}>
      {probGroupState !== null ? (
        <SectionSolvingList probGroup={probGroupState} />
      ) : (
        <LoadingBox height={100} />
      )}
    </div>

    <div className={cx("section")}>
      {problemState !== null ? (
        <ListProblem problemList={problemState} subject={"Problems"} />
      ) : (
        <LoadingBox height={150} />
      )}
    </div>

    <div className={cx("section")}>
      {/* <ListProblem subject={"Questions"} /> */}
    </div>
  </div>
);
