import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../../redux/modules/user";
import { actionCreators as probActions } from "../../redux/modules/problem";
import useInput from "../../Hooks/useInput";
import Presenter from "./Presenter";

export default ({ setIsExist }) => {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const email = useInput("");
  const password = useInput("");
  const dispatch = useDispatch();

  const _signIn = async e => {
    setLoading(true);
    e.preventDefault();

    dispatch(userActions.signIn(email.value, password.value)).then(res => {
      setLoading(false);
      if (!res) {
        setErr("잘못된 회원정보입니다.")
        email.onChange("");
        password.onChange("");
      } else {
        dispatch(probActions.copyProblems());
      }
    });
  };

  const _onKeyDown = e => {
    if (e.keyCode === 13) _signIn(e);
  };

  const _onGoogle = e => {
    dispatch(userActions.authGoogle(e)).then(res => {
      if (res) dispatch(probActions.copyProblems());
      else setErr("구글 이메일이 이미 사용중입니다.")
    })
  };

  return <Presenter loading={loading} err={err} setErr={setErr} email={email} password={password} signIn={_signIn} onKeyDown={_onKeyDown} onGoogle={_onGoogle} setIsExist={setIsExist} />;
};
