import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionCreators as solsActions } from "../../redux/modules/solution";
import Presenter from "./Presenter";

export default ({ problem }) => {
  const [lang, setLang] = useState(0);
  const [isOpen, setIsOpen] = useState(true);
  const [isQuestion, setIsQuestion] = useState(false);
  const [caption, setCaption] = useState("");
  const [code, setCode] = useState("");

  const langs = ["python", "java", "c_cpp", "c", "javascript"];

  const history = useHistory();
  const dispatch = useDispatch();

  const _onUpload = () => {
    dispatch(
      solsActions.addSolution(
        problem.origin.id,
        code,
        langs[lang]==="c_cpp" ? "cpp" : langs[lang],
        !isQuestion,
        caption
      )
    ).then(res => {
      if (res) history.push(`/problem/${problem.origin.id}/${res.id}`);
      else alert("알 수 없는 오류")
    });
  };

  return (
    <Presenter
      langs={langs}
      lang={lang}
      setLang={setLang}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      isQuestion={isQuestion}
      setIsQuestion={setIsQuestion}
      caption={caption}
      setCaption={setCaption}
      code={code}
      setCode={setCode}
      onUpload={_onUpload}
    />
  );
};
