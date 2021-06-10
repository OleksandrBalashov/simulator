import { combineReducers } from '@reduxjs/toolkit';
import { authSlice } from './auth/auth-reducer';
import { errorSlice } from './error/error-reducer';
import { loaderSlice } from './loader/loader-reducer';

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  loader: loaderSlice.reducer,
  error: errorSlice.reducer,
});

export default rootReducer;
