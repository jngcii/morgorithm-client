import React from "react";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import ListSolution from "../../Components/ListSolution";
import LoadingBox from "../../Components/LoadingBox";
import Title from "../../Components/Title";
const cx = classNames.bind(styles);

export default ({ originId, username, questions, onPage }) => (
  <div className={cx("wrapper")}>
    {username ? (
      <header className={cx("header")}>{username}님의 Questions</header>
    ) : (
      <header className={cx("header")}>
        Questions  about <Title originId={originId} />
      </header>
    )}

    <section className={cx("body")}>
      {questions !== null ? (
        <ListSolution list={questions.results} subject={"question"} />
      ) : (
        <LoadingBox />
      )}
    </section>

    <div className={cx("pageWrapper")}>
      <ButtonGroup aria-label="outlined secondary button group">
        <Button disabled={!(questions && questions.previous)} onClick={()=>{
          if(questions && questions.previous) onPage(questions.previous);
        }}>Previous</Button>
        <Button disabled={!(questions && questions.next)} onClick={()=>{
          if(questions && questions.next) onPage(questions.next);
        }}>Next</Button>
      </ButtonGroup>
    </div>
  </div>
);
