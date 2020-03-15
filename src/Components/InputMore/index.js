import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

export default ({ setStep, setIsLoggedIn }) => {
  const [err, setErr] = useState(null);

  return (
    <div>
      <span className={cx("tag")}>이름을 입력해주세요</span>
      <input spellCheck={false} placeholder="홍길동" />
      <div className={cx("btn")} onClick={() => setIsLoggedIn(true)}>
        계정 만들기
      </div>
    </div>
  );
};
