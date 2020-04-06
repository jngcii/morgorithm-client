import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import LineProblem from "../LineProblem";
const cx = classNames.bind(styles);

export default ({ problem, addedList }) => {
  const [added, setAdded] = useState(false);

  const _onClickToggler = () => {
    if (addedList.array.includes(problem.id)) {
      addedList.remove(problem.id).then(res => {
        if (res) setAdded(false);
      });
    } else {
      addedList.append(problem.id).then(res => {
        if (res) setAdded(true);
      });
    }
  };

  useEffect(() => {
    if (addedList.array.includes(problem.id)) {
      setAdded(true);
    } else {
      setAdded(false);
    }
  }, [addedList]);


  return (
    <div className={cx("wrapper")}>
      <LineProblem problem={problem} adding={true} />

      <div className={cx("fade", added ? "in" : "out")} />

      {added ? (
        <div className={cx("toggler")} onClick={_onClickToggler}>
          <img src={require("../../assets/removing.png")} width={20} />
        </div>
      ) : (
        <div className={cx("toggler")} onClick={_onClickToggler}>
          <img src={require("../../assets/adding.png")} width={20} />
        </div>
      )}
    </div>
  );
};
