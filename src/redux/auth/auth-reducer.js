import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  userId: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    currentUser: (state, { payload }) => console.log(payload),
  },
});

export const { currentUser } = authSlice.actions;

export default authSlice;
