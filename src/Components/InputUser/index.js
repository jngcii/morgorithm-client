import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../../redux/modules/user";
import useInput from "../../Hooks/useInput";
import Presenter from "./Presenter";

export default ({ credentials }) => {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const username = useInput("");
  const name = useInput("");
  const password1 = useInput("");
  const password2 = useInput("");
  const dispatch = useDispatch();

  const _isUsername = () => {
    // 3자 이상 16자 이하
    const usernameRegex = /^[a-z0-9_-]{3,16}$/;
    return usernameRegex.test(username.value);
  };

  const _isPassword = () => {
    const passwordRegex = /^[a-zA-Z0-9]{8,16}$/;
    return passwordRegex.test(password1.value);
  };

  const _signUp = async () => {
    setLoading(true);
    if (!_isUsername()) {
      setErr("typeErr");
      setLoading(false);
      return;
    }
    const uniq = await dispatch(userActions.checkUnique(null, username.value));
    if (!uniq) {
      setErr("uniqueErr");
      setLoading(false);
      return;
    }
    if (!_isPassword()) {
      setErr("pwErr");
      setLoading(false);
      return;
    }
    if (password1.value != password2.value) {
      setErr("pw2Err");
      setLoading(false);
      return;
    }

    const res = await dispatch(
      userActions.signUp(
        credentials,
        username.value,
        name.value,
        password1.value
      )
    );
    if (!!res) {
      setLoading(false);
    }
  };

  return (
    <Presenter
      loading={loading}
      err={err}
      username={username}
      name={name}
      password1={password1}
      password2={password2}
      signUp={_signUp}
    />
  );
};
