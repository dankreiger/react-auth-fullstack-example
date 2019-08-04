import { combineReducers, AnyAction } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { ActionType } from 'typesafe-actions';

import auth from './auth/auth.reducer';
import { IApplicationState } from './index.interface';

export default combineReducers<IApplicationState, ActionType<AnyAction>>({
  auth,
  form: formReducer
});
