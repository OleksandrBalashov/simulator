import React, { useEffect } from 'react';
import { ReactComponent as GoogleLogo } from '../images/svg/google_logo.svg';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useHistory, useRouteMatch } from 'react-router-dom';
import Register from '../components/forms/register';
import Spinner from '../components/spinner';
import { authWithGoogle } from '../redux/auth/auth-operations';
import { getUserName } from '../redux/auth/auth-selector';
import { getLoader } from '../redux/loader/loader-selector';
import styles from './styles/Authorization.module.css';
import { getError } from '../redux/error/error-selector';
import Error from '../components/error';

const Authorization = () => {
  const auth = useSelector(getUserName);
  const isLoading = useSelector(getLoader);
  const error = useSelector(getError);
  const history = useHistory();
  const match = useRouteMatch();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!auth) return;

    history.push('/test');
  }, [auth, history]);

  const handleGoogleAuth = e => {
    e.preventDefault();

    dispatch(authWithGoogle());
  };

  return (
    <div className="container auth-container">
      {isLoading && <Spinner />}
      {!!error && <Error message={error} />}

      <Register />

      <div className={styles.wrapLink}>
        <div className={styles.wrapLink}>
          <span className={styles.linkText}>Или с помощью:</span>
          <a href=" " target="_blank" onClick={handleGoogleAuth}>
            <GoogleLogo width="32" />
          </a>
        </div>

        <div>
          <span className={styles.linkText}>Есть аккаунт?</span>
          <NavLink to={`${match.url}/login`}>Войти</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Authorization;
