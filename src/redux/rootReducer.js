import { combineReducers } from '@reduxjs/toolkit';
import authSlice from './auth/auth-reducer';
import { simulatorSlice } from './simulator/simulatorReducer';

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  isVisibleBtn: simulatorSlice.reducer,
});

export default rootReducer;
