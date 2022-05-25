import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sidebarSelected: 0,
};

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setSidebarSelected: (state, { payload }) => {
      state.sidebarSelected = payload;
    },
  },
});

export const { setSidebarSelected } = adminSlice.actions;
export default adminSlice.reducer;
