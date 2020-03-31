import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionCreators as solsActions } from "../../redux/modules/solution";
import Presenter from "./Presenter";

export default ({ solutionId }) => {
  const [problemState, setProblemState] = useState(null);
  const [creatorState, setCreatorState] = useState(null);
  const [solutionState, setSolutionState] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(solsActions.getCurrentSolution(solutionId)).then(res => {
      if (res) {
        const { id, problem, creator, lang, code, solved, caption } = res;
        setProblemState(problem);
        setCreatorState(creator);
        setSolutionState({ id, code, lang, solved, caption });
      }
    });
  }, []);

  return (
    <Presenter
      problem={problemState}
      creator={creatorState}
      solution={solutionState}
    />
  );
};
