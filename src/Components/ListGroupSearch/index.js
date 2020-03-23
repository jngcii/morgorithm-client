import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

export default ({ gname }) => {
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

        {gname ? (
          <tbody>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(i => (
              <div key={i} className={cx("line")}>
                <tr>
                  <th className={cx("name")}>ssafy31</th>
                  <th className={cx("cnt")}>26</th>
                  <th className={cx("access")}>
                    <img src={require("../../assets/lock.png")} />
                  </th>
                  <th className={cx("btn")}>
                    <button onClick={() => setChoosen(i)}>enter</button>
                  </th>
                </tr>

                <input
                  className={cx("pwInput", choosen !== i && "non")}
                  placeholder={"비밀번호를 입력하세요"}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>
            ))}
          </tbody>
        ) : (
          <div className={cx("box")}>
            <img src={require("../../assets/search.png")} />
            <div>search</div>
          </div>
        )}
      </table>
    </div>
  );
};
