import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import { CircularProgress } from "@material-ui/core";
const cx = classNames.bind(styles);

export default ({ keyword, searchedGroups, loading }) => {
  const [choosen, setChoosen] = useState(null);
  const [password, setPassword] = useState("");

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
                <tr>
                  <td key={group.id} className={cx("line")}>
                    <th className={cx("name")}>{group.name}</th>
                    <th className={cx("cnt")}>{group.members_count}</th>
                    <th className={cx("access")}>
                      <img src={require("../../assets/lock.png")} />
                    </th>
                    <th className={cx("btn")}>
                      <button onClick={() => setChoosen(group.id)}>
                        enter
                      </button>
                    </th>

                    <input
                      className={cx("pwInput", choosen !== group.id && "non")}
                      placeholder={"비밀번호를 입력하세요"}
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                  </td>
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
