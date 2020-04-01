import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionCreators as probActions } from "../../redux/modules/problem";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

export default ({ originId }) => {
  const [problem, setProblem] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(probActions.getProblem(originId)).then(res => setProblem(res));
  }, [originId]);

  if (!problem) return null;

  return(
    <Link className={cx("link", "wrapper")} to={`/problem/${problem.origin.id}`}>
      <div>
        <div className={cx("site")}>{problem.origin.category}</div>
        <div className={cx("num")}>{problem.origin.number}</div>
      </div>

      <div className={cx("bottom")}>
        <div className={cx("title")}>{problem.origin.title}</div>
        {problem.origin.level && (
          <div className={cx("level")}>{problem.origin.level}</div>
        )}
      </div>
    </Link>
  );
};
