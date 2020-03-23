import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import ListGroup from "../ListGroup";
import ListGroupSearch from "../ListGroupSearch";
const cx = classNames.bind(styles);

export default () => {
  const [searching, setSearching] = useState(false);
  console.log(searching);

  return (
    <div className={cx("wrapper")}>
      <header>
        <span className={cx("subject")}>Group</span>
        <button>새 그룹 만들기</button>
        <div className={cx("search")}>
          <input onFocus={()=>setSearching(true)} onBlur={()=>setSearching(false)} />
        </div>
      </header>

      <section>
        <div className={cx("list", "my")}>
          <ListGroup />
        </div>

        <div className={cx("list", searching ? "searching" : "none")}>
          <ListGroupSearch />
        </div>
      </section>
    </div>
  );
};
