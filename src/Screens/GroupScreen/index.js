import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../../redux/modules/user";
import { actionCreators as solsActions } from "../../redux/modules/solution";
import Presenter from "./Presenter";

export default () => {
  const [selected, setSelected] = useState(null);
  const [groupState, setGroupState] = useState(null);
  const [questionState, setQuestionState] = useState(null);
  const { state: { groupId } } = useLocation();

  const dispatch = useDispatch();

  const _onClickUser = memberId => {
    if (memberId === selected) {
      setSelected(null);
      setQuestionState(null);
    } else {
      setSelected(memberId);
      dispatch(solsActions.getQuestions(memberId)).then(res => {
        setQuestionState(res);
      })
    }
  };

  useEffect(() => {
    dispatch(userActions.getGroup(groupId)).then(res => {
      setGroupState(res);
    });
  }, []);

  return (
    <Presenter
      selected={selected}
      group={groupState}
      questions={questionState}
      onClickUser={_onClickUser}
    />
  );
};
