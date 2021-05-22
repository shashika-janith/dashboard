import React from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import RouteRegistry from './constants/route-registry';

// const SignIn = React.lazy(() =>
//   import('./views/user/sign-in')
// );
// const SignUp = React.lazy(() =>
//   import('./views/user/sign-up')
// );
import Landing from './views/landing/index';
import User from './views/user/index';
import Dashboard from './views/dashboard/index';
import Error404 from './components/common/error/error-404';

const AppRoutes = () => {

  return (
    <Router>
      <Switch>
        <Route
          path={RouteRegistry.landing.path}
          exact
          render={() => <Landing />}
        />
        <Route
          path={RouteRegistry.user.path}
          render={(props) => <User {...props} />}
        />
        <Route
          path={RouteRegistry.app.path}
          render={(props) => <Dashboard {...props} />}
        />
        <Route
          path={RouteRegistry.error.path}
          exact
          render={(props) => <Error404 />}
        />
        <Redirect to={RouteRegistry.error.path}
        />
      </Switch>
    </Router>
  )
}

export default AppRoutes;