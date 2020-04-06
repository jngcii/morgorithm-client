import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../../redux/modules/user";
import Button from "@material-ui/core/Button";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import useInput from "../../Hooks/useInput";
const cx = classNames.bind(styles);

export default ({ onCancel }) => {
  const old_password = useInput("");
  const new_password1 = useInput("");
  const new_password2 = useInput("");
  const [err, setErr] = useState(null);
  const dispatch = useDispatch();

  const _onEnter = () => {
    if (new_password1.value !== new_password2.value) {
      setErr("새로운 비밀번호가 서로 다릅니다.");
      setTimeout(() => {
        setErr(null);
      }, 1000);
    } else {
      dispatch(userActions.changePassword(old_password.value, new_password1.value)).then(res => {
        if (res === true) {
          setErr("비밀번호가 성공적으로 변경되었습니다.");
          setTimeout(() => {
            onCancel();
            setErr(null);
          }, 1000);
        }
        else {
          setErr("잘못된 비밀번호입니다.");
          setTimeout(() => {
            setErr(null);
          }, 1000);
        }
      });
    }
  };

  if (err) return <div className={cx("wrapper")}>{err}</div>

  return (
    <div className={cx("wrapper")}>
      <input
        className={cx("input")}
        placeholder={"현재 비밀번호를 입력하세요"}
        type={"password"}
        value={old_password.value}
        onChange={e => old_password.onChange(e.target.value)}
      />

      <input
        className={cx("input")}
        placeholder={"새로운 비밀번호를 입력하세요"}
        type={"password"}
        value={new_password1.value}
        onChange={e => new_password1.onChange(e.target.value)}
      />

      <input
        className={cx("input")}
        placeholder={"새로운 비밀번호를 다시 입력하세요"}
        type={"password"}
        value={new_password2.value}
        onChange={e => new_password2.onChange(e.target.value)}
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
