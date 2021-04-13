import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import RouteRegistry from './constants/route-registry';

const SignIn = React.lazy(() =>
  import('./views/auth/sign-in')
);
const SignUp = React.lazy(() =>
  import('./views/auth/sign-up')
);

const Routes = () => {

  return (
    <Router>
      <Switch>
        <Route
          path={RouteRegistry.auth.subPaths.signIn.path}
          exact
          render={(props) => <SignIn {...props} />}
        />
        <Route
          path={RouteRegistry.auth.subPaths.signUp.path}
          exact
          render={(props) => <SignUp {...props} />}
        />        
      </Switch>
    </Router>
  )
}

export default Routes;