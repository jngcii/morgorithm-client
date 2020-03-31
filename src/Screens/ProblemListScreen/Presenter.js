import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import ListProblem from "../../Components/ListProblem";
import LoadingBox from "../../Components/LoadingBox";
const cx = classNames.bind(styles);

export default ({
  lState,
  cState,
  sState,
  problemList,
  group,
  keyword,
  onClickCategory,
  onClickLevel,
  onClicksolved,
  onDispatch
}) => (
  <div className={cx("wrapper")}>
    <header className={cx("header")}>{group || "All Problems"}</header>

    <div className={cx("sort")}>
      <div className={cx("category")}>
        {["Programmers", "SWEA", "BaekJoon"].map((site, idx) => (
          <div
            key={site}
            className={cx("block", cState[idx] && "on")}
            onClick={() => onClickCategory(site, idx)}
          >
            {site}
          </div>
        ))}
      </div>

      <div className={cx("category")}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(lev => (
          <div
            key={lev}
            className={cx("block", lState[lev - 1] && "on")}
            onClick={() => onClickLevel(lev)}
          >
            {lev}
          </div>
        ))}
      </div>

      <div className={cx("category")}>
        {[1, 0].map(sol => (
          <div
            key={sol}
            className={cx("block", sState[sol] && "on")}
            onClick={() => onClicksolved(sol)}
          >
            {sol ? "solved" : "unsolved"}
          </div>
        ))}
      </div>

      <div className={cx("search")}>
        <input className={cx("input")} value={keyword.value} onChange={e => keyword.onChange(e.target.value)} />
        <button className={cx("btn")} onClick={onDispatch}>
          <img src={require("../../assets/search.png")} width={20} />
        </button>
      </div>
    </div>

    <section className={cx("body")}>
      {problemList === null ? (
        <LoadingBox />
      ) : (
        <ListProblem problemList={problemList} />
      )}
    </section>
  </div>
);
