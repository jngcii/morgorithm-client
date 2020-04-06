import React from "react";
import Presenter from "./Presenter";

export default ({ comments, msg, getComments, onSubmitComment }) => {
  const _onKeyDown = event => {
    if (event.keyCode == 13 && event.shiftKey) {
      onSubmitComment();
    }
  };

  return (
    <Presenter
      comments={comments}
      msg={msg}
      getComments={getComments}
      onSubmitComment={onSubmitComment}
      onKeyDown={_onKeyDown}
    />
  );
};
