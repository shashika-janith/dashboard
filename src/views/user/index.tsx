import React, { Suspense } from 'react';
import {
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import RouteRegistry from '../../constants/route-registry';
import UserLayout from '../../layout/user-layout';
import Routes from './routes';

const SignIn = React.lazy(() =>
  import('./sign-in')
);
const SignUp = React.lazy(() =>
  import('./sign-up')
);

const User = (props: any) => {
  return (
    <UserLayout>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Routes {...props} />
        </Switch>
      </Suspense>
    </UserLayout>
  );
  
}

export default User;