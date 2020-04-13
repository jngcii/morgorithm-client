import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as solsActions } from "../../redux/modules/solution";
import useInput from "../../Hooks/useInput";
import Presenter from "./Presenter";

export default ({ comment, getComments }) => {
  const [commentEditing, setCommentEditing] = useState(false);
  const [subCommentEditing, setSubCommentEditing] = useState(null);
  const [likeState, setLikeState] = useState(null);
  const [subCommentState, setSubCommentState] = useState(null);
  const editMsg = useInput(comment.message);
  const editSubMsg = useInput("");
  const msg = useInput("");

  console.log("shshshshshshshs", comment.creator);

  const { user: { profile: { id: userId } } } = useSelector(state => state);
  const dispatch = useDispatch();

  const _getCommentLikes = () => {
    dispatch(solsActions.getCommentLikes(comment.id)).then(res => {
      if (res) setLikeState(res);
    })
  };

  const _getSubComments = () => {
    dispatch(solsActions.getSubComments(comment.id)).then(res => {
      if (!!res) setSubCommentState(res);
    });
  };

  const _onSubmitSubComment = () => {
    dispatch(solsActions.createSubComment(comment.id, msg.value)).then(res => {
      if (res) _getSubComments();
    });
  };
  
  const _onEnter = event => {
    if (event.keyCode === 13) {
      msg.onChange("");
      _onSubmitSubComment();
    }
  };

  const _onClickEdit = () => {
    if (!!subCommentEditing) setSubCommentEditing(null);
    setCommentEditing(true);
  };

  const _onCancelEdit = () => {
    setCommentEditing(false);
  };

  const _onClickEditSave = () => {
    if (editMsg.value === "") _onCancelEdit();
    else dispatch(solsActions.modifyComment(comment.id, editMsg.value)).then(res => {
      if (res) {
        _onCancelEdit();
        getComments();
      }
    });
  };

  const _onDeleteCmt = () => {
    dispatch(solsActions.deleteComment(comment.id)).then(res => {
      if (res) getComments();
    });
  };

  const _onKeyDownCmt = event => {
    if (event.keyCode == 13 && event.shiftKey) {
      _onClickEditSave();
    }
  };


  const _onClickSubEdit = (id, txt) => {
    if (subCommentEditing === id) setSubCommentEditing(null);
    else {
      setSubCommentEditing(id);
      editSubMsg.onChange(txt);
    }
  };

  const _onCancelSubEdit = () => {
    setSubCommentEditing(null);
  };

  const _onClickSubEditSave = id => {
    if (editSubMsg.value === "") _onCancelSubEdit();
    else dispatch(solsActions.modifySubComment(id, editSubMsg.value)).then(res => {
      if (res) {
        _onCancelSubEdit();
        _getSubComments();
      }
    });
  };

  const _onDeleteSubCmt = id => {
    dispatch(solsActions.deleteSubComment(id)).then(res => {
      if (res) {
        _getSubComments();
      }
    });
  };

  const _onKeyDownSubCmt = (event, id) => {
    if (event.keyCode == 13) {
      _onClickSubEditSave(id);
    }
  };

  const _likeComment = () => {
    dispatch(solsActions.likeComment(comment.id)).then(res => {
      if (res) {
        _getCommentLikes();
      }
    })
  }

  useEffect(() => {
    _getSubComments();
    _getCommentLikes();
  }, [comment]);

  return (
    <Presenter
      userId={userId}
      commentEditing={commentEditing}
      subCommentEditing={subCommentEditing}
      comment={comment}
      commentLikes={likeState}
      msg={msg}
      editMsg={editMsg}
      editSubMsg={editSubMsg}
      subComments={subCommentState}
      onEnter={_onEnter}
      onClickEdit={_onClickEdit}
      onCancelEdit={_onCancelEdit}
      onClickEditSave={_onClickEditSave}
      onKeyDownCmt={_onKeyDownCmt}
      onDeleteCmt={_onDeleteCmt}
      onClickSubEdit={_onClickSubEdit}
      onCancelSubEdit={_onCancelSubEdit}
      onClickSubEditSave={_onClickSubEditSave}
      onDeleteSubCmt={_onDeleteSubCmt}
      onKeyDownSubCmt={_onKeyDownSubCmt}
      onLikeComment={_likeComment}
    />
  );
};
