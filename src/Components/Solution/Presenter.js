import React from "react";
import { Link } from "react-router-dom";
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
import OptionMenu from "../OptionMenu";
import OptionsBtn from "../OptionsBtn";
import CustomModal from "../CustomModal";
import BoxUpload from "../BoxUpload";
const cx = classNames.bind(styles);


const UploadBtn = ({ handleOpen }) => (
  <button className={cx("uploadBtn")} onClick={handleOpen}>Upload</button>
)


const LoadingBox = () => <div className={cx("loading")} />;

export default ({ profile, origin, creator, solution, counts, newCode, newCaption, newSolved, editing, onUpload }) => {
  return (
    <div className={cx("wrapper")}>
      <header>
        <div className={cx("btn")}>
          <img src={require("../../assets/go-back.png")} />
        </div>

        {origin && <Title originId={origin.id} />}
        <div className={cx("txt")}>에 대한</div>

        <div className={cx("userOverview")}>
          {creator === null ? (
            <LoadingBox />
          ) : (
            <Link to={`/${creator.username}`} className={cx("link")}>
              <User creator={creator} />
            </Link>
          )}
        </div>

        <div className={cx("txt")}>
          님의 {solution && !solution.solved ? "질문" : "풀이"}
        </div>

        <div style={{ flex: 1 }} />

        <div className={cx("option")}>
          {solution && creator && <OptionMenu btnComponent={OptionsBtn} solsId={profile.id === creator.id ? solution.id : undefined} editing={editing} />}
        </div>
      </header>

      <div className={cx("cnts")}>
        {counts && <Cnt solution={counts} />}
      </div>

      <section>
        {editing.value ? (
          <div className={cx("question")}>

            <div className={cx("btns")}>
              <div className={cx("checkbox")} onClick={() => {if(newSolved)newSolved.onChange(!newSolved.value)}}>
                <img src={require(`../../assets/${newSolved && !newSolved.value ? "checked-blue" : "unchecked"}.png`)} />
                <span className={cx(newSolved && !newSolved.value && "in")}>질문으로 올리기</span>
              </div>

              <div className={cx("upload")} style={{marginRight:10}}>
                <button className={cx("uploadBtn")} style={{backgroundColor:"#fff", color:"#333"}} onClick={()=>editing.onChange(false)}>Cancel</button>
              </div>

              <div className={cx("upload")}>
                <CustomModal btnComponent={UploadBtn} contentComponent={BoxUpload} onUp={onUpload} />
              </div>
            </div>

            {newSolved && !newSolved.value && (
              <TextareaAutosize
                className={cx("caption")}
                placeholder="궁금한 점을 자세히 설명해 주세요."
                spellCheck={false}
                value={newCaption.value}
                onChange={e=>newCaption.onChange(e.target.value)}
              />
            )}
          </div>
        ) : (
          solution && !solution.solved && (
            <p className={cx("caption")}>{solution.caption}</p>
          )
        )}
        
        <AceEditor
          width={"auto"}
          height={'700px'}
          theme="solarized_dark"
          // theme="chrome"
          mode={solution ? solution.lang : "python"}
          fontSize={14}
          showPrintMargin={true}
          showGutter={true}
          highlightActiveLine={true}
          value={editing.value ? newCode.value : (solution ? solution.code : "")}
          keyboardHandler={"vscode"}
          readOnly={!editing.value}
          setOptions={{
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
      </section>
    </div>
  );
};
