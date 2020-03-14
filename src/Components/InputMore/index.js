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
      <input spellCheck={false} placeholder={"비밀번호를 입력하세요"} />
      <input spellCheck={false} placeholder={"비밀번호를 다시 입력하세요"} />
      {err === "typeErr" && (
        <span className={cx("err")}>잘못된 닉네임입니다</span>
      )}
      {err === "uniqueErr" && (
        <span className={cx("err")}>이미 존재하는 닉네임입니다</span>
      )}
      {err === "pwErr" && (
        <span className={cx("err")}>잘못된 비밀번호입니다</span>
      )}
      {err === "pw2Err" && (
        <span className={cx("err")}>비밀번호를 다시 확인해주세요 *</span>
      )}
      <div className={cx("btn")} onClick={() => setIsLoggedIn(true)}>
        계정 만들기
      </div>
    </div>
  );
};
