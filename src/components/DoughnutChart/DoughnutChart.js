import { Card, CardContent, CardHeader, Typography } from '@material-ui/core';
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import useTransactions from '../../hooks/useTransactions';
import useStyles from './styles';

const DoughnutChart = ({ title }) => {
  const { total, doughnutChartData } = useTransactions(title);
  const classes = useStyles();

  return (
    <Card className={title === 'Income' ? classes.income : classes.expense}>
      <CardHeader title={title} />
      <CardContent>
        <Typography variant="h5">₹ {total}</Typography>
        <Doughnut data={doughnutChartData} />
      </CardContent>
    </Card>
  );
};

export default DoughnutChart;
