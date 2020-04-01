import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionCreators as solsActions } from "../../redux/modules/solution";
import Presenter from "./Presenter";

export default () => {
  const [questionState, setQuestionState] = useState(null);
  const { state: { user, problem } } = useLocation();

  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      dispatch(solsActions.getQuestions(user.id)).then(res => setQuestionState(res));
    } else if (problem) {
      dispatch(solsActions.getProblemsQuestions(problem.origin.id)).then(res => setQuestionState(res));
    }
  }, [user, problem])

  return <Presenter user={user} problem={problem} questions={questionState} />;
}