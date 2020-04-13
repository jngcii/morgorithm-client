import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionCreators as solsActions } from "../../redux/modules/solution";
import Presenter from "./Presenter";

export default ({ match: { params: { username, originId } } }) => {
  const [questionState, setQuestionState] = useState(null);

  const dispatch = useDispatch();

  const _onPage = url => {
    dispatch(
      solsActions.getQuestions2(url)
    ).then(res => {
      setQuestionState(res);
    });
  };

  useEffect(() => {
    if (username) {
      dispatch(solsActions.getQuestions(username)).then(res => setQuestionState(res));
    } else if (originId) {
      dispatch(solsActions.getProblemsQuestions(originId)).then(res => setQuestionState(res));
    }
  }, [username, originId])

  return <Presenter originId={originId} username={username} questions={questionState} onPage={_onPage} />;
}