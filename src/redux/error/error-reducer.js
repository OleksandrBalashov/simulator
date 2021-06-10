import { createSlice } from '@reduxjs/toolkit';

export const errorSlice = createSlice({
  name: 'error',
  initialState: null,
  reducers: {
    setError: (_, { payload }) => payload,
  },
});

export const { setError } = errorSlice.actions;
