import React from 'react';
import { IAppProps } from './App.interface';
import Header from '../components/Header';

const App: React.FC<IAppProps> = ({ children }) => {
  return (
    <div className="App">
      <Header />
      {children}
    </div>
  );
};

export default App;
