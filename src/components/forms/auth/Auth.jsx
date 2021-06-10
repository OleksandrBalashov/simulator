import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useHistory } from 'react-router-dom';
import {
  authSignInUser,
  authWithGoogle,
} from '../../../redux/auth/auth-operations';
import { getUserName } from '../../../redux/auth/auth-selector';
import { getLoader } from '../../../redux/loader/loader-selector';
import Spinner from '../../spinner';
import { ReactComponent as GoogleLogo } from '../../../images/svg/google_logo.svg';
import styles from './Auth.module.css';
import { getError } from '../../../redux/error/error-selector';
import Error from '../../error';

const initialState = {
  email: '',
  password: '',
};

const Auth = () => {
  const [state, setState] = useState(initialState);
  const error = useSelector(getError);
  const isLoading = useSelector(getLoader);
  const auth = useSelector(getUserName);
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!auth) return;

    history.push('/test');
  }, [auth, history]);

  const handleChange = ({ currentTarget: { name, value } }) => {
    setState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const { email, password } = state;

    if (email === '' || password === '') return;

    dispatch(authSignInUser(state));
    setState({ ...initialState });
  };

  const handleGoogleAuth = e => {
    e.preventDefault();

    dispatch(authWithGoogle());
  };

  return (
    <div className="container auth-container">
      {isLoading && <Spinner />}

      {!!error && <Error message={error} />}

      <div className={styles.wrapForm}>
        <h4 className={styles.title}>Войти в аккаунт</h4>

        <form className="col s12" onSubmit={handleSubmit}>
          <div className="row">
            <div className="input-field col s12">
              <input
                id="email"
                type="email"
                className="validate"
                name="email"
                value={state.email}
                onChange={handleChange}
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-field col s12">
              <input
                id="password"
                type="password"
                className="validate"
                name="password"
                value={state.password}
                onChange={handleChange}
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <button className="waves-effect waves-light btn-large" type="submit">
            Войти
          </button>
        </form>
      </div>

      <div className={styles.wrapLink}>
        <div className={styles.wrapGoogle}>
          <span className={styles.linkText}>Или с помощью:</span>
          <a href=" " onClick={handleGoogleAuth}>
            <GoogleLogo width="32" />
          </a>
        </div>

        <div>
          <span className={styles.linkText}>Нет аккаунта?</span>
          <NavLink to={'/auth'} className={styles.navLink}>
            Создать аккаунт
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Auth;
