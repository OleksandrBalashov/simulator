import React from 'react';
import styles from './Auth.module.css';

const Auth = () => {
  return (
    <div className="row">
      <h4 className={styles.title}>Войти в аккаунт</h4>
      <form className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <input id="name" type="text" className="validate" />
            <label htmlFor="text">Name</label>
          </div>
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
  );
};

export default Auth;
