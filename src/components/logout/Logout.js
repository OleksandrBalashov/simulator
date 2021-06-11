import React from 'react';
import { useDispatch } from 'react-redux';
import { authLogOut } from '../../redux/auth/auth-operations';

const Logout = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(authLogOut());
  };

  return (
    <button type="button" className="btn" onClick={handleClick}>
      Выйти
    </button>
  );
};

export default Logout;
