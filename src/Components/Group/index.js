import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import ListGroup from "../ListGroup";
import ListGroupSearch from "../ListGroupSearch";
const cx = classNames.bind(styles);

export default () => {
  const [searching, setSearching] = useState(false);
  const [gname, setGname] = useState("");

  const isSearching = searching || gname !== "";

  return (
    <div className={cx("wrapper")}>
      <header>
        <span className={cx("subject")}>My Group</span>
        <button>새 그룹 만들기</button>
        <div className={cx("search")}>
          <input
            className={cx("inputBox")}
            placeholder={"search..."}
            value={gname}
            onChange={e=>setGname(e.target.value)}
            onFocus={() => setSearching(true)}
            onBlur={() => setSearching(false)}
          />
        </div>
      </header>

      <section>
        <div className={cx("list", "my")}>
          <ListGroup searching={isSearching} />
        </div>

        <div className={cx("list", isSearching ? "searching" : "none")}>
          <ListGroupSearch gname={gname} />
        </div>
      </section>
    </div>
  );
};
