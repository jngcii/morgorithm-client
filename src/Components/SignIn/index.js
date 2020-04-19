import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../../redux/modules/user";
import { actionCreators as probActions } from "../../redux/modules/problem";
import useInput from "../../Hooks/useInput";
import Presenter from "./Presenter";

export default ({ setIsExist }) => {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null);
  const [err, setErr] = useState(null);
  const cred = useInput("");
  const password = useInput("");
  const snackOpen = useInput(false);
  const dispatch = useDispatch();

  const _signIn = async (e) => {
    setLoading(true);
    e.preventDefault();

    dispatch(userActions.signIn(cred.value, password.value)).then((res) => {

      setLoading(false);
      if (res === 200) {
        dispatch(probActions.copyProblems());
        setMsg("로그인에 성공했습니다");
        snackOpen.onChange(true);
        setTimeout(() => {
          setMsg(null);
          snackOpen.onChange(false);
        }, 1000);
      } else if (res === 401) {
        cred.onChange("");
        password.onChange("");
        setMsg("잘못된 비밀번호입니다");
        setErr("잘못된 비밀번호입니다");
        snackOpen.onChange(true);
        setTimeout(() => {
          setMsg(null);
          snackOpen.onChange(false);
        }, 2000);
      } else if (res === 404) {
        cred.onChange("");
        password.onChange("");
        setMsg("존재하지않는 이메일(유저네임)입니다");
        setErr("존재하지않는 이메일(유저네임)입니다");
        snackOpen.onChange(true);
        setTimeout(() => {
          setMsg(null);
          snackOpen.onChange(false);
        }, 2000);
      } else if (res === 400) {
        setMsg("유저 정보를 입력해주세요");
        setErr("유저 정보를 입력해주세요");
        snackOpen.onChange(true);
        setTimeout(() => {
          setMsg(null);
          snackOpen.onChange(false);
        }, 2000);
      }
    });
  };

  const _onKeyDown = (e) => {
    if (e.keyCode === 13) _signIn(e);
  };

  const _onGoogle = (e) => {
    dispatch(userActions.authGoogle(e)).then((res) => {
      if (res) dispatch(probActions.copyProblems());
    });
  };

  return (
    <Presenter
      loading={loading}
      err={err}
      msg={msg}
      cred={cred}
      password={password}
      snackOpen={snackOpen}
      signIn={_signIn}
      onKeyDown={_onKeyDown}
      onGoogle={_onGoogle}
      setIsExist={setIsExist}
    />
  );
};
