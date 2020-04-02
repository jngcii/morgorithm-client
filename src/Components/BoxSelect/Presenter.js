import React from "react";
import { ButtonBase } from '@material-ui/core';
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import EmptyBox from "../EmptyBox";
const cx = classNames.bind(styles);

export default ({ groups, onSelect }) => (
  <div className={cx("wrapper")}>
    {!!groups && groups.length > 0 ? groups.map(group => (
      <ButtonBase key={group.id} className={cx("group")} onClick={()=>onSelect(group.id)}>{group.name}</ButtonBase>
    )) : <EmptyBox bgColor={true} />}
  </div>
);