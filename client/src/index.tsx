// react + react-dom
import React from 'react';
import ReactDOM from 'react-dom';

// react-redux
import { Provider } from 'react-redux';

// react-router-dom
import { BrowserRouter, Route } from 'react-router-dom';

// redux store
import store from './store/store';

// App
import App from './App';

// pages
import Welcome from './pages/Welcome';
import Signup from './pages/Signup';
import Signout from './pages/Signout';
import Signin from './pages/Signin';
import Feature from './pages/Feature';

// service worker
import * as serviceWorker from './serviceWorker';

// top-level css
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Route path="/" exact component={Welcome} />
        <Route path="/signup" exact component={Signup} />
        <Route path="/signout" exact component={Signout} />
        <Route path="/signin" exact component={Signin} />
        <Route path="/feature" exact component={Feature} />
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
