import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import CustomModal from "../CustomModal";
import BoxLeave from "../BoxLeave";
import LoadingBox from "../LoadingBox";
import EmptyBox from "../EmptyBox";
const cx = classNames.bind(styles);

const LeaveBtn = handleOpen => <button onClick={handleOpen}>leave</button>;

export default ({ groups, searching }) => (
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
        {groups === null && <LoadingBox />}
        {groups !== null && groups.length === 0 && <EmptyBox />}
        {groups !== null && groups.length > 0 && groups.map(group => (
          <tr className={cx(!searching && "non")}>
            <th className={cx("name")}>
              <Link
                className={cx("link")}
                to={{
                  pathname: `/group/${group.id}`,
                  state: { groupId: group.id }
                }}
              >
                {group.name}
              </Link>
            </th>
            <th className={cx("cnt")}>{group.members_count}</th>
            <th className={cx("btn")}>
              <CustomModal
                btnComponent={LeaveBtn}
                contentComponent={BoxLeave}
              />
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
