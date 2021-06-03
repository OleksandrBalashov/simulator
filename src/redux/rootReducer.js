import { combineReducers } from '@reduxjs/toolkit';
import authSlice from './auth/auth-reducer';

const rootReducer = combineReducers({
  auth: authSlice.reducer,
});

export default rootReducer;
