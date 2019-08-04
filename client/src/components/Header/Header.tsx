import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { IApplicationState } from '../../reducers/index.interface';
import { IHeaderProps } from './Header.interface';
import { HeaderWrapper } from './Header.styles';

const Header: React.FC<IHeaderProps> = ({ authenticated }) => {
  const renderLinks = () => {
    if (authenticated) {
      return (
        <div>
          <Link to="/signout">Sign Out</Link>
          <Link to="/feature">Feature</Link>
        </div>
      );
    } else {
      return (
        <div>
          <Link to="/signup">Sign Up</Link>
          <Link to="/signin">Sign In</Link>
        </div>
      );
    }
  };
  return (
    <HeaderWrapper>
      <Link to="/">Redux Auth</Link>
      {renderLinks()}
    </HeaderWrapper>
  );
};

function mapStateToProps(state: IApplicationState) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps)(Header);
