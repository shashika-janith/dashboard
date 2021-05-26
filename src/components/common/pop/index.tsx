import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

interface IPop {
  size: false | "xs" | "sm" | "md" | "lg" | "xl" | undefined;
  handleClose: any;
  open: boolean;
  children: any;
}

const Pop = ({ size, open, handleClose, children }: IPop) => {
  
  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" maxWidth={size} fullWidth={true}>
      <DialogContent>
        {children}
      </DialogContent>
    </Dialog>
  );
}

export default Pop;