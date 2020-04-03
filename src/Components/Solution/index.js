import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionCreators as solsActions } from "../../redux/modules/solution";
import Presenter from "./Presenter";

export default ({ solutionId, counts, setLikable }) => {
  const [originState, setOriginState] = useState(null);
  const [creatorState, setCreatorState] = useState(null);
  const [solutionState, setSolutionState] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(solsActions.getCurrentSolution(solutionId)).then(res => {
      if (res) {
        const { id, problem, creator, lang, code, solved, caption } = res;
        setOriginState(problem);
        setCreatorState(creator);
        setSolutionState({ id, code, lang, solved, caption });
        if (solved) setLikable(true);
      }
    });
  }, []);

  return (
    <Presenter
      origin={originState}
      creator={creatorState}
      solution={solutionState}
      counts={counts}
    />
  );
};
