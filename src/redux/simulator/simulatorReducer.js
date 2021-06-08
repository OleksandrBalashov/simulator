import { createSlice } from '@reduxjs/toolkit';

export const simulatorSlice = createSlice({
  name: 'simulator',
  initialState: false,
  reducers: {
    isVisibleBtn: (_, { payload }) => payload,
  },
});

export const { isVisibleBtn } = simulatorSlice.actions;
