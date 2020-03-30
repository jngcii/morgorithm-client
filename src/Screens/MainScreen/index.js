import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Presenter from "./Presenter";

export default () => {
  const [userState, setUserState] = useState(null);
  const [statusState, setStatusState] = useState(null);
  const [probGroupState, setProbGroupState] = useState(null);
  const [problemState, setProblemState] = useState(null);
  const [questionState, setQuestionState] = useState(null);

  const {
    user: { currentUser, profile },
    problem: { problemList },
    solution: { questionList },
  } = useSelector(state => state);

  useEffect(() => {
    if (!!currentUser && currentUser.id) {
      setUserState({
        id: currentUser.id,
        username: currentUser.username,
        name: currentUser.name,
        email: currentUser.email,
        group: currentUser.group
      });
      setStatusState({
        problemsCount: currentUser.problems_count,
        solvedCount: currentUser.solved_problems_count,
        questionsCount: currentUser.questions_count
      });
    }
  }, [currentUser]);

  useEffect(() => {
    if (!!profile && profile.problem_groups !== undefined) {
      setProbGroupState({
        probGroup: profile.problem_groups
      });
    }
  }, [profile]);

  useEffect(() => {
    if (problemList !== undefined) {
      setProblemState(problemList);
    }
  }, [problemList])

  useEffect(() => {
    if (questionList !== undefined) {
      setQuestionState(questionList);
    }
  }, [questionList])

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
