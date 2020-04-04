import React from "react";
import styles from "./styles.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export default ({ counts, onLike }) => {
  return(
  <div className={cx("wrapper")}>
    <header>
    {counts && counts.is_liked ? 
    <img src={require("../../assets/red-heart.png")} className={cx("likeBtn")} onClick={onLike} /> :
    <img src={require("../../assets/empty-heart.png")} className={cx("likeBtn")} onClick={onLike} /> }
    {counts && <span className={cx("ab")} onClick={onLike}>{counts.like_count}</span>}
    </header>
  </div>
)}