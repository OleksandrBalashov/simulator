import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import Register from '../components/forms/register';

const Authorization = () => {
  const match = useRouteMatch();

  return (
    <div className="container auth-container">
      <Register />

      <NavLink to={`${match.url}/login`}>Войти</NavLink>
    </div>
  );
};

export default Authorization;
