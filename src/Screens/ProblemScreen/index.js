import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionCreators as solsActions } from "../../redux/modules/solution";
import { actionCreators as probActions } from "../../redux/modules/problem";
import Presenter from "./Presenter";

export default ({ match: { params: { originId } } }) => {
  const [problemState, setProblemState] = useState(null);
  const [solutionState, setSolutionState] = useState(null);
  const [questionState, setQuestionState] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!!originId) {
      dispatch(probActions.getProblem(originId)).then(res => {
        if (res) setProblemState(res);
      })
      dispatch(solsActions.getProblemsQuestions(originId)).then(res => {
        if (res) setQuestionState(res);
      });
      dispatch(solsActions.getProblemsSolutions(originId)).then(res => {
        if (res) setSolutionState(res);
      });
    }
  }, [originId]);

  return <Presenter problem={problemState} solutionList={solutionState} questionList={questionState} />;
};
