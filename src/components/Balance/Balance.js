import { Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { ExpenseTrackerContext } from '../../context/context';
import { formatCurrentDate } from '../../helpers/formatDate';
import Link from '../Link';
import Title from '../Title';
import useStyles from './styles';

const Balance = () => {
  const { balance } = useContext(ExpenseTrackerContext);
  const date = formatCurrentDate(new Date());
  const classes = useStyles();

  return (
    <React.Fragment>
      <Title>Balance</Title>
      <Typography component="p" variant="h4">
      ₹{balance} 
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on {date}
      </Typography>
      <Link goTo="/statistics" label="View statistics" />
    </React.Fragment>
  );
};

export default Balance;
