import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../../redux/modules/user";
import Button from "@material-ui/core/Button";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

export default ({ onCancel, onUpload }) => {
  const [fail, setFail] = useState(false);
  const [access, setAccess] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [password, setPassword] = useState("");
  const checkRef = useRef(null);
  const dispatch = useDispatch();

  const _onCreate = () => {
    dispatch(userActions.createGroup(groupName, password)).then(res => {
      setGroupName("");
      setPassword("");
      if (res) onUpload();
      else {
        setFail(true);
        setTimeout(() => {
          onCancel();
          setTimeout(() => setFail(false), 500);
        }, 1000);
      }
    })
  };

  useEffect(()=>{
    if (!checkRef.current || !checkRef.current.checked) setAccess(false);
  })

  if (fail) return <div className={cx("wrapper")}>너무 많은 그룹에 가입되어 있습니다.</div>

  return (
    <div className={cx("wrapper")}>
      <input
        className={cx("input")}
        placeholder={"그룹명을 입력하세요"}
        value={groupName}
        onChange={e => setGroupName(e.target.value)}
      />

      <div className={cx("access")}>
        <div>
          <label className={cx("label")} htmlFor="checkbox">
            Private
          </label>
          <input
            ref={checkRef}
            type="checkbox"
            id="checkbox"
            value={access}
            onChange={() => setAccess(!access)}
          />
        </div>
        {access && <input value={password} onChange={e=>setPassword(e.target.value)} className={cx("password")} placeholder={"비밀번호를 입력하세요"}/>}
      </div>

      <div className={cx("footer")}>
        <Button onClick={onCancel} className={cx("btn")}>
          Cancel
        </Button>
        <Button onClick={_onCreate} className={cx("btn", "submit")}>
          Create
        </Button>
      </div>
    </div>
  );
};
