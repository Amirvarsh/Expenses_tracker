import React from 'react';
import { Link as LinkRouter } from 'react-router-dom';
import useStyles from './styles';

const Link = ({ goTo, label }) => {
  const classes = useStyles();

  return (
    <div className={classes.seeMore}>
      <LinkRouter to={goTo} className={classes.link}>
        {label}
      </LinkRouter>
    </div>
  );
};

export default Link;
