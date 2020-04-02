import React from "react";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../../redux/modules/user";
import Button from '@material-ui/core/Button';
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

export default ({ onCancel, id }) => {
  const dispatch = useDispatch();

  const _onLeave = () => {
    dispatch(userActions.leaveGroup(id)).then(()=>onCancel());
  }

  return(
    <div className={cx("wrapper")}>
      <div className={cx("body")}>
        그룹을 나가시겠습니까?
      </div>
      <div className={cx("footer")}>
        <Button onClick={onCancel} className={cx("btn")}>Cancel</Button>
        <Button onClick={_onLeave} className={cx("btn", "submit")}>Leave</Button>
      </div>
    </div>
  )
};