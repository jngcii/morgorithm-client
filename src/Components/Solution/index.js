import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as solsActions } from "../../redux/modules/solution";
import useInput from "../../Hooks/useInput";
import Presenter from "./Presenter";

export default ({ solutionId, counts, setLikable }) => {
  const [originState, setOriginState] = useState(null);
  const [creatorState, setCreatorState] = useState(null);
  const [solutionState, setSolutionState] = useState(null);

  const newCode = useInput("");
  const newCaption = useInput("");
  const newSolved = useInput("");
  const editing = useInput(false);

  const { user: { profile } } = useSelector(state => state);
  const dispatch = useDispatch();
  
  const _getSolution = () => {
    dispatch(solsActions.getCurrentSolution(solutionId)).then(res => {
      if (res) {
        const { id, problem, creator, lang, code, solved, caption } = res;
        setOriginState(problem);
        setCreatorState(creator);
        setSolutionState({ id, code, lang, solved, caption });
        if (solved) setLikable(true);
      }
    });
  };

  const _onUpload = () => {
    dispatch(solsActions.modifySolution(solutionId, newCode.value, newSolved.value, newCaption.value)).then(res => {
      if (res) {
        _getSolution();
        editing.onChange(false);
      }
    })
  }

  useEffect(_getSolution, []);

  useEffect(() => {
    if (solutionState) {
      newCode.onChange(solutionState.code);
      newCaption.onChange(solutionState.caption);
      newSolved.onChange(solutionState.solved);
    }
  }, [solutionState])

  return (
    <Presenter
    profile={profile}
      origin={originState}
      creator={creatorState}
      solution={solutionState}
      counts={counts}
      newCode={newCode}
      newCaption={newCaption}
      newSolved={newSolved}
      editing={editing}
      onUpload={_onUpload}
    />
  );
};
