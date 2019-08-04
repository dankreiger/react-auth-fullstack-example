import { Reducer } from 'redux';

export interface IAuthState {
  readonly authenticated: string | boolean;
  readonly errorMessage: string;
}
export interface IAuthReducer extends Reducer<IAuthState> {}
