import { Grid, Paper, Typography } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import { useSelector } from 'react-redux';
import Title from '../../components/Title';
import MainLayout from '../../layout/MainLayout';
import { authSelector } from '../../redux/auth/auth-selector';
import useStyle from '../../styles';

const Profile = () => {
  const classes = useStyle();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const { currentUser } = useSelector(authSelector);

  return (
    <MainLayout>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={fixedHeightPaper}>
            <Title>My Profile</Title>
            <Typography variant="h5">{currentUser.email}</Typography>
          </Paper>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default Profile;
