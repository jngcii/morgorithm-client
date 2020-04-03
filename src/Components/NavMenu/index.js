import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../../redux/modules/user";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

export default ({ component }) => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  };

  const _onClickHome = e => {
    history.push("/");
    handleClose(e);
  };

  const _onClickGroup = e => {
    history.push("/group");
    handleClose(e);
  };

  const _onClickEdit = e => {
    history.push("/editprofile");
    handleClose(e);
  }

  const _onSignOut = () => {
    dispatch(userActions.signOut());
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={cx("wrapper")}>
      <div>
        {component({anchorRef, handleToggle, open})}
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom"
              }}
            >
              <Paper className={cx("paper")}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                    className={cx("menuList")}
                  >
                    <MenuItem className={cx("menu")} onClick={_onClickHome}>Home</MenuItem>
                    <MenuItem className={cx("menu")} onClick={_onClickGroup}>My Group</MenuItem>
                    <MenuItem className={cx("menu")} onClick={_onClickEdit}>Edit Profile</MenuItem>
                    <MenuItem className={cx("menu")} onClick={_onSignOut}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
};
