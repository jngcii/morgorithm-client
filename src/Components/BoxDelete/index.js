import React from "react";
import Button from '@material-ui/core/Button';
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

export default ({onCancel, onUpload}) => (
  <div className={cx("wrapper")}>
    <div className={cx("body")}>
      삭제하시겠습니까?
    </div>
    <div className={cx("footer")}>
      <Button onClick={onCancel} className={cx("btn")}>Cancel</Button>
      <Button onClick={onUpload} className={cx("btn", "submit")}>Delete</Button>
    </div>
  </div>
);