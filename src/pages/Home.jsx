import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authStateChangeUser } from '../redux/auth/auth-operations';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authStateChangeUser());
  }, [dispatch]);

  return (
    <div>
      <h1>Home Page</h1>
      <h2>Slider</h2>
    </div>
  );
};

export default Home;
