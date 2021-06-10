import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  userId: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCurrentUser: (_, { payload }) => payload,
    authSignOut: () => initialState,
  },
});

export const { setCurrentUser, authSignOut } = authSlice.actions;
