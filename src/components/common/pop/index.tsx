import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

interface IPop {
  handleClose: any;
  open: boolean;
  children: any;
}

const Pop = ({ open, handleClose, children }: IPop) => {
  
  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogContent>
        {children}
      </DialogContent>
    </Dialog>
  );
}

export default Pop;