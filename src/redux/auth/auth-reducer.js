import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: '',
  email: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registerUser: (state, { payload }) => ({ ...state, email: payload.email }),
  },
});

export const { registerUser } = authSlice.actions;

export default authSlice;
