import React from "react";
import { CircularProgress } from '@material-ui/core';
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

export default ({ loading, err, username, name, password1, password2, signUp }) => (
  <div>
    <input
      className={cx("authInput")}
      spellCheck={false}
      placeholder={"유저네임을 입력하세요"}
      value={username.value}
      onChange={e=>username.onChange(e.target.value)}
      autoComplete={"username"}
    />
    <input
      className={cx("authInput")}
      spellCheck={false}
      placeholder={"이름을 입력하세요"}
      value={name.value}
      onChange={e=>name.onChange(e.target.value)}
      autoComplete={"name"}
    />
    <input
      className={cx("authInput")}
      spellCheck={false}
      placeholder={"비밀번호를 입력하세요"}
      value={password1.value}
      onChange={e=>password1.onChange(e.target.value)}
    />
    <input
      className={cx("authInput")}
      spellCheck={false}
      placeholder={"비밀번호를 다시 입력하세요"}
      value={password2.value}
      onChange={e=>password2.onChange(e.target.value)}
    />
    {err === "typeErr" && (
      <span className={cx("err")}>잘못된 유저네임입니다</span>
    )}
    {err === "uniqueErr" && (
      <span className={cx("err")}>이미 존재하는 유저네임입니다</span>
    )}
    {err === "pwErr" && (
      <span className={cx("err")}>잘못된 비밀번호입니다</span>
    )}
    {err === "pw2Err" && (
      <span className={cx("err")}>비밀번호를 다시 확인해주세요</span>
    )}
    <div className={cx("btn")} onClick={signUp}>
    {loading ? <CircularProgress color={"inherit"} size={20} /> :<span>계정 만들기</span>}
    </div>
  </div>
);