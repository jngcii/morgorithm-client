import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import EmailVerification from "../EmailVerification";
const cx = classNames.bind(styles);

export default ({ setIsLoggedIn, setIsExist }) => {
  const [step, setStep] = useState("email");

  return (
    <div className={cx("wrapper")}>
      {step === "email" && <h1 className={cx("header")}>Email</h1>}
      {step === "credential" && <h1 className={cx("header")}>회원 정보</h1>}
      {step === "moreinfo" && <h1 className={cx("header")}>부가 정보</h1>}

      <div className={cx("all", step)}>
        <div className={cx("container")}>
          <EmailVerification setStep={setStep} />
        </div>
        <div
          className={cx("container")}
          onClick={() => setStep("moreinfo")}
          style={{ backgroundColor: "red" }}
        />
        <div
          className={cx("container")}
          onClick={() => setStep("email")}
          style={{ backgroundColor: "purple" }}
        />
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
