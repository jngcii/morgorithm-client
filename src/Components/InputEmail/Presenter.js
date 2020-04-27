import React from "react";
import { CircularProgress, Button, Tooltip } from "@material-ui/core";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import Snack from "../Snack";
const cx = classNames.bind(styles);

export default ({
  email,
  loading,
  err,
  setErr,
  msg,
  confirmCode,
  snackOpen,
  isVerifying,
  setIsVerifying,
  onSend,
  onConfirm,
  onKeyDown,
}) => (
  <div>
    {isVerifying ? (
      <div className={cx("wrapper")}>
        <input
          className={cx("code", "authInput")}
          spellCheck={false}
          placeholder={"인증코드를 입력해주세요"}
          value={confirmCode.value}
          onChange={(e) => confirmCode.onChange(e.target.value)}
          onKeyDown={onKeyDown}
        />
        <Tooltip
          arrow
          title="인증코드를 입력해주세요"
          disableHoverListener={!!confirmCode.value}
        >
          <div className={cx("didi")}>
            <Button className={cx("code")} onClick={!loading && onConfirm} disabled={loading || !confirmCode.value}>
              {loading ? <CircularProgress color={"inherit"} size={20} /> : "인증"}
            </Button>
          </div>
        </Tooltip>
        <div className={cx("re")} onClick={() => {
          setIsVerifying(false);
          setErr(null);
        }}>
          이메일 다시 입력하기
        </div>
        {err && <span className={cx("err")}>{err}</span>}
      </div>
    ) : (
      <div className={cx("wrapper")}>
        <span className={cx("tag")}>이메일를 입력해주세요</span>
        <input
          className={cx("authInput")}
          spellCheck={false}
          placeholder="example@example.com"
          value={email.value}
          onChange={(e) => email.onChange(e.target.value)}
          onKeyDown={onKeyDown}
          autoComplete={"email"}
        />
        {err && <span className={cx("err")}>{err}</span>}

        <Tooltip
          arrow
          title="이메일을 입력해주세요"
          disableHoverListener={!!email.value}
        >
          <div>
            <Button className={cx("btn")} onClick={!loading && onSend} disabled={loading || !email.value}>
              {loading ? <CircularProgress color={"inherit"} size={20} /> : "인증 메일 보내기"}
            </Button>
          </div>
        </Tooltip>
      </div>
    )}
    <Snack
      snackOpen={snackOpen}
      msg={msg}
      isSuccess={msg === "이메일로 인증 코드가 전송되었습니다."}
    />
  </div>
);
