import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import ListGroup from "../ListGroup";
import ListGroupSearch from "../ListGroupSearch";
import CustomModal from "../CustomModal";
import BoxCreateUserGroup from "../BoxCreateUserGroup";
const cx = classNames.bind(styles);

const CreateUserGroupBtn = ({ handleOpen }) => (
  <Button className={cx("newGroup")} onClick={handleOpen}>새 그룹 만들기</Button>
);

export default ({ keyword, groups, searchedGroups, loading, onSearch }) => {
  const [searching, setSearching] = useState(false);
  const isSearching = searching || keyword.value !== "";

  return (
    <div className={cx("wrapper")}>
      <header className={cx("header")}>
        <span className={cx("subject")}>My Group</span>
        <CustomModal
          btnComponent={CreateUserGroupBtn}
          contentComponent={BoxCreateUserGroup}
        />
        <div className={cx("search")}>
          <input
            className={cx("inputBox")}
            placeholder={"search..."}
            value={keyword.value}
            onChange={e => onSearch(e.target.value)}
            onFocus={() => setSearching(true)}
            onBlur={() => setSearching(false)}
          />
        </div>
      </header>

      <section>
        <div className={cx("list", "my")}>
          <ListGroup groups={groups} searching={isSearching} />
        </div>

        <div className={cx("list", isSearching ? "searching" : "none")}>
          <ListGroupSearch
            keyword={keyword.value}
            searchedGroups={searchedGroups}
            loading={loading}
          />
        </div>
      </section>
    </div>
  );
};
