import React from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import IconButton from '@material-ui/core/IconButton';

import classes from './index.module.scss';

interface IModalHeader {
  title: string;
  onClose: any;
}

const ModalHeader = ({ title, onClose }: any) => {

  return (
    <div className={classes.modalHeader}>
      <p className={classes.title}>{title}</p>

      <CancelIcon color="secondary" />

      {/* <IconButton aria-label="delete" className={classes.margin}>
        <CancelIcon />
      </IconButton> */}
    </div>
  );

}

export default ModalHeader;