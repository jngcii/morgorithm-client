import React from "react";
import Button from "@material-ui/core/Button";
import { CircularProgress } from "@material-ui/core";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import SelectMenu from "../SelectMenu";
import LineProblem from "../LineProblem";
const cx = classNames.bind(styles);

export default ({
  site,
  pLevel,
  sLevel,
  groupName,
  search,
  problems,
  loading,
  onCancel,
  onUpload,
  onSearch,
  onClickBtn
}) => (
  <div className={cx("wrapper")}>
    <input
      className={cx("input")}
      placeholder={"코드 리스트 이름을 입력하세요"}
      value={groupName.value}
      onChange={e => groupName.onChange(e.target.value)}
    />

    <hr className={cx("hr")} />

    <div className={cx("kind")}>
      <div className={cx("select")}>
        <SelectMenu kind={"site"} index={site.value} setIndex={site.onChange} onClickBtn={onClickBtn} />
        {site.value === 1 && (
          <SelectMenu
            kind={"pLevel"}
            index={pLevel.value}
            setIndex={pLevel.onChange}
            onClickBtn={onClickBtn}
          />
        )}
        {site.value === 2 && (
          <SelectMenu
            kind={"sLevel"}
            index={sLevel.value}
            setIndex={sLevel.onChange}
            onClickBtn={onClickBtn}
          />
        )}
      </div>

      <input
        className={cx("search")}
        placeholder={"search ..."}
        value={search.value}
        onChange={onSearch}
      />
    </div>

    <div className={cx("body")}>
      {problems === null || loading ? (
        <CircularProgress color={"inherit"} size={20} />
      ) : (
        problems && problems.map(problem => (
          <div key={problem.id} style={{ width: "100%", paddingHorizontal: 10 }} onClick={onCancel}>
            <LineProblem problem={problem} />
          </div>
        ))
      )}
    </div>

    <hr className={cx("hr")} />

    <div className={cx("footer")}>
      <Button onClick={onCancel} className={cx("btn")}>
        Cancel
      </Button>
      <Button onClick={onUpload} className={cx("btn", "submit")}>
        Create
      </Button>
    </div>
  </div>
);
