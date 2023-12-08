import {
  Avatar,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import AuthLayout from '../../layout/AuthLayout';
import { sendPasswordResetEmail } from '../../redux/auth/auth-actions';
import useStyle from './styles';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const classes = useStyle();

  const handleSetEmail = e => {
    setEmail(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(sendPasswordResetEmail(email));
    setEmail('');
  };

  return (
    <AuthLayout>
      <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Reset Password
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Email Address"
                  name="email"
                  type="email"
                  value={email}
                  onChange={handleSetEmail}
                  variant="outlined"
                  fullWidth
                  autoFocus
                  required
                />
              </Grid>
              <Button
                type="submit"
                className={classes.submit}
                variant="contained"
                color="primary"
                fullWidth
              >
                Send email to reset password
              </Button>
            </Grid>
          </form>
        </Paper>
      </Container>
    </AuthLayout>
  );
};

export default ResetPassword;
