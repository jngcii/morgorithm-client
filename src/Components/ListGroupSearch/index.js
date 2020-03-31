import React, { useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import { CircularProgress } from "@material-ui/core";
const cx = classNames.bind(styles);

export default ({ keyword, searchedGroups, loading }) => {
  const [password, setPassword] = useState("");

  console.log(searchedGroups);

  return (
    <div className={cx("wrapper")}>
      <table>
        <thead>
          <tr>
            <th className={cx("name")}>그룹명</th>
            <th className={cx("cnt")}>인원</th>
            <th className={cx("access")}>공개</th>
            <th className={cx("btn")}></th>
          </tr>
        </thead>

        <tbody>
          {keyword.length > 0 ? (
            loading ? (
              <tr>
                <td style={{ width: "100%" }}>
                  <div className={cx("box")}>
                    <CircularProgress color={"inherit"} size={40} />
                  </div>
                </td>
              </tr>
            ) : (
              searchedGroups.map(group => (
                <tr key={group.id} className={cx("line")}>
                  <th className={cx("name")}>
                    <Link
                      className={cx("link")}
                      to={{
                        pathname: `/group/${group.id}`,
                        state: { groupId: group.id }
                      }}
                    >
                      {group.name}
                    </Link>
                  </th>
                  <th className={cx("cnt")}>{group.members_count}</th>
                  <th className={cx("access")}>
                    {group.is_private && (
                      <img src={require("../../assets/lock.png")} />
                    )}
                  </th>
                  <th className={cx("btn")}>
                    {!group.is_joined && <button>enter</button>}
                  </th>
                </tr>
              ))
            )
          ) : (
            <tr>
              <td className={cx("box")}>
                <img src={require("../../assets/search.png")} />
                <div>search</div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
