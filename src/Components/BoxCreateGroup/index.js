import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import SelectMenu from "../SelectMenu";
import LineProblem from "../LineProblem";
const cx = classNames.bind(styles);

export default ({ onCancel, onUpload }) => {
  const [site, setSite] = useState(0);
  const [pLevel, setpLevel] = useState(0);
  const [sLevel, setsLevel] = useState(0);
  const [groupName, setGroupName] = useState("");
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className={cx("wrapper")}>
      <input
        className={cx("input")}
        placeholder={"코드 리스트 이름을 입력하세요"}
        value={groupName}
        onChange={e => setGroupName(e.target.value)}
      />

      <hr className={cx("hr")} />

      <div className={cx("kind")}>
        <div className={cx("select")}>
          <SelectMenu kind={"site"} index={site} setIndex={setSite} />
          {site === 1 && <SelectMenu kind={"pLevel"} index={pLevel} setIndex={setpLevel} />}
          {site === 2 && <SelectMenu kind={"sLevel"} index={sLevel} setIndex={setsLevel} />}
        </div>

        <input
          className={cx("search")}
          placeholder={"search ..."}
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
        />
      </div>

      <div className={cx("body")}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map(id => (
          <div style={{width: "100%", paddingHorizontal: 10}} onClick={onCancel}>
            <LineProblem key={id} site={"boj"} num={"123"} title={"asghasdlgiasd"} level={"ghlasg"} />
          </div>
        ))}
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
};
