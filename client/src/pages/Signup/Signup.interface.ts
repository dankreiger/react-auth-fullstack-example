import { InjectedFormProps } from 'redux-form';
import { AnyAction } from 'redux';
import { RouteComponentProps } from 'react-router';
import { SyntheticEvent } from 'react';

export interface ISignupFormProps extends SyntheticEvent {
  email: string;
  password: string;
}

export interface ISignupProps
  extends InjectedFormProps,
    RouteComponentProps<any> {
  signup: (formProps: ISignupFormProps, callback: any) => AnyAction;
  errorMessage: string;
}
