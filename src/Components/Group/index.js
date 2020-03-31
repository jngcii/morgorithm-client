import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Presenter from "./Presenter";

export default () => {
  const [groupState, setGroupState] = useState(null);
  const { user: { profile: { group } } } = useSelector(state => state);

  useEffect(() => {
    if (group !== undefined) setGroupState(group);
  }, [group])

  return <Presenter groups={groupState} />;
}