import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

export default ({ setIsLoggedIn, setIsExist }) => (
  <div className={cx("wrapper")}>
    <div className={cx("tag")}>email</div>
    <input spellCheck={false} placeholder={"이메일을 입력하세요"} />
    <div className={cx("tag")}>password</div>
    <input spellCheck={false} placeholder={"비밀번호를 입력하세요"} />

    <div className={cx("signin")}>
      <div className={cx("local")} onClick={() => setIsLoggedIn(true)}>
        로그인
      </div>

      <div className={cx("social")}>
        <img
          src={require("../../../src/assets/google-logo.png")}
          draggable={false}
        />
      </div>
    </div>

    <ul className={cx("except")}>
      <li>비밀번호 찾기</li>
      <li onClick={() => setIsExist(false)}>회원가입</li>
    </ul>
  </div>
);
