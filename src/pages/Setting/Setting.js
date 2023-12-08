import { Grid, Paper } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import MainLayout from '../../layout/MainLayout';
import useStyles from '../../styles';

const Setting = () => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <MainLayout>
      <Grid container spacing={3}>
        {/* Form */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={fixedHeightPaper}>
            <h1>Setting</h1>
          </Paper>
        </Grid>
        {/* Balance */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}></Paper>
        </Grid>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <Paper className={classes.paper}></Paper>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default Setting;
