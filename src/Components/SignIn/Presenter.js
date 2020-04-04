import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

export default ({ email, password, signIn, onKeyDown, setIsExist }) => (
  <form className={cx("wrapper")} onKeyDown={onKeyDown} onSubmit={signIn}>
    <label for={"email"} className={cx("tag")}>email</label>
    <input
      id={"email"}
      className={cx("authInput")}
      spellCheck={false}
      placeholder={"이메일을 입력하세요"}
      value={email.value}
      onChange={e => email.onChange(e.target.value)}
      autoComplete={"email"}
      autoFocus
    />
    <label fro={"password"} className={cx("tag")}>password</label>
    <input
      id={"password"}
      type={"password"}
      className={cx("authInput")}
      spellCheck={false}
      placeholder={"비밀번호를 입력하세요"}
      value={password.value}
      onChange={e => password.onChange(e.target.value)}
    />

    <div className={cx("signin")}>
      <button className={cx("local")} onClick={signIn}>
        로그인
      </button>

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
  </form>
);
