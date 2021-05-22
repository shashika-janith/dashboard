import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';

import RouteRegistry from '../../constants/route-registry';

// const SignIn = React.lazy(() =>
//   import('../../views/user/sign-in')
// );
// const SignUp = React.lazy(() =>
//   import('../../views/user/sign-up')
// );

const Routes = () => {

  return (
    <Switch>
      {/* <Route
          path={RouteRegistry.user.subPaths.signIn.path}
          exact
          render={(props) => <SignIn {...props} />}
        /> */}
      {/* <Route
          path={RouteRegistry.user.subPaths.signUp.path}
          exact
          render={(props) => <SignUp {...props} />}
        /> */}
    </Switch>
  )
}

export default Routes;