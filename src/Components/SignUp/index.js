import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import InputEmail from "../InputEmail";
import InputUser from "../InputUser";
const cx = classNames.bind(styles);

export default ({ setIsExist }) => {
  const [step, setStep] = useState("email");
  const [credentials, setCredentials] = useState("");

  return (
    <div className={cx("wrapper")}>
      {step === "email" && <h1 className={cx("header")}>Email</h1>}
      {step === "credential" && <h1 className={cx("header")}>회원 정보</h1>}
      {/* {step === "moreinfo" && <h1 className={cx("header")}>부가 정보</h1>} */}

      <div className={cx("all", step)}>
        <div className={cx("container")}>
          <InputEmail setCredentials={setCredentials} setStep={setStep} />
        </div>
        <div className={cx("container")}>
          <InputUser credentials={credentials} />
        </div>
      </div>

      <div className={cx("except")}>
        <span className={cx("btn")} onClick={() => setIsExist(true)}>
          로그인
        </span>
        <span>하러 가기</span>
      </div>
    </div>
  );
};
