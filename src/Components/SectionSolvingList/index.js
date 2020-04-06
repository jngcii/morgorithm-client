import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Presenter from "./Presenter";

export default () => {
  const [probGroupState, setProbGroupState] = useState(null);

  const { user: { profile } } = useSelector(state => state);

  useEffect(() => {
    if (profile)
      setProbGroupState(profile.problem_groups);
  }, [profile]);

  return <Presenter probGroups={probGroupState} />;
}