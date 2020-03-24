import React, { useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import User from "../../Components/User";
import LineQuestion from "../../Components/LineQuestion";
const cx = classNames.bind(styles);

export default () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className={cx("wrapper")}>
      <header className={cx("screenHeader")}>
        <div className={cx("goBack")}>
          <img src={require("../../assets/go-back.png")} />
        </div>

        <h1 className={cx("name")}>Group Name</h1>

        <button className={cx("btn")}>leave</button>
      </header>

      <section className={cx("section")}>
        <div className={cx("extra")}>
          <span>총 인원 : 23</span>
          <button>질문 올리기</button>
        </div>

        <div className={cx("content")}>
          <div className={cx("users")}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => (
              <div
                className={cx("userContainer", selected===i && "on")}
                onClick={() => {
                  if (selected === i) setSelected(null);
                  else setSelected(i);
                }}
                key={i}
              >
                <User />
              </div>
            ))}
          </div>
          <div className={cx("questions", !selected && "on")}>
            {[1,2,3].map(i => (
              <div className={cx("questionContainer")} key={i}>
                <Link className={"link"} to={"/problem/123/123"}>
                  <LineQuestion isDetail={true} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
