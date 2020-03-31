import React from "react";
import TextareaAutosize from "react-textarea-autosize";
import AceEditor from "react-ace";
// import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
// import "ace-builds/src-noconflict/theme-tomorrow_night_blue";
import "ace-builds/src-noconflict/theme-solarized_dark";
// import "ace-builds/src-noconflict/theme-github";
// import "ace-builds/src-noconflict/theme-tomorrow_night";
import "ace-builds/src-noconflict/theme-chrome";
import "ace-builds/src-noconflict/keybinding-vscode";
// import "ace-builds/src-noconflict/keybinding-sublime";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import User from "../User";
import Title from "../Title";
import Cnt from "../Cnt";
const cx = classNames.bind(styles);



const LoadingBox = () => <div className={cx("loading")} />;


export default ({ problem, creator, solution }) => {

  return (
    <div className={cx("wrapper")}>
      <header>
        <div className={cx("btn")}>
          <img src={require("../../assets/go-back.png")} />
        </div>

        <div className={cx("problemOverview")}>
          {problem === null ? <LoadingBox /> : <Title problem={problem} />}
        </div>
        <div className={cx("txt")}>에 대한</div>

        <div className={cx("userOverview")}>
          {creator === null ? <LoadingBox /> : <User creator={creator} />}
        </div>
        <div className={cx("txt")}>
          님의 {solution && !solution.solved ? "질문" : "풀이"}
        </div>
      </header>

      <div className={cx("cnts")}>
        <Cnt />
      </div>

      <section>
        <AceEditor
          width={"auto"}
          height={700}
          // theme="solarized_dark"
          theme="chrome"
          mode="python"
          fontSize={14}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          value={solution ? solution.code : ""}
          keyboardHandler={"vscode"}
          readOnly={true}
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
            padding: 10
          }}
        />

        {solution && !solution.solved && <p className={cx("caption")}>{solution.caption}</p>}
      </section>
    </div>
  );
};
