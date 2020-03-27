import React from "react";
import { CircularProgress } from '@material-ui/core';
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

export default ({
  email,
  loading,
  err,
  confirmCode,
  isVerifying,
  setIsVerifying,
  onSend,
  onConfirm,
  onKeyDown
}) => {

  if (isVerifying) {
    return (
      <div className={cx("wrapper")}>
        <input
          className={cx("code", "authInput")}
          spellCheck={false}
          placeholder={"인증코드를 입력해주세요"}
          value={confirmCode.value}
          onChange={e=>confirmCode.onChange(e.target.value)}
          onKeyDown={onKeyDown}
        />
        <span className={cx("btn", "code")} onClick={onConfirm}>인증</span>
        <div className={cx("re")} onClick={() => setIsVerifying(false)}>이메일 다시 입력하기</div>
        {err === "typeErr" && <span className={cx("err")}>잘못된 인증코드입니다</span>}
      </div>
    );
  } else {
    return (
      <div className={cx("wrapper")}>
        <span className={cx("tag")}>이메일를 입력해주세요</span>
        <input
          className={cx("authInput")}
          spellCheck={false}
          placeholder="example@example.com"
          value={email.value}
          onChange={e=>email.onChange(e.target.value)}
          onKeyDown={onKeyDown}
          autoComplete={"email"}
        />
        {err === "typeErr" && <span className={cx("err")}>이메일 양식이 맞지 않습니다</span>}
        {err === "uniqueErr" && <span className={cx("err")}>이미 존재하는 이메일입니다</span>}
        <button className={cx("btn")} disabled={loading||!email.value} onClick={!loading && onSend}>
          {loading ? <CircularProgress color={"inherit"} size={20} /> :<span>인증 메일 보내기</span>}
        </button>
      </div>
    );
  }
};
