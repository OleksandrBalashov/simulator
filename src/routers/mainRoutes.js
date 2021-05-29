import { lazy } from 'react';

const mainRoutes = [
  {
    name: 'Home',
    path: '/',
    exact: true,
    component: lazy(() =>
      import('../pages/Home' /* webpackChunkName: 'HomePage'*/),
    ),
  },
  {
    name: 'Auth',
    path: '/auth',
    exact: true,
    component: lazy(() =>
      import('../pages/Auth' /* webpackChunkName: 'AuthPage'*/),
    ),
  },
  {
    name: 'Test',
    path: '/test',
    exact: true,
    component: lazy(() =>
      import('../pages/Test' /* webpackChunkName: 'TestPage'*/),
    ),
  },
  {
    name: 'Results',
    path: '/results',
    exact: true,
    component: lazy(() =>
      import('../pages/Results' /* webpackChunkName: 'ResultPage'*/),
    ),
  },
  {
    name: 'Simulator',
    path: '/simulator',
    exact: true,
    component: lazy(() =>
      import('../pages/Simulator' /* webpackChunkName: 'SimulatorPage'*/),
    ),
  },
  {
    name: 'RoadMap',
    path: '/map',
    exact: true,
    component: lazy(() =>
      import('../pages/RoadMap' /* webpackChunkName: 'RoadMapPage'*/),
    ),
  },
  {
    name: 'Statistic',
    path: '/statistic',
    exact: true,
    component: lazy(() =>
      import('../pages/Statistics' /* webpackChunkName: 'StatisticPage'*/),
    ),
  },
];

export default mainRoutes;
