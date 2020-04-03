import React from "react";
import { Link } from "react-router-dom";
import { CircularProgress, Button } from "@material-ui/core";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import User from "../../Components/User";
import LineQuestion from "../../Components/LineQuestion";
import LoadingBox from "../../Components/LoadingBox";
import EmptyBox from "../../Components/EmptyBox";
import CustomModal from "../../Components/CustomModal";
import BoxLeave from "../../Components/BoxLeave";
import BoxPassword from "../../Components/BoxPassword";
import SecretBox from "../../Components/SecretBox";
const cx = classNames.bind(styles);

const LeaveBtn = ({ handleOpen }) => (
  <Button
    size={"large"}
    className={cx("leaveBtn")}
    variant="contained"
    endIcon={<MeetingRoomIcon color={"inherit"} size={"large"} />}
    onClick={handleOpen}
  >
    OUT
  </Button>
);

const EnterBtn = ({ handleOpen }) => (
  <Button
    className={cx("enterBtn")}
    variant="contained"
    endIcon={<ExitToAppIcon color={"inherit"} />}
    onClick={handleOpen}
  >
    ENTER
  </Button>
);

export default ({ selected, group, questions, onClickUser, onEnter }) => {
  return (
    <div className={cx("wrapper")}>
      <header className={cx("screenHeader")}>
        <div className={cx("goBack")}>
          <img src={require("../../assets/go-back.png")} />
        </div>

        {group === null ? (
          <LoadingBox />
        ) : (
          <h1 className={cx("name")}>{group.name}</h1>
        )}
        {group === null ? (
          <LoadingBox />
        ) : !group.is_private ? (
          group.is_joined ? (
            <CustomModal
              btnComponent={LeaveBtn}
              contentComponent={BoxLeave}
              id={group.id}
            />
          ) : <EnterBtn handleOpen={onEnter} />
        ) : (
          <CustomModal
            btnComponent={group.is_joined ? LeaveBtn : EnterBtn}
            contentComponent={group.is_joined ? BoxLeave : BoxPassword}
            id={group.id}
            inn={true}
          />
        )}
      </header>

      {group && !group.is_joined && group.is_private ? <SecretBox /> : 
      <section className={cx("section")}>
        <div className={cx("extra")}>
          {group === null ? (
            <LoadingBox />
          ) : (
            <span>총 인원 : {group.members_count}</span>
          )}
        </div>

        {group === null ? (
          <LoadingBox />
        ) : (
          <div className={cx("content")}>
            <div className={cx("users")}>
              {group.members.map(member => (
                <div
                  key={member.id}
                  className={cx("userContainer", selected === member && "on")}
                  onClick={() => group&&group.is_private ? onClickUser(member) : alert("코드 공유를 위해 가입해주세요")}
                >
                  <User creator={member} />
                </div>
              ))}
            </div>

            <div className={cx("questions", !selected && "on")}>
              {selected && (
                <Link to={`/${selected.username}`} className={cx("link")}>
                  <div className={cx("go")}>go to profile ></div>
                </Link>
              )}
              {questions === null ? (
                <div style={{ width: "100%", height: "100%" }}>
                  <CircularProgress color={"inherit"} size={40} />
                </div>
              ) : questions.length > 0 ? (
                questions.map(question => (
                  <div className={cx("questionContainer")} key={question.id}>
                    <Link
                      className={"link"}
                      to={{
                        pathname: `/problem/${question.problem.id}/${question.id}`
                      }}
                    >
                      <LineQuestion question={question} isDetail={true} />
                    </Link>
                  </div>
                ))
              ) : (
                <EmptyBox bgColor={true} />
              )}
            </div>
          </div>
        )}
      </section>
      }
    </div>
  );
};
