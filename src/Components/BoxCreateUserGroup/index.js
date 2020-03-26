import React, { useState, useRef, useEffect } from "react";
import Button from "@material-ui/core/Button";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

export default ({ onCancel, onUpload }) => {
  const [access, setAccess] = useState(false);
  const [groupName, setGroupName] = useState("");
  const checkRef = useRef(null);

  useEffect(()=>{
    if (!checkRef.current || !checkRef.current.checked) setAccess(false);
  })

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
          <label className={cx("label")} for="checkbox">
            Private
          </label>
          <input
            ref={checkRef}
            placeholder={"비밀번호를 입력하세요"}
            type="checkbox"
            id="checkbox"
            value={access}
            onChange={() => setAccess(!access)}
          />
        </div>
        {access && <input className={cx("password")} />}
      </div>

      <div className={cx("footer")}>
        <Button onClick={onCancel} className={cx("btn")}>
          Cancel
        </Button>
        <Button onClick={onUpload} className={cx("btn", "submit")}>
          Create
        </Button>
      </div>
    </div>
  );
};
