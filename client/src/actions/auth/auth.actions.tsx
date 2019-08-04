import axios from 'axios';
import { Dispatch, AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { ISignupFormProps } from './auth.actions.interface';
import { IAuthState } from '../../reducers/auth/auth.reducer.interface';
import { AUTH_USER, AUTH_ERROR } from '../../constants';
import { ISigninFormProps } from '../../pages/Signin/Signin.interface';

export const signup = (
  formProps: ISignupFormProps,
  callback: any
): ThunkAction<any, IAuthState, any, AnyAction> => async (
  dispatch: Dispatch
) => {
  try {
    const response = await axios.post(
      'http://localhost:3090/signup',
      formProps
    );
    dispatch({
      type: AUTH_USER,
      payload: response.data.token
    });
    localStorage.setItem('token', response.data.token);
    callback();
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: 'Email in use'
    });
  }
};

export const signout = () => {
  localStorage.removeItem('token');

  return {
    type: AUTH_USER,
    payload: ''
  };
};

export const signin = (
  formProps: ISigninFormProps,
  callback: any
): ThunkAction<any, IAuthState, any, AnyAction> => async (
  dispatch: Dispatch
) => {
  try {
    const response = await axios.post(
      'http://localhost:3090/signin',
      formProps
    );
    dispatch({
      type: AUTH_USER,
      payload: response.data.token
    });
    localStorage.setItem('token', response.data.token);
    callback();
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
      payload: 'Invalid login credentials'
    });
  }
};
