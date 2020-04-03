import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionCreators as solsActions } from "../../redux/modules/solution";
import useInput from "../../Hooks/useInput";
import Presenter from "./Presenter";

export default ({
  match: {
    params: { solutionId }
  }
}) => {
  const [cmtState, setCmtState] = useState(null);
  const msg = useInput("");
  const [countState, setCountState] = useState(null);

  const dispatch = useDispatch();

  const _getSolutionCounts = () => {
    dispatch(solsActions.getSolutionCounts(solutionId)).then(res => {
      if (res) setCountState(res);
    });
  };

  const _getComments = () => {
    dispatch(solsActions.getComments(solutionId)).then(res => {
      if (!!res) setCmtState(res);
    });
  };

  const _onSubmitComment = () => {
    dispatch(solsActions.createComment(solutionId, msg.value)).then(res => {
      msg.onChange("");
      if (res) {
        _getComments();
        _getSolutionCounts();
      }
    });
  };

  useEffect(_getSolutionCounts, []);

  useEffect(_getComments, [solutionId]);

  return (
    <Presenter
      solutionId={solutionId}
      counts={countState}
      comments={cmtState}
      msg={msg}
      getComments={_getComments}
      onSubmitComment={_onSubmitComment}
    />
  );
};
