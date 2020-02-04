import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import 'gestalt/dist/gestalt.css';

import App from './components/App';
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import LogOut from './components/LogOut';
import * as serviceWorker from './serviceWorker';
import BrewsList from './components/BrewsList';
import Checkout from './components/Checkout';
import { getToken } from './utils';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      render={props =>
        getToken() && restricted ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /signin page
    <Route
      {...rest}
      render={props =>
        getToken() ? <Component {...props} /> : <Redirect to="/signin" />
      }
    />
  );
};

const Root = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <PublicRoute
          restricted={false}
          component={App}
          exact
          path={`${process.env.PUBLIC_URL}`}
        />
        <PublicRoute
          restricted={true}
          component={SignUp}
          path={`${process.env.PUBLIC_URL}/signup`}
        />
        <PublicRoute
          restricted={true}
          component={SignIn}
          path={`${process.env.PUBLIC_URL}/signin`}
        />
        <PrivateRoute
          component={Checkout}
          path={`${process.env.PUBLIC_URL}/checkout`}
        />
        <Route component={LogOut} path={`${process.env.PUBLIC_URL}/logout`} />
        <PublicRoute
          restricted={false}
          component={BrewsList}
          path="/:brandid"
        />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
