import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryList: [],
  refList: [],
};

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    setListCategory: (state, { payload }) => {
      state.categoryList = payload;
    },
    setListRef: (state, { payload }) => {
      state.refList = payload;
    },
  },
});

export default listSlice.reducer;
export const { setListCategory, setListRef } = listSlice.actions;
