import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../../redux/modules/user";
import useInput from "../../Hooks/useInput";
import Presenter from "./Presenter";

export default () => {
  const [loading, setLoading] = useState(false);
  const [searchedState, setSearchedState] = useState([]);
  const [groupState, setGroupState] = useState(null);
  const keyword = useInput("");
  const { user: { profile: { group } } } = useSelector(state => state);
  const dispatch = useDispatch();

  const _onSearch = e => {
    keyword.onChange(e);
    setLoading(true);
    if (e !== "")
      dispatch(userActions.searchGroup(e)).then(res => {
        setLoading(false);
        setSearchedState(res);
      });
  };

  useEffect(() => {
    if (group !== undefined) setGroupState(group);
    _onSearch(keyword.value);
  }, [group]);

  return (
    <Presenter
      keyword={keyword}
      groups={groupState}
      searchedGroups={searchedState}
      loading={loading}
      onSearch={_onSearch}
    />
  );
};
