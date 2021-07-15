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
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useStyles } from './MenuList.styles';
import { metaActions } from '../../../../store/meta/slice';

const MenuList = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = (link: string) => {
    history.push(link);
    dispatch(metaActions.toggleDrawerOpen());
  };

  return (
    <>
      <List className={classes.root}>
        <ListItem button onClick={() => handleClick('/tasks')}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText>
            <Typography>Задания</Typography>
          </ListItemText>
        </ListItem>
        <ListItem button onClick={() => handleClick('/tasks-list')}>
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
