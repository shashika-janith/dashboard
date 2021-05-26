import React from 'react';
import {
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import RouteRegistry from '../../constants/route-registry';

const Employees = React.lazy(() =>
  import('./personnel-management/employees')
);
// const SignUp = React.lazy(() =>
//   import('../../views/user/sign-up')
// );

const Routes = ({ match }: any) => {

  return (
    <Switch>
      <Redirect
        exact
        from={RouteRegistry.app.path}
        to={`${match.url}${RouteRegistry.app.subPaths.personnelManagement.subPaths.employees.path}`}
      />
      <Route
        path={`${match.url}${RouteRegistry.app.subPaths.personnelManagement.subPaths.employees.path}`}
        exact
        render={(props) => <Employees {...props} />}
      />
      <Redirect to={`${match.url}${RouteRegistry.error.path}`} />
    </Switch>
  )
}

export default Routes;