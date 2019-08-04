import { IAuthState } from './auth/auth.reducer.interface';
import { FormStateMap } from 'redux-form';

export interface IApplicationState {
  auth: IAuthState;
  form: FormStateMap;
}
