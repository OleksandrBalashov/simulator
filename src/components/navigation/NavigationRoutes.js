import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router';
import mainRoutes from '../../routers/mainRoutes';

const NavigationRoutes = () => (
  <Suspense fallback={<h1>loading...</h1>}>
    <Switch>
      {mainRoutes.map(({ path, exact, component }) => (
        <Route path={path} exact={exact} component={component} key={path} />
      ))}
    </Switch>
  </Suspense>
);

export default NavigationRoutes;
