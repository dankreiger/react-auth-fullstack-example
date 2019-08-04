import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { compose } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import { ISignupProps } from './Signup.interface';
import { IApplicationState } from '../../reducers/index.interface';

const Signup: React.FC<ISignupProps> = ({
  handleSubmit,
  signup,
  errorMessage,
  history
}) => {
  const onSubmit = (formProps: any): void => {
    signup(formProps, () => {
      history.push('/feature');
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
      <fieldset>
        <label>Email</label>
        <Field name="email" type="text" component="input" autoComplete="none" />
      </fieldset>
      <fieldset>
        <label>Password</label>
        <Field
          name="password"
          type="password"
          component="input"
          autoComplete="none"
        />
      </fieldset>
      <div>{errorMessage}</div>
      <button>Sign up</button>
    </form>
  );
};

function mapStateToProps(state: IApplicationState) {
  return { errorMessage: state.auth.errorMessage };
}

export default compose(
  connect(
    mapStateToProps,
    actions
  ),
  reduxForm({ form: 'signup' })
)(Signup) as any;
