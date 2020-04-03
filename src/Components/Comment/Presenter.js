import React from "react";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import LineComment from "../LineComment";
import LoadingBox from "../LoadingBox";
import EmptyBox from "../EmptyBox";
const cx = classNames.bind(styles);

export default ({ comments, msg, getComments, onSubmitComment, onKeyDown }) => (
  <div className={cx("wrapper")}>
    <header>Comment</header>

    <section>
      <div className={cx("input")}>

        <TextareaAutosize
          className={cx("commentInput")}
          rowsMin={2}
          placeholder="Comment ..."
          value={msg.value}
          onChange={e => msg.onChange(e.target.value)}
          onKeyDown={onKeyDown}
        />

        <button className={cx("submit")} onClick={onSubmitComment}>
          <img src={require("../../assets/send.png")} />
        </button>
        
      </div>

      <hr color={"#eaeaea"} />

      {comments === null ? <LoadingBox /> :
        comments.length === 0 ? (
          <EmptyBox />
        ) : (
          comments.map(cmt => (
            <LineComment key={cmt.id} comment={cmt} getComments={getComments} />
          ))
        )}
    </section>
  </div>
);