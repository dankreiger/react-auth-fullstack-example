import { InjectedFormProps } from 'redux-form';
import { AnyAction } from 'redux';
import { RouteComponentProps } from 'react-router';
import { SyntheticEvent } from 'react';

export interface ISigninFormProps extends SyntheticEvent {
  email: string;
  password: string;
}

export interface ISigninProps
  extends InjectedFormProps,
    RouteComponentProps<any> {
  signin: (formProps: ISigninFormProps, callback: any) => AnyAction;
  errorMessage: string;
}
