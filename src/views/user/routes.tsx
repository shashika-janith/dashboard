import React from 'react';
import {
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import RouteRegistry from '../../constants/route-registry';

const SignIn = React.lazy(() =>
  import('./sign-in')
);
const SignUp = React.lazy(() =>
  import('./sign-up')
);

const Routes = ({ match }: any) => {

  return (
    <Switch>
      <Redirect
        exact
        from={RouteRegistry.user.path}
        to={`${match.url}${RouteRegistry.user.subPaths.signIn.path}`}
      />
      <Route
        path={`${match.url}${RouteRegistry.user.subPaths.signIn.path}`}
        exact
        render={(props) => <SignIn {...props} />}
      />
      <Route
        path={`${match.url}${RouteRegistry.user.subPaths.signUp.path}`}
        exact
        render={(props) => <SignUp {...props} />}
      />
      <Redirect to={`${match.url}${RouteRegistry.error.path}`} />
    </Switch>
  )
}

export default Routes;