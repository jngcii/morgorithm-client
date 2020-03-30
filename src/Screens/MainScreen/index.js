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
    user: { profile }
  } = useSelector(state => state);

  useEffect(() => {
    if (!!profile && profile.id) {
      setUserState({
        id: profile.id,
        username: profile.username,
        name: profile.name,
        email: profile.email,
        group: profile.group
      });
      setStatusState({
        problemsCount: profile.problems_count,
        solvedCount: profile.solved_problems_count,
        questionsCount: profile.questions_count
      });
    }
  }, [profile]);

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
    />
  );
};
