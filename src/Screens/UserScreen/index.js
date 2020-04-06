import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../../redux/modules/user";
import { actionCreators as solsActions } from "../../redux/modules/solution";
import Presenter from "./Presenter";
import MainScreen from "../MainScreen";

export default ({ match: { params: { username } } }) => {
  const [userState, setUserState] = useState(null);
  const [statusState, setStatusState] = useState(null);
  const [questionState, setQuestionState] = useState(null);
  const [solutionState, setSolutionState] = useState(null);

  const { user: { profile } } = useSelector(state => state);

  if (username === profile.username) return <MainScreen />;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.getUser(username)).then(user => {
      if (user) {
        setUserState({
          id: user.id,
          username: user.username,
          name: user.name,
          email: user.email,
          group: user.group
        });
        setStatusState({
          problemsCount: user.problems_count,
          solvedCount: user.solved_problems_count,
          questionsCount: user.questions_count
        });
      }
    });

    dispatch(solsActions.getQuestions(username)).then(qres => {
      if (qres) setQuestionState(qres);
    });

    dispatch(solsActions.getSolutions(username)).then(qres => {
      if (qres) setSolutionState(qres);
    });
  }, [username]);

  return (
    <Presenter
      user={userState}
      status={statusState}
      questions={questionState}
      solutions={solutionState}
    />
  );
};
