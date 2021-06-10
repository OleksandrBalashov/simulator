import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router';
import mainRoutes from '../../routers/mainRoutes';
import Spinner from '../spinner';

const NavigationRoutes = () => (
  <Suspense fallback={<Spinner />}>
    <Switch>
      {mainRoutes.map(({ path, exact, component }) => (
        <Route path={path} exact={exact} component={component} key={path} />
      ))}
    </Switch>
  </Suspense>
);

export default NavigationRoutes;
