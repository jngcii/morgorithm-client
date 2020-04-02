import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionCreators as probActions } from "../../redux/modules/problem";
import useInput from "../../Hooks/useInput";
import useArray from "../../Hooks/useArray";
import Presenter from "./Presenter";

export default ({ onCancel, onUpload }) => {
  const [loading, setLoading] = useState(false);
  const [problemState, setProblemState] = useState(null);
  const site = useInput(0);
  const pLevel = useInput(0);
  const sLevel = useInput(0);
  const groupName = useInput("");
  const search = useInput("");
  const addedList = useArray([]);

  const dispatch = useDispatch();

  const onSearching = (k = undefined, c = undefined, l = undefined) => {
    setLoading(true);
    let category = [[], ["Programmers"], ["SWEA"], ["BaekJoon"]];
    let level = [[], [1], [2], [3], [4], [5], [6], [7], [8], [9]];
    let w;
    if (site.value === 1) w = pLevel.value;
    else if (site.value === 2) w = sLevel.value;
    else w = 0;

    dispatch(
      probActions.searchProblems({
        category: c !== undefined ? category[c] : category[site.value],
        level: l !== undefined ? level[l] : level[w],
        keyword: k !== undefined ? k : search.value
      })
    ).then(res => {
      setProblemState(res);
      setLoading(false);
    });
  };

  const _onInput = e => {
    search.onChange(e.target.value);
    onSearching(e.target.value, undefined, undefined);
  };

  const _onUpload = e => {
    e.preventDefault();
    if (groupName.value !== "") {
      dispatch(probActions.createGroup(groupName.value, addedList.array)).then(() => {
        onUpload();
      });
    } else {
      onUpload();
    }
  };

  useEffect(onSearching, []);

  return (
    <Presenter
      site={site}
      pLevel={pLevel}
      sLevel={sLevel}
      groupName={groupName}
      search={search}
      addedList={addedList}
      loading={loading}
      problems={problemState}
      onCancel={onCancel}
      onUpload={_onUpload}
      onSearch={_onInput}
      onClickBtn={onSearching}
    />
  );
};
