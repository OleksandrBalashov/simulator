import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getUserName } from '../../redux/auth/auth-selector';
import mainRoutes from '../../routers/mainRoutes';
import Logout from '../logout';
import styles from './AppBar.module.css';

const AppBar = () => {
  const user = useSelector(getUserName);

  return (
    <header>
      <nav>
        <ul className="left hide-on-med-and-down">
          {!user
            ? mainRoutes.map(
                ({ name, exact, path, navLink }) =>
                  navLink && (
                    <li key={path} className={styles.items}>
                      <NavLink
                        to={path}
                        exact={exact}
                        className={styles.link}
                        activeClassName={styles.activeLink}
                      >
                        {name}
                      </NavLink>
                    </li>
                  ),
              )
            : mainRoutes.map(
                ({ name, exact, path, navLink, restricted }) =>
                  navLink &&
                  !restricted && (
                    <li key={path} className={styles.items}>
                      <NavLink
                        to={path}
                        exact={exact}
                        className={styles.link}
                        activeClassName={styles.activeLink}
                      >
                        {name}
                      </NavLink>
                    </li>
                  ),
              )}
        </ul>
        {user && <Logout />}
      </nav>
    </header>
  );
};

export default AppBar;
