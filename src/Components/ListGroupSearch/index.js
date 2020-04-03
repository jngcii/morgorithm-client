import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../../redux/modules/user";
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { CircularProgress } from "@material-ui/core";
import classNames from "classnames/bind";
import CustomModal from "../CustomModal";
import BoxPassword from "../BoxPassword";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);


const EnterBtn = ({ handleOpen }) => (
  <Button 
    className={cx("enterBtn")}
    variant="contained"
    endIcon={<ExitToAppIcon color={"inherit"} />}
    onClick={handleOpen}
  >ENTER</Button>
);


export default ({ keyword, searchedGroups, loading }) => {

  const dispatch = useDispatch();

  const _onEnter = groupId => {
    dispatch(userActions.enterGroup(groupId)).then(res => {
      if (!res) alert("너무 많은 그룹에 가입되어있습니다.")
    })
  };

  return (
    <div className={cx("wrapper")}>
      <table>
        <thead>
          <tr>
            <th className={cx("name")}>그룹명</th>
            <th className={cx("cnt")}>인원</th>
            <th className={cx("access")}>공개</th>
            <th className={cx("btn")}></th>
          </tr>
        </thead>

        <tbody>
          {keyword.length > 0 ? (
            loading ? (
              <tr>
                <td style={{ width: "100%" }}>
                  <div className={cx("box")}>
                    <CircularProgress color={"inherit"} size={40} />
                  </div>
                </td>
              </tr>
            ) : (
              searchedGroups.map(group => (
                <tr key={group.id} className={cx("line")}>
                  <th className={cx("name")}>
                    <Link className={cx("link")} to={`/group/${group.id}`}>
                      {group.name}
                    </Link>
                  </th>
                  <th className={cx("cnt")}>{group.members_count}</th>
                  <th className={cx("access")}>
                    {group.is_private && (
                      <img src={require("../../assets/lock.png")} />
                    )}
                  </th>
                  <th className={cx("btn")}>
                    {!group.is_joined ? group.is_private ? (
                      <CustomModal btnComponent={EnterBtn} contentComponent={BoxPassword} id={group.id} />
                    ) : (
                      <EnterBtn handleOpen={() => _onEnter(group.id)} />
                    ) : null}
                  </th>
                </tr>
              ))
            )
          ) : (
            <tr>
              <td className={cx("box")}>
                <img src={require("../../assets/search.png")} />
                <div>search</div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}