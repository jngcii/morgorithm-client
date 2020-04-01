import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import LineSolution from "../LineSolution";
import LineQuestion from "../LineQuestion";
const cx = classNames.bind(styles);

const LoadingBox = () => <div className={cx("loading")} />;

export default ({ list, subject, user, problem }) => (
  <div className={cx("wrapper")}>
    {subject && (
      <header className={cx("header")}>
        {subject === "question" ? "Questions" : "Solutions"}
        <Link
          className={cx("more", "link")}
          to={{
            pathname:'/question',
            state: {
              user: user || undefined,
              problem: problem || undefined
            }
          }}
        >
          더보기
        </Link>
      </header>
    )}

    <section>
      {!!list && list.length > 0 ? (
        list === null ? (
          <LoadingBox />
        ) : (
          list.map(item => {
            const {
              problem: { id: probId },
              id: solsId
            } = item;

            return (
              <Link
                key={solsId}
                className={cx("line")}
                to={{
                  pathname: `/problem/${probId}/${solsId}`,
                  state: { solutionId: solsId }
                }}
              >
                {subject && subject !== "question" ? (
                  <LineSolution solution={item} />
                  ) : (
                  <LineQuestion question={item} isDetail={true} />
                )}
              </Link>
            );
          })
        )
      ) : (
        <div className={cx("empty")}>
          <span>목록이 비어있습니다.</span>
        </div>
      )}
    </section>
  </div>
);
