import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../../redux/modules/user";
import { actionCreators as solsActions } from "../../redux/modules/solution";
import Presenter from "./Presenter";

export default ({ match: { params: { groupId } } }) => {
  const [selected, setSelected] = useState(null);
  const [groupState, setGroupState] = useState(null);
  const [questionState, setQuestionState] = useState(null);

  const dispatch = useDispatch();
  const history = useHistory();

  const _onClickUser = member => {
    if (member === selected) {
      setSelected(null);
      setQuestionState(null);
    } else {
      setSelected(member);
      dispatch(solsActions.getQuestions(member.username)).then(res => {
        setQuestionState(res);
      })
    }
  };

  const _getGroup = () => {
    dispatch(userActions.getGroup(groupId)).then(res => {
      setGroupState(res);
    });
  };

  const _onEnter = () => {
    dispatch(userActions.enterGroup(groupId)).then(res => {
      if (res) history.go(0);
      else alert("너무 많은 그룹에 가입되어있습니다.")
    })
  };

  useEffect(_getGroup, [groupId]);

  return (
    <Presenter
      selected={selected}
      group={groupState}
      questions={questionState}
      onClickUser={_onClickUser}
      onEnter={_onEnter}
    />
  );
};
