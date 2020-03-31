import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import User from "../../Components/User";
import LineQuestion from "../../Components/LineQuestion";
import LoadingBox from "../../Components/LoadingBox";
import EmptyBox from "../../Components/EmptyBox";
const cx = classNames.bind(styles);

export default ({ selected, group, questions, onClickUser }) => {
  return (
    <div className={cx("wrapper")}>
      <header className={cx("screenHeader")}>
        <div className={cx("goBack")}>
          <img src={require("../../assets/go-back.png")} />
        </div>

        {group === null ? (
          <LoadingBox />
        ) : (
          <h1 className={cx("name")}>{group.name}</h1>
        )}

        <button className={cx("btn")}>leave</button>
      </header>

      <section className={cx("section")}>
        <div className={cx("extra")}>
          {group === null ? (
            <LoadingBox />
          ) : (
            <span>총 인원 : {group.members_count}</span>
          )}
          <button disabled={group === null}>질문 올리기</button>
        </div>

        {group === null ? (
          <LoadingBox />
        ) : (
          <div className={cx("content")}>
            <div className={cx("users")}>
              {group.members.map(member => (
                <div
                  key={member.id}
                  className={cx(
                    "userContainer",
                    selected === member.id && "on"
                  )}
                  onClick={() => onClickUser(member.id)}
                >
                  <User creator={member} />
                </div>
              ))}
            </div>

            <div className={cx("questions", !selected && "on")}>
              {questions === null ? (
                <div style={{ width: "100%", height: "100%" }}>
                  <CircularProgress color={"inherit"} size={40} />
                </div>
              ) : questions.length > 0 ? (
                questions.map(question => (
                  <div className={cx("questionContainer")} key={question.id}>
                    <Link
                      className={"link"}
                      to={{
                        pathname: `/problem/${question.problem.id}/${question.id}`,
                        state: { solutionId: question.id }
                      }}
                    >
                      <LineQuestion question={question} isDetail={true} />
                    </Link>
                  </div>
                ))
              ) : (
                <EmptyBox />
              )}
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
