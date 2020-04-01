import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Presenter from "./Presenter";

export default () => {
  const [probGroupState, setProbGroupState] = useState(null);

  const { user: { profile: { problem_groups } } } = useSelector(state => state);

  useEffect(() => {
    setProbGroupState(problem_groups);
  }, [problem_groups]);

  return <Presenter probGroups={probGroupState} />;
}