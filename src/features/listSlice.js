import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryList: [],
  refList: [],
  searchList: [],
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
    setListSearch: (state, { payload }) => {
      state.searchList = payload;
    },
  },
});

export default listSlice.reducer;
export const { setListCategory, setListRef, setListSearch } = listSlice.actions;
