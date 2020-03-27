import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../../redux/modules/user";
import useInput from "../../Hooks/useInput";
import Presenter from "./Presenter";

export default ({ setIsExist }) => {
  const [loading, setLoading] = useState(false);
  const email = useInput("");
  const password = useInput("");
  const dispatch = useDispatch();

  const _signIn = async e => {
    e.preventDefault();

    dispatch(userActions.signIn(email.value, password.value)).then(res => {
      if (!res) {
        email.onChange("");
        password.onChange("");
      }
      console.log(res)
    });
  };

  return <Presenter email={email} password={password} signIn={_signIn} setIsExist={setIsExist} />;
};
