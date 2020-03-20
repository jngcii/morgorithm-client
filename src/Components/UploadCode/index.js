import React, { useState } from "react";
import AceEditor from "react-ace";
// import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
// import "ace-builds/src-noconflict/theme-tomorrow_night_blue";
import "ace-builds/src-noconflict/theme-solarized_dark";
// import "ace-builds/src-noconflict/theme-github";
// import "ace-builds/src-noconflict/theme-tomorrow_night";
import "ace-builds/src-noconflict/keybinding-vscode";
// import "ace-builds/src-noconflict/keybinding-sublime";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

export default () => {
  const [code, setCode] = useState("");

  return (
    <div className={cx("wrapper")}>
      <AceEditor
        width={"100%"}
        placeholder="코드를 이곳에 작성해주세요."
        theme="solarized_dark"
        mode="python"
        onChange={setCode}
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={code}
        keyboardHandler={"vscode"}
        // readOnly={true}
        setOptions={{
          enableBasicAutocompletion: false,
          enableLiveAutocompletion: false,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 4,
          fontSize: 16,
          useSoftTabs: true
        }}
        style={{
          overflow: "scroll",
          padding: 10,
        }}
      />

      <div>Upload +</div>
    </div>
  );
};
