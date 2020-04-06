import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../../redux/modules/user";
import Button from "@material-ui/core/Button";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

export default ({ onCancel, onUpload, id, inn }) => {
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(null);
  const history = useHistory();
  const dispatch = useDispatch();

  const _onEnter = () => {
    dispatch(userActions.enterGroup(id, password)).then(res => {
      if (res === true) {
        onUpload();
        if (inn) history.go(0);
      }
      else if (res === 404) {
        setErr("잘못된 비밀번호입니다.");
        setTimeout(() => {
          onCancel();
          setTimeout(() => setErr(null), 500);
        }, 1000);
      } else {
        setErr("너무 많은 그룹에 가입되어 있습니다.");
        setTimeout(() => {
          onCancel();
          setTimeout(() => setErr(null), 500);
        }, 1000);
      }
    })
  }

  if (err) return <div className={cx("wrapper")}>{err}</div>

  return (
    <div className={cx("wrapper")}>
      <img className={cx("lock")} src={require("../../assets/lock.png")} width={40} />

      <input
        className={cx("input")}
        placeholder={"비밀번호를 입력하세요"}
        type={"password"}
        value={password}
        onChange={e => setPassword(e.target.value)}
      />

      <div className={cx("footer")}>
        <Button onClick={onCancel} className={cx("btn")}>
          Cancel
        </Button>
        <Button onClick={_onEnter} className={cx("btn", "submit")}>
          Enter
        </Button>
      </div>
    </div>
  );
};
