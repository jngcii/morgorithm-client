import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../../redux/modules/user";
import Button from "@material-ui/core/Button";
import EmailIcon from '@material-ui/icons/Email';
import { CircularProgress } from '@material-ui/core';
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

export default ({ onCancel }) => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(null);
  const dispatch = useDispatch();

  const _onEnter = () => {
    setLoading(true);
    dispatch(userActions.findPassword(email)).then(res => {
      setEmail("");
      if (res === 200) {
        setSending("이메일을 확인해주세요.")
      }
      else if (res === 404) {
        setSending("존재하지 않는 이메일입니다.")
      } else {
        setSending("잘돗된 이메일입니다.")
      }
      setTimeout(() => {
        setSending(null);
        setLoading(false);
        onCancel();
      }, 2000)
    })
  }

  return (
    <div className={cx("wrapper")}>
      <EmailIcon color={"primary"} fontSize={"large"} />
      {sending ? (
        <span>{sending}</span>
      ) : (
        <input
          className={cx("input")}
          placeholder={"이메일을 입력하세요"}
          type={"email"}
          value={email}
          onChange={e => setEmail(e.target.value)}
          autoComplete={"email"}
        />
      )}


      {!sending && <div className={cx("footer")}>
        <Button onClick={onCancel} className={cx("btn")}>
          Cancel
        </Button>
        <Button onClick={loading ? ()=>{} :_onEnter} disabled={loading} className={cx("btn", "submit")}>
          {loading ? <CircularProgress color={"inherit"} size={20} /> : "FIND PASSWORD"}
        </Button>
      </div>}
    </div>
  );
};
