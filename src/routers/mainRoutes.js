import { lazy } from 'react';

const mainRoutes = [
  {
    name: 'Главная',
    path: '/',
    exact: true,
    navLink: true,
    component: lazy(() =>
      import('../pages/Home' /* webpackChunkName: 'HomePage'*/),
    ),
  },
  {
    name: 'Войти',
    path: '/auth',
    restricted: true,
    exact: true,
    navLink: true,
    component: lazy(() =>
      import(
        '../pages/Authorization' /* webpackChunkName: 'AuthorizationPage'*/
      ),
    ),
  },
  {
    name: 'Регистр',
    path: '/auth/login',
    exact: true,
    navLink: false,
    component: lazy(() =>
      import(
        '../components/forms/auth/Auth' /* webpackChunkName: 'AuthorizationPage'*/
      ),
    ),
  },
  {
    name: 'Тест',
    path: '/test',
    exact: true,
    navLink: true,
    component: lazy(() =>
      import('../pages/Test' /* webpackChunkName: 'TestPage'*/),
    ),
  },
  {
    name: 'Результат',
    path: '/results',
    exact: true,
    navLink: true,
    component: lazy(() =>
      import('../pages/Results' /* webpackChunkName: 'ResultPage'*/),
    ),
  },
  {
    name: 'Симулятор',
    path: '/simulator',
    exact: true,
    navLink: true,
    component: lazy(() =>
      import('../pages/Simulator' /* webpackChunkName: 'SimulatorPage'*/),
    ),
  },
  {
    name: 'Карта',
    path: '/map',
    exact: true,
    navLink: true,
    component: lazy(() =>
      import('../pages/RoadMap' /* webpackChunkName: 'RoadMapPage'*/),
    ),
  },
  {
    name: 'Статистика',
    path: '/statistic',
    exact: true,
    navLink: true,
    component: lazy(() =>
      import('../pages/Statistics' /* webpackChunkName: 'StatisticPage'*/),
    ),
  },
];

export default mainRoutes;
