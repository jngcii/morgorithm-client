import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../../redux/modules/user";
import useInput from "../../Hooks/useInput";
import Presenter from "./Presenter";

export default ({ setCredentials, setStep }) => {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);
  const [msg, setMsg] = useState(null);
  const [isVerifying, setIsVerifying] = useState(false);
  const [originCode, setOriginCode] = useState("");
  const confirmCode = useInput("");
  const email = useInput("");
  const snackOpen = useInput(false);
  const dispatch = useDispatch();

  const _isEmail = () => {
    const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    return emailRegex.test(email.value);
  };

  const onSnack = m => {
    snackOpen.onChange(true);
    setErr(m);
    setMsg(m);
    setTimeout(() => {
      setMsg(null);
      snackOpen.onChange(false);
    }, 2000);
  };

  const _onSend = async () => {
    setLoading(true);
    if (!_isEmail()) {
      onSnack("이메일 형식을 확인해주세요.")
      setLoading(false);
      return;
    }
    const uniq = await dispatch(userActions.checkUnique(email.value, null));
    if (!uniq) {
      onSnack("이미 존재하는 이메일입니다.")
      setLoading(false);
      return;
    }
    const code = await dispatch(userActions.sendConfirmCode(email.value));
    if (!!code) {
      snackOpen.onChange(true);
      setOriginCode(code);
      setIsVerifying(true);
      setMsg("이메일로 인증 코드가 전송되었습니다.");
      setTimeout(() => snackOpen.onChange(false), 1500);
      setTimeout(() => setMsg(null), 2500);
      setLoading(false);
    } else {
      onSnack("이미 존재하는 이메일입니다.")
      setLoading(false);
    }
  };

  const _onConfirm = () => {
    if (confirmCode.value === originCode) {
      setCredentials(email.value);
      setStep("credential");
    } else {
      onSnack("잘못된 인증코드입니다.")
    }
    confirmCode.onChange("");
  };

  const _onKeyDown = e => {
    if (e.keyCode === 9) e.preventDefault();
  };

  return (
    <Presenter
      email={email}
      loading={loading}
      msg={msg}
      err={err}
      setErr={setErr}
      confirmCode={confirmCode}
      snackOpen={snackOpen}
      isVerifying={isVerifying}
      setIsVerifying={setIsVerifying}
      onSend={_onSend}
      onConfirm={_onConfirm}
      onKeyDown={_onKeyDown}
    />
  );
};
