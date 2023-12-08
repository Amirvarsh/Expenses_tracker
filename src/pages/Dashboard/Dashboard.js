import { Grid, Paper } from '@material-ui/core';
import clsx from 'clsx';
import React, { useContext } from 'react';
import Balance from '../../components/Balance';
import Form from '../../components/Form';
import Link from '../../components/Link';
import Title from '../../components/Title';
import TransTable from '../../components/TransTable';
import { ExpenseTrackerContext } from '../../context/context';
import MainLayout from '../../layout/MainLayout';
import useStyles from '../../styles';

const Dashboard = () => {
  const { transactions } = useContext(ExpenseTrackerContext);
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <MainLayout>
      <Grid container spacing={3}>
        {/* Form */}
        <Grid item xs={12} md={8} lg={9}>
          <Paper className={fixedHeightPaper}>
            <Form />
          </Paper>
        </Grid>
        {/* Balance */}
        <Grid item xs={12} md={4} lg={3}>
          <Paper className={fixedHeightPaper}>
            <Balance />
          </Paper>
        </Grid>
        {/* Recent Transactions */}
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Title>Recent Transanctions</Title>
            <TransTable transactions={transactions.slice(0, 5)} />
            <Link goTo="/transactions" label="See all transactions" />
          </Paper>
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default Dashboard;
