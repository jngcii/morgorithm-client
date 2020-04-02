import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionCreators as probActions } from "../../redux/modules/problem";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import CustomModal from "../CustomModal";
import BoxSelect from "../BoxSelect";
import BoxDelete from "../BoxDelete";
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);

const AddMenu = ({handleOpen}) => (
  <MenuItem className={cx("menu")} onClick={handleOpen}>add to solvinglist</MenuItem>
);

const RemoveMenu = ({handleOpen}) => (
  <MenuItem className={cx("menu")} onClick={handleOpen}>remove from here</MenuItem>
);

const ShareMenu = ({handleOpen}) => (
  <MenuItem className={cx("menu")} onClick={handleOpen}>share</MenuItem>
);


export default ({ btnComponent, probId, groupId }) => {
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

  const _onRemove = () => {
    dispatch(probActions.updateProblemsToGroup(groupId, [], [probId])).then(() => history.go());
  }

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
      {btnComponent({anchorRef, handleToggle, open})}

      <Popper
        style={{zIndex:10}}
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
                placement === "bottom" ? "left top" : "left bottom"
            }}
          >
            <Paper className={cx("paper")}>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="menu-list-grow" className={cx("menuList")}>

                  <CustomModal btnComponent={AddMenu} contentComponent={BoxSelect} id={probId} />
                  {groupId && 
                  <CustomModal btnComponent={RemoveMenu} contentComponent={BoxDelete} onUp={_onRemove} />
                  }
                  <CustomModal btnComponent={ShareMenu} contentComponent={BoxDelete} />

                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};
