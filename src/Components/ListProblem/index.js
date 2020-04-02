import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import LineProblem from "../LineProblem";
import OptionMenu from "../OptionMenu";
import OptionsBtn from "../OptionsBtn";
const cx = classNames.bind(styles);

export default ({ problemList, op, groupId }) => (
  <div className={cx("wrapper")}>
    <section className={cx("body")}>
      {problemList.map(problem => (
        <div className={cx("eachLine")} key={problem.id}>
          <LineProblem problem={problem} />

          {op && <OptionMenu btnComponent={OptionsBtn} probId={problem.id} groupId={groupId} />}
        </div>
      ))}
    </section>
  </div>
);
