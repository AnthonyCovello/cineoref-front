import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
};

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    setListData: (state, { payload }) => {
      state.list = payload;
    },
  },
});

export default listSlice.reducer;
export const { setListData } = listSlice.actions;
