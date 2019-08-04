import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { ISignoutProps } from './Signout.interface';

const Signout: React.FC<ISignoutProps> = ({ signout }) => {
  useEffect(() => {
    signout();
  }, [signout]);
  return <div>goodbye</div>;
};

export default connect(
  null,
  actions
)(Signout);
