import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionCreators as solsActions } from "../../redux/modules/solution";
import { actionCreators as probActions } from "../../redux/modules/problem";
import Presenter from "./Presenter";

export default ({ match: { params: { username, originId } } }) => {
  const [questionState, setQuestionState] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (username) {
      dispatch(solsActions.getQuestions(username)).then(res => setQuestionState(res));
    } else if (originId) {
      dispatch(solsActions.getProblemsQuestions(originId)).then(res => setQuestionState(res));
      dispatch()
    }
  }, [username, originId])

  return <Presenter originId={originId} username={username} questions={questionState} />;
}