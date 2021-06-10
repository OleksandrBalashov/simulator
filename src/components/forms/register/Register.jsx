import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authSignUpUser } from '../../../redux/auth/auth-operations';
import styles from './Register.module.css';

const initialState = {
  name: '',
  email: '',
  password: '',
};

const Register = () => {
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();

  const handleChange = ({ currentTarget: { name, value } }) => {
    setState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    const { name, email, password } = state;

    if (name === '' || email === '' || password === '') return;

    dispatch(authSignUpUser(state));
    setState({ ...initialState });
  };

  return (
    <div className={styles.wrapRegister}>
      <h4 className={styles.title}>Создать аккаунт</h4>
      <form className="col s12" onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-field col s12">
            <input
              id="name"
              type="text"
              name="name"
              className="validate"
              value={state.name}
              onChange={handleChange}
            />
            <label htmlFor="name">Name</label>
          </div>
          <div className="input-field col s12">
            <input
              id="email"
              type="email"
              name="email"
              className="validate"
              value={state.email}
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
              value={state.password}
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
