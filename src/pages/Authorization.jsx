import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import Register from '../components/forms/register';
import styles from './styles/Authorization.module.css';

const Authorization = () => {
  const match = useRouteMatch();

  return (
    <div className="container auth-container">
      <Register />

      <div className={styles.wrapLink}>
        <span className={styles.linkText}>Есть аккаунт?</span>
        <NavLink to={`${match.url}/login`}>Войти</NavLink>
      </div>
    </div>
  );
};

export default Authorization;
