import React from 'react';
import {
  List,
  ListItemIcon,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/Inbox';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import { Link } from 'react-router-dom';
import { useStyles } from './MenuList.styles';

const MenuList = () => {
  const classes = useStyles();

  return (
    <>
      <List className={classes.root}>
        <ListItem button component={Link} to="/tasks">
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText>
            <Typography>Задания</Typography>
          </ListItemText>
        </ListItem>
        <ListItem button component={Link} to="/tasks-list">
          <ListItemIcon>
            <EventAvailableIcon />
          </ListItemIcon>
          <ListItemText>
            <Typography>Успехи</Typography>
          </ListItemText>
        </ListItem>
      </List>
    </>
  );
};

export default MenuList;
