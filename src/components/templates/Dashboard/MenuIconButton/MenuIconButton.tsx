import React from 'react';
import { IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useDispatch } from 'react-redux';
import { metaActions } from '../../../../store/meta/slice';

const MenuIconButton = () => {
  const dispatch = useDispatch();

  return (
    <IconButton
      color="inherit"
      onClick={() => dispatch(metaActions.toggleDrawerOpen())}
    >
      <MenuIcon />
    </IconButton>
  );
};

export default MenuIconButton;
