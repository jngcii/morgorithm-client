import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionCreators as probActions } from "../../redux/modules/problem";
import useArray from "../../Hooks/useArray";
import useInput from "../../Hooks/useInput";
import Presenter from "./Presenter";

export default () => {
  const { state } = useLocation();
  const history = useHistory();

  const [l1, setL1] = useState(false);
  const [l2, setL2] = useState(false);
  const [l3, setL3] = useState(false);
  const [l4, setL4] = useState(false);
  const [l5, setL5] = useState(false);
  const [l6, setL6] = useState(false);
  const [l7, setL7] = useState(false);
  const [l8, setL8] = useState(false);
  const [l9, setL9] = useState(false);

  const [c1, setC1] = useState(false);
  const [c2, setC2] = useState(false);
  const [c3, setC3] = useState(false);

  const [s1, setS1] = useState(false);
  const [s2, setS2] = useState(false);

  const lState = [l1, l2, l3, l4, l5, l6, l7, l8, l9];
  const lSet = [setL1, setL2, setL3, setL4, setL5, setL6, setL7, setL8, setL9];

  const cState = [c1, c2, c3];
  const cSet = [setC1, setC2, setC3];

  const sState = [s1, s2];
  const sSet = [setS1, setS2];
  
  
  const [problemState, setProblemState] = useState(null);

  const group = useInput("");
  const category = useArray([]);
  const level = useArray([]);
  const solved = useArray([]);
  const keyword = useInput("");
  
  const dispatch = useDispatch();

  const onClickCategory = (site, idx) => {
    if (category.array.includes(site)) {
      category.remove(site);
      cSet[idx](false);
    }
    else {
      category.append(site);
      cSet[idx](true);
    }
  };

  const onClickLevel = lev => {
    if (level.array.includes(lev)) {
      level.remove(lev);
      lSet[lev-1](false);
    }
    else {
      level.append(lev);
      lSet[lev-1](true);
    }
  };

  const onClicksolved = sol => {
    if (solved.array.includes(!!sol)) {
      solved.remove(!!sol);
      sSet[sol](false);
    }
    else {
      solved.append(!!sol);
      sSet[sol](true);
    }
  };

  const onDispatch = () => {
    dispatch(
      probActions.getProblems({
        group: state && state.group ? [state.group.id] : [],
        category: category.array,
        level: level.array,
        solved: solved.array,
        keyword: keyword.value
      })
    ).then(res => {
      setProblemState(res);
    });
  };

  const _onDelete = () => {
    dispatch(probActions.deleteGroup(group.value.id)).then(res => {
      if (res) {
        group.onChange("");
        history.push("/problem");
      }
    });
  };

  useEffect(() => {
    onDispatch();
    if (state) group.onChange(state.group);
  }, [state]);

  return (
    <Presenter
      lState={lState}
      cState={cState}
      sState={sState}
      problemList={problemState}
      group={group}
      keyword={keyword}
      onClickCategory={onClickCategory}
      onClickLevel={onClickLevel}
      onClicksolved={onClicksolved}
      onDispatch={onDispatch}
      onDelete={_onDelete}
    />
  );
};
