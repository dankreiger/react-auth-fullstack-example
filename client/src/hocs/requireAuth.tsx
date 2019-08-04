import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IApplicationState } from '../reducers/index.interface';

interface RequireAuthProps {
  readonly auth: string | boolean;
}

/** TODO: type this */
export default (ChildComponent: any) => {
  class ComposedComponent extends Component<any> {
    // Our component just got rendered
    componentDidMount() {
      this.shouldNavigateAway();
    }
    // Our component just got updated
    componentDidUpdate() {
      this.shouldNavigateAway();
    }
    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push('/');
      }
    }
    render() {
      return <ChildComponent {...this.props} />;
    }
  }
  function mapStateToProps(state: IApplicationState): RequireAuthProps {
    return { auth: state.auth.authenticated };
  }
  return connect(mapStateToProps)(ComposedComponent);
};
