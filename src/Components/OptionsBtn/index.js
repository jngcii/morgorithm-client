import React from "react";
import { ButtonBase } from '@material-ui/core';
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

export default ({anchorRef, handleToggle, open}) => (
  <ButtonBase className={cx("wrapper")} onClick={handleToggle}>
    <img
      src={require("../../assets/options.png")}
      width={15}
      draggable={false}
      ref={anchorRef}
      aria-controls={open ? "menu-list-grow" : undefined}
      aria-haspopup="true"
    />
  </ButtonBase>
);