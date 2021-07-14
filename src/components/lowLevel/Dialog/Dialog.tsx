import React, { PropsWithChildren } from 'react';
import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Dialog as MuiDialog,
} from '@material-ui/core';

interface DialogProps {
  open: boolean;
  title: string;
  description: string;
  onSuccess: () => void;
  onClose: () => void;
}

const Dialog = ({
  open,
  title,
  description,
  onSuccess,
  onClose,
  children,
}: PropsWithChildren<DialogProps>) => (
  <MuiDialog open={open}>
    <DialogTitle>{title}</DialogTitle>
    <DialogContent>
      <DialogContentText>{description}</DialogContentText>
      {children}
    </DialogContent>
    <DialogActions>
      <Button onClick={onSuccess}>Подтвердить</Button>
      <Button onClick={onClose}>Закрыть</Button>
    </DialogActions>
  </MuiDialog>
);

export default Dialog;
