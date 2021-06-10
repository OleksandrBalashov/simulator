import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import AppBar from './components/appBar/AppBar';
import NavigationRoutes from './components/navigation/NavigationRoutes';
import { authStateChangeUser } from './redux/auth/auth-operations';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authStateChangeUser());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <div className="container offset-s6">
        <NavigationRoutes />
      </div>
    </>
  );
};

export default App;
