import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../../redux/modules/user";
import { actionCreators as probActions } from "../../redux/modules/problem";
import useInput from "../../Hooks/useInput";
import Presenter from "./Presenter";

export default ({ setIsExist }) => {
  const [loading, setLoading] = useState(false);
  const email = useInput("");
  const password = useInput("");
  const dispatch = useDispatch();

  const _signIn = async e => {

    dispatch(userActions.signIn(email.value, password.value)).then(res => {
      if (!res) {
        email.onChange("");
        password.onChange("");
      } else {
        dispatch(probActions.copyProblems());
      }
    });
  };

  const _onKeyDown = e => {
    if (e.keyCode === 13) _signIn(e);
  }


  return <Presenter email={email} password={password} signIn={_signIn} onKeyDown={_onKeyDown} setIsExist={setIsExist} />;
};
