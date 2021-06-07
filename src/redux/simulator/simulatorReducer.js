import { createSlice } from '@reduxjs/toolkit';

export const simulatorSlice = createSlice({
  name: 'simulator',
  initialState: true,
  reducers: {
    isVisibleBtn: (_, { payload }) => {
      console.log(payload);

      return payload;
    },
  },
});

export const { isVisibleBtn } = simulatorSlice.actions;
