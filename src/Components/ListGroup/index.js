import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import CustomModal from "../CustomModal";
import BoxLeave from "../BoxLeave";
const cx = classNames.bind(styles);


const LeaveBtn = (handleOpen) => (
  <button onClick={handleOpen}>leave</button>
)


export default ({ searching }) => (
  <div className={cx("wrapper")}>
    <table>
      <thead>
        <tr className={cx(!searching && "non")}>
          <th className={cx("name")}>그룹명</th>
          <th className={cx("cnt")}>인원</th>
          <th className={cx("btn")}></th>
        </tr>
      </thead>

      <tbody>
        {[1,2,3].map(i => (
          <tr className={cx(!searching && "non")}>
            <th className={cx("name")}><Link className={cx("link")} to={"/group/123"}>ssafy31</Link></th>
            <th className={cx("cnt")}>26</th>
            <th className={cx("btn")}>
              <CustomModal btnComponent={LeaveBtn} contentComponent={BoxLeave} />
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
