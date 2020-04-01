import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../../redux/modules/user";
import { actionCreators as probActions } from "../../redux/modules/problem";
import { actionCreators as solsActions } from "../../redux/modules/solution";
import Presenter from "./Presenter";

export default () => {
  const [userState, setUserState] = useState(null);
  const [statusState, setStatusState] = useState(null);
  const [probGroupState, setProbGroupState] = useState(null);
  const [problemState, setProblemState] = useState(null);
  const [questionState, setQuestionState] = useState(null);

  const { user: { profile } } = useSelector(state => state);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.getUser(profile.id)).then(user => {
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
    dispatch(probActions.getProblems({})).then(pres => {
      if (pres) setProblemState(pres);
    });
    dispatch(solsActions.getQuestions(profile.id)).then(qres => {
      if (qres) setQuestionState(qres);
    });
  }, []);

  useEffect(() => {
    if (!!profile && profile.problem_groups !== undefined) {
      setProbGroupState({
        probGroup: profile.problem_groups
      });
    }
  }, [profile]);

  return (
    <Presenter
      userState={userState}
      statusState={statusState}
      probGroupState={probGroupState}
      problemState={problemState}
      questionState={questionState}
    />
  );
};
