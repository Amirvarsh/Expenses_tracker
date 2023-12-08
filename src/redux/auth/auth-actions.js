import * as auth from '../../services/auth/auth';
import * as AuthTypes from './auth-types';

export const signUpRequest = () => ({
  type: AuthTypes.SIGN_UP_REQUEST,
});

export const signUpError = message => ({
  type: AuthTypes.SIGN_UP_ERROR,
  payload: message,
});

export const signUp = formData => async dispatch => {
  dispatch(signUpRequest());
  try {
    const { email, password } = formData;
    const user = await auth.singUpWithEmailAndPassword(email, password);
    dispatch(signUpSuccess(user.user));
  } catch (error) {
    dispatch(signUpError(error.message));
  }
};

export const signIn = formData => async dispatch => {
  dispatch(signUpRequest());
  try {
    const { email, password } = formData;
    const user = await auth.singInWithEmailAndPassword(email, password);
    dispatch(signUpSuccess(user.user));
  } catch (error) {
    dispatch(signUpError(error.message));
  }
};

export const signUpWithGoogle = () => async dispatch => {
  dispatch(signUpRequest());
  try {
    const user = await auth.singInWithGoogle();
    dispatch(signUpSuccess(user.additionalUserInfo.profile));
  } catch (error) {
    dispatch(signUpError(error.message));
  }
};

export const signUpSuccess = user => ({
  type: AuthTypes.SIGN_UP_SUCCESS,
  payload: user,
});

export const signOutRequest = () => ({
  type: AuthTypes.SIGN_OUT_REQUEST,
});

export const signOutError = message => ({
  type: AuthTypes.SIGN_OUT_ERROR,
  payload: message,
});

export const signOut = () => async dispatch => {
  dispatch(signOutRequest());

  const token = await auth.getCurrentUserToken();

  if (!token) {
    return dispatch(signOutSuccess());
  }

  auth.signOut();

  return dispatch(signOutSuccess());
};

export const signOutSuccess = () => ({
  type: AuthTypes.SIGN_OUT_SUCCESS,
});

export const sendPasswordResetEmailRequest = () => ({
  type: AuthTypes.SEND_PASSWORD_RESET_EMAIL_REQUEST,
});

export const sendPasswordResetEmailError = message => ({
  type: AuthTypes.SEND_PASSWORD_RESET_EMAIL_ERROR,
  payload: message,
});

export const sendPasswordResetEmail = email => async dispatch => {
  dispatch(sendPasswordResetEmailRequest());
  try {
    await auth.sendPasswordResetEmail(email);
    dispatch(sendPasswordResetEmailSuccess());
  } catch (error) {
    dispatch(sendPasswordResetEmailError(error.message));
  }
  return dispatch(sendPasswordResetEmailSuccess());
};

export const sendPasswordResetEmailSuccess = () => ({
  type: AuthTypes.SEND_PASSWORD_RESET_EMAIL_SUCCESS,
});

export const resetStoreAndLogOut = () => ({
  type: AuthTypes.RESET_STORE_AND_LOG_OUT,
});

export const resetAuthState = () => ({
  type: AuthTypes.RESET_AUTH_STATE,
});
