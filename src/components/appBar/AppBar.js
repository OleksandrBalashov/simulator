import React from 'react';
import { NavLink } from 'react-router-dom';
import mainRoutes from '../../routers/mainRoutes';
import styles from './AppBar.module.css';

const AppBar = () => {
  return (
    <header>
      <nav>
        <div className="nav-wrapper">
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {mainRoutes.map(({ name, exact, path }) => (
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
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default AppBar;
