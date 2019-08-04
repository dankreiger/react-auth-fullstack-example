import React from 'react';
import requireAuth from '../../hocs/requireAuth';

const Feature: React.FunctionComponent = () => {
  return <div>This is the feature</div>;
};

export default requireAuth(Feature);
