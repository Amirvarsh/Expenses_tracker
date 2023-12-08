import { Container, CssBaseline } from '@material-ui/core';
import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import useStyles from './styles';

const MainLayout = ({ children }) => {
  const [open, setOpen] = useState(true);
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar open={open} setOpen={setOpen} />
      <Sidebar open={open} setOpen={setOpen} />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          {children}
        </Container>
      </main>
    </React.Fragment>
  );
};

export default MainLayout;
