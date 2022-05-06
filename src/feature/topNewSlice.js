import { createSlice } from '@reduxjs/toolkit';

export const topNewSlice = createSlice({
  name: 'topNew',
  initialState: {
    tabList: 'topRated',
  },
  reducers: {
    setTablist: (state, { payload }) => {
      state.tabList = payload;
    },
  },
});

export const { setTablist } = topNewSlice.actions;
export default topNewSlice.reducer;
