import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import { CircularProgress } from '@material-ui/core';
import GoogleLogin from 'react-google-login';
import CustomModal from "../CustomModal";
import BoxFindPassword from "../BoxFindPassword";
import { GOOGLE_CLIENT_ID } from "../../constants";
const cx = classNames.bind(styles);

export default ({ loading, err, setErr, email, password, signIn, onKeyDown, onGoogle, setIsExist }) => (
  <form className={cx("wrapper")} onKeyDown={onKeyDown} onSubmit={signIn}>
    <label htmlFor={"email"} className={cx("tag")}>email</label>
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
    <label htmlFor={"password"} className={cx("tag")}>password</label>
    <input
      id={"password"}
      type={"password"}
      className={cx("authInput")}
      spellCheck={false}
      placeholder={"비밀번호를 입력하세요"}
      value={password.value}
      onChange={e => password.onChange(e.target.value)}
    />

    {err && <span className={cx("err")}>{err}</span>}

    <div className={cx("signin")}>
      <button className={cx("local")} onClick={signIn}>
        {loading ? <CircularProgress color={"inherit"} size={20} /> : "로그인"}
      </button>
      <GoogleLogin
        clientId={GOOGLE_CLIENT_ID}
        render={renderProps => (
          <div className={cx("social")} onClick={renderProps.onClick} disabled={renderProps.disabled}>
            <img
              src={require("../../../src/assets/google-logo.png")}
              draggable={false}
            />
          </div>
        )}
        onSuccess={onGoogle}
        onFailure={e=>console.log(e)}
        cookiePolicy={'single_host_origin'}
      />
    </div>

    <ul className={cx("except")}>
      <li><CustomModal btnComponent={({handleOpen})=><li onClick={handleOpen}>비밀번호 찾기</li>} contentComponent={BoxFindPassword} /></li>
      <li onClick={() => setIsExist(false)}>회원가입</li>
    </ul>
  </form>
);
