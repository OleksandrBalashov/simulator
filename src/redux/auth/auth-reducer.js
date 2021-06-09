import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  userId: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registerUser: (state, { payload }) => console.log(payload),
  },
});

export const { registerUser } = authSlice.actions;

export default authSlice;
