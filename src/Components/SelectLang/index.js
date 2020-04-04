import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import classNames from "classnames/bind";
import styles from "./styles.module.scss";
const cx = classNames.bind(styles);


export default ({index, setIndex}) => {
  const options = [
    'python',
    'java',
    'cpp',
    'c',
    'javascript',
  ];

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClickListItem = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={cx("wrapper")}>
      <List className={cx("list")}>
        <ListItem
          className={cx("listItem")}
          button
          aria-haspopup="true"
          aria-controls="lock-menu"
          onClick={handleClickListItem}
        >
          <ListItemText className={cx("listItemText")} primary={options[index]} />
        </ListItem>
      </List>
      <Menu
        className={cx("menu")}
        id="lock-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {options.map((option, idx) => (
          <MenuItem
            className={cx("menuItem")}
            key={option}
            selected={index === idx}
            onClick={event => handleMenuItemClick(event, idx)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
