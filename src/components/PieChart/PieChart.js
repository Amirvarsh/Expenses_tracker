import { Card, CardContent, CardHeader, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { Pie } from 'react-chartjs-2';
import { EXPENSE, INCOME, totalTypes } from '../../constants/categories';
import { ExpenseTrackerContext } from '../../context/context';

const DoughnutChart = () => {
  const { balance, transactions } = useContext(ExpenseTrackerContext);

  const incomeTransaction = transactions
    .filter(t => t.type === INCOME)
    .reduce((acc, item) => (acc += item.amount), 0);
  const expenseTransaction = transactions
    .filter(t => t.type === EXPENSE)
    .reduce((acc, item) => (acc += item.amount), 0);

  const pieChartData = {
    datasets: [
      {
        data: totalTypes.map(t =>
          t.type === INCOME
            ? (t.amount = incomeTransaction)
            : (t.amount = expenseTransaction)
        ),
        backgroundColor: totalTypes.map(t => t.color),
      },
    ],
    labels: totalTypes.map(t => t.type),
  };

  return (
    <Card>
      <CardHeader title="Balance" />
      <CardContent>
        <Typography variant="h5">₹ {balance}</Typography>
        <Pie data={pieChartData} />
      </CardContent>
    </Card>
  );
};

export default DoughnutChart;
