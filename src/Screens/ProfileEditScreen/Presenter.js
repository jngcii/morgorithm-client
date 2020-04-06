import React from "react";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import BoxPWChange from "../../Components/BoxPWChange";
import CustomModal from "../../Components/CustomModal";
import BoxProfileImage from "../../Components/BoxProfileImage";
import { MEDIA_URL } from "../../constants";
const cx = classNames.bind(styles);

const CP = ({ handleOpen }) => (
  <div className={cx("cpbtn")} onClick={handleOpen}>change password</div>
);

export default ({ profile, username, name, err, noChange, onSubmit }) => (
  <div className={cx("wrapper")}>
    <div className={cx("imgContainer")}>
      <div className={cx("imgs")}>
        <img
          src={profile && profile.avatar ? `${MEDIA_URL}${profile.avatar}` : require("../../assets/no-profile-big.png")}
          className={cx("img")}
        />
        <CustomModal contentComponent={BoxProfileImage} btnComponent={({ handleOpen }) => <div onClick={handleOpen} className={cx("imgWrapper")}>edit profile image</div>} />
      </div>
    </div>

    <div className={cx("credentialContainer")}>
      <div className={cx("leftContainer")}>
        <div className={cx("left", "each")}>username</div>
        <div className={cx("left", "each")}>name</div>
        <div className={cx("each")} />
        <div className={cx("smalleach")} />
        <div className={cx("smalleach")} />
      </div>
      <div className={cx("rightContainer")}>
        <div className={cx("right", "each")}>
          <input className={cx("input")} value={username.value} onChange={e=>username.onChange(e.target.value)} />
        </div>
        <div className={cx("right", "each")}>
          <input className={cx("input")} value={name.value} onChange={e=>name.onChange(e.target.value)} />
        </div>
        <div className={cx("right", "each")}>
          <button disabled={noChange||!!err} onClick={onSubmit} className={cx("button")}>EDIT PROFILE</button>
        </div>
        <div className={cx("smalleach")}>
          {err}
        </div>
        <div className={cx("smalleach", "change")}>
          <CustomModal btnComponent={CP} contentComponent={BoxPWChange} />
        </div>
      </div>
    </div>
  </div>
);
