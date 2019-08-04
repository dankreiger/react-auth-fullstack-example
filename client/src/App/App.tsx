import React from 'react';
import { IAppProps } from './App.interface';
import Header from '../components/Header';
import { AppRouteWrapper, AppWrapper } from './App.styles';

const App: React.FC<IAppProps> = ({ children }) => {
  return (
    <AppWrapper>
      <Header />
      <AppRouteWrapper>{children}</AppRouteWrapper>
    </AppWrapper>
  );
};

export default App;
