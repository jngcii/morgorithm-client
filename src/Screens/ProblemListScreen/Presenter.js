import React from "react";
import { ButtonBase } from '@material-ui/core';
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import ListProblem from "../../Components/ListProblem";
import LoadingBox from "../../Components/LoadingBox";
import EmptyBox from "../../Components/EmptyBox";
import CustomModal from "../../Components/CustomModal";
import BoxDelete from "../../Components/BoxDelete";
const cx = classNames.bind(styles);

const DeleteBtn = ({handleOpen}) => (
  <ButtonBase className={cx("headerBtn")} onClick={handleOpen}>
    <img src={require("../../assets/delete.png")} width={26} draggable={false} />
  </ButtonBase>
);

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
  onDispatch,
  onDelete
}) => (
  <div className={cx("wrapper")}>
    <header className={cx("header")}>
      { group.value ? group.value.name : "All Problems" }

      <div style={{flex:1}} />

      { group.value &&
        <ButtonBase className={cx("headerBtn")}>
          <span>edit</span>
        </ButtonBase>
      }
      { group.value && <CustomModal btnComponent={DeleteBtn} contentComponent={BoxDelete} onUp={onDelete} />
      }  
    </header>

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
        <input className={cx("input")} placeholder={"search..."} value={keyword.value} onChange={e => keyword.onChange(e.target.value)} />
        <button className={cx("btn")} onClick={onDispatch}>
          <img src={require("../../assets/search.png")} width={20} />
        </button>
      </div>
    </div>

    <section className={cx("body")}>
      {problemList === null ? (
        <LoadingBox />
      ) : problemList.length ?
        <ListProblem problemList={problemList} op={true} groupId={group.value && group.value.id} /> : <div style={{padding:20, height:300}}><EmptyBox /></div>
      }
    </section>
  </div>
);
