import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

export default () => <div className={cx("loading")} />;