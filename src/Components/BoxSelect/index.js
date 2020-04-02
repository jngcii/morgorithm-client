import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionCreators as probActions } from "../../redux/modules/problem";
import Presenter from "./Presenter";

export default ({ onCancel, id }) => {
  const [groupState, setGroupState] = useState(null);
  
  const dispatch = useDispatch();

  const _onSelect = groupId => {
    dispatch(probActions.updateProblemsToGroup(groupId, [id], [])).then(() => onCancel());
  }


  useEffect(() => {
    dispatch(probActions.getExGroup(id))
    .then(res => setGroupState(res))
    .catch(onCancel);
  }, [id])
  
  return <Presenter groups={groupState} onSelect={_onSelect} />;
};