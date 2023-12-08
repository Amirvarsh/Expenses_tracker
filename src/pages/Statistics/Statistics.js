import { Grid } from '@material-ui/core';
import React from 'react';
import DoughnutChart from '../../components/DoughnutChart';
import PieChart from '../../components/PieChart';
import MainLayout from '../../layout/MainLayout';

const Statistics = () => {
  return (
    <MainLayout>
      <Grid container spacing={3}>
        {/* Income Chart */}
        <Grid item xs={12} md={6}>
          <DoughnutChart title="Income" />
        </Grid>
        {/* Expense Chart */}
        <Grid item xs={12} md={6}>
          <DoughnutChart title="Expense" />
        </Grid>
        {/* Balance Chart */}
        <Grid item xs={12}>
          <PieChart />
        </Grid>
      </Grid>
    </MainLayout>
  );
};

export default Statistics;
