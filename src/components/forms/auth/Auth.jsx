import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Auth.module.css';

const Auth = () => {
  return (
    <div className="container auth-container">
      <div className="row">
        <h4 className={styles.title}>Войти в аккаунт</h4>

        <form className="col s12">
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" className="validate" />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-field col s12">
              <input id="password" type="password" className="validate" />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <button className="waves-effect waves-light btn-large" type="submit">
            Войти
          </button>
        </form>
      </div>

      <div className={styles.wrapLink}>
        <span className={styles.linkText}>Не существует аккаунта?</span>
        <NavLink to={'/auth'} className={styles.navLink}>
          Регистрация
        </NavLink>
      </div>
    </div>
  );
};

export default Auth;
