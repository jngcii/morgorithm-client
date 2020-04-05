import React from "react";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import { MEDIA_URL } from "../../constants";
const cx = classNames.bind(styles);

const ModifyComment = ({ editMsg, onKeyDown }) => (
  <TextareaAutosize
    className={cx("modifyInput")}
    rowsMin={2}
    placeholder="Comment ..."
    value={editMsg.value}
    onChange={e => editMsg.onChange(e.target.value)}
    autoFocus
    onKeyDown={onKeyDown}
  />
);

const ModifySubComment = ({ msg, onKDown }) => (
  <input
    className={cx("modifySubInput")}
    placeholder="댓글을 남겨주세요"
    value={msg.value}
    onChange={e => msg.onChange(e.target.value)}
    autoFocus
    onKeyDown={e => onKDown(e)}
  />
);

export default ({
  userId,
  commentEditing,
  subCommentEditing,
  comment,
  commentLikes,
  msg,
  editMsg,
  editSubMsg,
  subComments,
  onEnter,
  onClickEdit,
  onCancelEdit,
  onClickEditSave,
  onDeleteCmt,
  onKeyDownCmt,
  onClickSubEdit,
  onCancelSubEdit,
  onClickSubEditSave,
  onDeleteSubCmt,
  onKeyDownSubCmt,
  onLikeComment,
}) => (
  <div className={cx("wrapper")}>

  <div className={cx("commentContainer")}>
    <div className={cx("user")}>
      <div className={cx("imgWrapper")}>
        <img src={comment.creator.avatar ? `${MEDIA_URL}${comment.creator.avatar}` : require("../../assets/no-profile.png")} />
      </div>
      <div className={cx("username")}>{comment.creator.username}</div>
      <div className={cx("name")}>{comment.creator.name}</div>
    </div>

    <article>
      {commentEditing ? (
        <ModifyComment msg={editMsg} onKeyDownCmt={onKeyDownCmt} />
      ) : (
        <p className={cx("content")}>{comment.message}</p>
      )}

      <div className={cx("footer")}>
      
        {userId === comment.creator.id && (
          commentEditing ? (
            <div className={cx("op")}>
              <span className={cx("blue")} onClick={onCancelEdit}>cancel</span>
              <span className={cx("blue")} onClick={onClickEditSave}>save</span>
            </div>
          ) : (
            <div className={cx("op")}>
              <span className={cx("blue")} onClick={onClickEdit}>edit</span>
              <span className={cx("blue")} onClick={onDeleteCmt}>delete</span>
            </div>
          )
        )}
        {commentLikes && commentLikes.is_liked ? 
        <FavoriteIcon className={cx("likeBtn")} color="inherit" onClick={onLikeComment} /> : 
        <FavoriteBorderIcon className={cx("likeBtn")} color="disabled" onClick={onLikeComment} /> }
        
        <div className={cx("num")}>{commentLikes !== null ? commentLikes.like_count : null}</div>
        <div className={cx("date")}>{comment.natural_time}</div>
      </div>
    </article>
  </div>

  {!!subComments && subComments.map(cmt => (
    <div className={cx("sub")} key={cmt.id}>
        <SubdirectoryArrowRightIcon className={cx("subImg")} />
        <div className={cx("subContent")}>
          <div className={cx("subUser")}>
            <div className={cx("subProfile")}>
              <img src={cmt.creator.avatar ? `${MEDIA_URL}${cmt.creator.avatar}` : require("../../assets/no-profile.png")} />
            </div>
            {cmt.creator.username}
          </div>
          {subCommentEditing === cmt.id ? (
            <ModifySubComment msg={editSubMsg} onKDown={e => onKeyDownSubCmt(e, cmt.id)} />
          ) : (
            <p className={cx("subMsg")}>{cmt.message}</p>
          )}
        </div>
      
      {(userId === comment.creator.id || userId === cmt.creator.id) && (
        subCommentEditing === cmt.id ? (
          <div className={cx("op")}>
            <span className={cx("blue")} onClick={onCancelSubEdit}>cancel</span>
            <span className={cx("blue")} onClick={()=>onClickSubEditSave(cmt.id)}>save</span>
          </div>
        ) : (
          <div className={cx("op")}>
            <span className={cx("blue")} onClick={()=>onClickSubEdit(cmt.id, cmt.message)}>edit</span>
            <span className={cx("blue")} onClick={()=>onDeleteSubCmt(cmt.id)}>delete</span>
          </div>
        )
      )}
    </div>
  ))}

  <div className={cx("subInput")}>
    <SubdirectoryArrowRightIcon className={cx("subImg")} />
    <input
      className={cx("commentInput")}
      placeholder="댓글을 남겨주세요"
      value={msg.value}
      onChange={e => msg.onChange(e.target.value)}
      onKeyDown={onEnter} 
    />
    </div>
  </div>
);