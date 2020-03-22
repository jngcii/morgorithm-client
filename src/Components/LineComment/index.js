import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

export default () => {
  const caption = `이거는 이렇게합니다
  ghalsklsadgkhaghklsdklghdsa
  kldghsadghklsahkldgsa
  adghkslagsdhkladghkslhkladsg
  agsdhklagsdklhadghksl
  라`;

  return (
    <div className={cx("wrapper")}>
      <div className={cx("user")}>
        <img src={require("../../assets/no-profile.png")} />
        <div className={cx("username")}>Username</div>
        <div className={cx("name")}>name</div>
      </div>

      <article>
        <p className={cx("content")}>{caption}</p>

        <div className={cx("footer")}>
          <img src={require("../../assets/grey-small-like.png")} />
          <div className={cx("num")}>7</div>
          <div className={cx("date")}>40분 전</div>
        </div>
      </article>
    </div>
  );
};
