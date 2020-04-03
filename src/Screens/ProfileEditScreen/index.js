import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../../redux/modules/user";
import useInput from "../../Hooks/useInput";
import Presenter from "./Presenter";

export default () => {
  const [err, setErr] = useState("");
  const [profile, setProfile] = useState(null);
  const username = useInput("");
  const name = useInput("");
  const { user } = useSelector(state => state);
  const dispatch = useDispatch();

  const _onSubmit = () => {
    dispatch(userActions.editProfile({username: username.value, name: name.value})).then(res => {
      if (res) alert("성공적으로 변경되었습니다.")
    });
  };

  useEffect(() => {
    if(user && user.profile) {
      setProfile(user.profile);
      username.onChange(user.profile.username);
      name.onChange(user.profile.name);
    }
  }, [user])

  useEffect(() => {
    if (user.profile.username !== username.value) {
      dispatch(userActions.checkUnique(null, username.value)).then(res => {
        if (!res) setErr("이미 존재하는 username입니다.")
        else setErr("");
      })
    }
  }, [username])

  const noChange = user.profile.username === username.value && user.profile.name === name.value;

  return <Presenter profile={profile} username={username} name={name} err={err} noChange={noChange} onSubmit={_onSubmit} />;
}