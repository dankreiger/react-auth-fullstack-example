import { AnyAction } from 'redux';
import { IAuthState } from './auth.reducer.interface';
import { AUTH_USER, AUTH_ERROR } from '../../constants';

const INITIAL_STATE: IAuthState = {
  authenticated: '',
  errorMessage: ''
};

export default function(state: IAuthState = INITIAL_STATE, action: AnyAction) {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: action.payload };
    case AUTH_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}
