import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

export default ({ setIsLoggedIn, setIsExist }) => (
  <div className={cx("wrapper")}>
    <h1 className={cx("signup")}>회원가입</h1>

    <div className={cx("tag")}>email</div>
    <input spellCheck={false} placeholder={"이메일을 입력하세요"} />
    <div className={cx("tag")}>username</div>
    <input spellCheck={false} placeholder={"유저네임을 입력하세요"} />
    <div className={cx("tag")}>name</div>
    <input spellCheck={false} placeholder={"이름을 입력하세요"} />
    <div className={cx("tag")}>password</div>
    <input spellCheck={false} placeholder={"비밀번호를 입력하세요"} />
    <input
      spellCheck={false}
      placeholder={"비밀번호를 한번 더 입력하세요"}
      style={{ marginTop: 5 }}
    />

    <div className={cx("local")} onClick={() => setIsLoggedIn(true)}>
      계정 만들기
    </div>

    <div className={cx("except")}>
      <span className={cx("btn")} onClick={() => setIsExist(true)}>
        로그인
      </span>
      <span>하러 가기</span>
    </div>
  </div>
);
