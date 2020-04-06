import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
const cx = classNames.bind(styles);

export default () => {
  const [isExist, setIsExist] = useState(true);

  return (
    <div className={cx("wrapper")}>
      {isExist ? (
        <SignIn setIsExist={setIsExist} />
      ) : (
        <SignUp setIsExist={setIsExist} />
      )}
    </div>
  );
};
