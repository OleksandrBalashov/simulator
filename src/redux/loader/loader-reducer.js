import { createSlice } from '@reduxjs/toolkit';

export const loaderSlice = createSlice({
  name: 'loader',
  initialState: false,
  reducers: {
    isLoading: state => !state,
  },
});

export const { isLoading } = loaderSlice.actions;
