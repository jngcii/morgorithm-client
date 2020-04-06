import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionCreators as solsActions } from "../../redux/modules/solution";
import Presenter from "./Presenter";

export default ({ match: { params: { username, originId } } }) => {
  const [solutionState, setSolutionState] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (username) {
      dispatch(solsActions.getSolutions(username)).then(res => setSolutionState(res));
    } else if (originId) {
      dispatch(solsActions.getProblemsSolutions(originId)).then(res => setSolutionState(res));
    }
  }, [username, originId])

  return <Presenter originId={originId} username={username} solutions={solutionState} />;
}