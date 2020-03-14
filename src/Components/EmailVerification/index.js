import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

export default ({setStep}) => {
  const [isVerifying, setIsVerifying] = useState(false);
  const [err, setErr] = useState(null);

  if (isVerifying) {

    return (
      <div>
        <span className={cx("tag")}></span>
        <input className={cx("code")} spellCheck={false} placeholder={"인증코드를 입력해주세요"} />
        <span className={cx("btn", "code")} onClick={()=>setStep("credential")}>인증</span>
        <div className={cx("re")} onClick={()=>setIsVerifying(false)}>이메일 다시 입력하기</div>
        {err === "typeErr" && <span className={cx("err")}>잘못된 인증코드입니다.</span>}
      </div>
    );

  } else {

    return (
      <div>
        <span className={cx("tag")}>이메일를 입력해주세요</span>
        <input spellCheck={false} placeholder="morgorithm@gmail.com" />
        {err === "typeErr" && <span className={cx("err")}>이메일 양식이 맞지 않습니다.</span>}
        {err === "uniqueErr" && <span className={cx("err")}>이미 존재하는 이메일입니다.</span>}
        <div className={cx("btn")} onClick={()=>setIsVerifying(true)}>인증 메일 보내기</div>
      </div>
    );

  }
};
