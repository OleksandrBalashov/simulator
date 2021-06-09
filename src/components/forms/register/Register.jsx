import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authRegisterUser } from '../../../redux/auth/auth-operations';
import styles from './Register.module.css';

const initialState = {
  email: '',
  password: '',
};

const Register = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState(initialState);

  const handleChange = ({ currentTarget: { name, value } }) => {
    setState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(state);
    dispatch(authRegisterUser(state));
  };

  return (
    <div className="row">
      <h4 className={styles.title}>Создать аккаунт</h4>
      <form className="col s12" onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="email"
              type="email"
              name="email"
              className="validate"
              onChange={handleChange}
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-field col s12">
            <input
              id="password"
              type="password"
              name="password"
              className="validate"
              onChange={handleChange}
            />
            <label htmlFor="password">Password</label>
          </div>
        </div>
        <button className="waves-effect waves-light btn-large" type="submit">
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
};

export default Register;
