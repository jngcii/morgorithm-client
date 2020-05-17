import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import { Button, CircularProgress, Tooltip } from "@material-ui/core";
import GoogleLogin from "react-google-login";
import CustomModal from "../CustomModal";
import Snack from "../Snack";
import BoxFindPassword from "../BoxFindPassword";
import { GOOGLE_CLIENT_ID } from "../../constants";
const cx = classNames.bind(styles);

export default ({
  loading,
  err,
  msg,
  cred,
  password,
  snackOpen,
  signIn,
  onKeyDown,
  onGoogle,
  setIsExist,
}) => (
  <div>
  <form className={cx("wrapper")} onKeyDown={onKeyDown} onSubmit={signIn}>
    <label htmlFor={"cred"} className={cx("tag")}>
      <strong>email</strong> or <strong>username</strong>
    </label>
    <input
      id={"cred"}
      className={cx("authInput")}
      spellCheck={false}
      placeholder={"이메일 또는 유저네임을 입력하세요"}
      value={cred.value}
      onChange={(e) => cred.onChange(e.target.value)}
      autoComplete={"username"}
      autoFocus
    />
    <label htmlFor={"password"} className={cx("tag")}>
      <strong>password</strong>
    </label>
    <input
      id={"password"}
      type={"password"}
      className={cx("authInput")}
      spellCheck={false}
      placeholder={"비밀번호를 입력하세요"}
      value={password.value}
      onChange={(e) => password.onChange(e.target.value)}
    />

    {err && <span className={cx("err")}>{err}</span>}

    <div className={cx("signin")}>
      <Tooltip
        arrow
        title="유저정보를 모두 입력해주세요"
        disableHoverListener={cred.value && password.value}
      >
        <div className={cx("local")}>
          <Button className={cx("localBtn")} onClick={signIn} disabled={!(cred.value && password.value)}>
            {loading ? <CircularProgress color={"inherit"} size={20} /> : "로그인"}
          </Button>
        </div>
      </Tooltip>

      <GoogleLogin
        clientId={GOOGLE_CLIENT_ID}
        render={(renderProps) => (
          <Tooltip
            arrow
            title="구글 로그인"
          >
            <div
              className={cx("social")}
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <img
                src={require("../../../src/assets/google-logo.png")}
                draggable={false}
              />
            </div>
          </Tooltip>
        )}
        onSuccess={onGoogle}
        onFailure={(e) => console.log(e)}
      />
    </div>

    <ul className={cx("except")}>
      <li>
        <CustomModal
          btnComponent={({ handleOpen }) => (
            <li onClick={handleOpen}>비밀번호 찾기</li>
          )}
          contentComponent={BoxFindPassword}
        />
      </li>
      <li onClick={() => setIsExist(false)}>회원가입</li>
    </ul>
  </form>

  <Snack snackOpen={snackOpen} msg={msg} isSuccess={msg==="로그인에 성공했습니다"} />
  </div>
);
