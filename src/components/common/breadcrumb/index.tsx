import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';

import styles from './index.module.scss';

interface IBreadcrumb {
  title: string;
  path: string;
}

const Breadcrumb = ({title, path}: IBreadcrumb) => {

  const getPath = () => {
    const pathArr = path.split('/')
    pathArr.splice(0, 1);
    return pathArr.join(' | ');
  }

  return (
    <Grid container xs>
      <Grid item xs={12}>
        <p className={styles.title}>{title}</p>
        <p className={styles.path}>{getPath()}</p>
      </Grid>
      <Grid item xs={12}></Grid>
    </Grid>
  );

}

export default Breadcrumb;