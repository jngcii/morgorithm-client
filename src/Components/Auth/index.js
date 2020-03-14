import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
const cx = classNames.bind(styles);

export default ({ setIsLoggedIn }) => {
  const [isExist, setIsExist] = useState(false);

  return (
    <div className={cx("wrapper")}>
      {isExist ? (
        <SignIn setIsLoggedIn={setIsLoggedIn} setIsExist={setIsExist} />
      ) : (
        <SignUp setIsLoggedIn={setIsLoggedIn} setIsExist={setIsExist} />
      )}
    </div>
  );
};
