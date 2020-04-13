import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../../redux/modules/user";
import Button from '@material-ui/core/Button';
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import ImageUploader from "react-images-upload";
const cx = classNames.bind(styles);

export default ({ onCancel }) => {
  const [pictures, setPictures] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const onDrop = picture => {
    setPictures(picture);
  };

  const onUpload = () => {
    const data = new FormData();
    data.append("avatar", pictures[0]);
    dispatch(userActions.uploadAvatar(data)).then(res => {
      onCancel();
    });
  };

  return(
    <div className={cx("wrapper")}>
      <ImageUploader
        withIcon={true}
        onChange={onDrop}
        imgExtension={[".jpg", ".gif", ".png", ".gif", ".jpeg"]}
        maxFileSize={5242880}
      />

      <div className={cx("footer")}>
        <Button onClick={onCancel} className={cx("btn")}>Cancel</Button>
        <Button onClick={onUpload} className={cx("btn", "submit")}>Upload</Button>
      </div>
    </div>
  )
};
