import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router';
import mainRoutes from '../../routers/mainRoutes';

const NavigationRoutes = () => (
  <Suspense fallback={<h4 className="loading">loading...</h4>}>
    <Switch>
      {mainRoutes.map(({ path, exact, component }) => (
        <Route path={path} exact={exact} component={component} key={path} />
      ))}
    </Switch>
  </Suspense>
);

export default NavigationRoutes;
