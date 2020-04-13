import React from "react";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
import ListSolution from "../../Components/ListSolution";
import LoadingBox from "../../Components/LoadingBox";
import Title from "../../Components/Title";
const cx = classNames.bind(styles);

export default ({ originId, username, solutions, onPage }) => (
  <div className={cx("wrapper")}>
    {username ? (
      <header className={cx("header")}>{username}님의 Solutions</header>
    ) : (
      <header className={cx("header")}>
        Solutions  about <Title originId={originId} />
      </header>
    )}

    <section className={cx("body")}>
      {solutions !== null ? (
        <ListSolution list={solutions.results} subject={"solution"} />
      ) : (
        <LoadingBox />
      )}
    </section>

    <div className={cx("pageWrapper")}>
      <ButtonGroup aria-label="outlined secondary button group">
        <Button disabled={!(solutions && solutions.previous)} onClick={()=>{
          if(solutions && solutions.previous) onPage(solutions.previous);
        }}>Previous</Button>
        <Button disabled={!(solutions && solutions.next)} onClick={()=>{
          if(solutions && solutions.next) onPage(solutions.next);
        }}>Next</Button>
      </ButtonGroup>
    </div>
  </div>
);
