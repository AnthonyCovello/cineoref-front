import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryList: [],
  refList: [],
  searchList: [],
  openMenu: false,
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
    setOpenMenu: (state) => {
      state.openMenu = !state.openMenu;
    },
  },
});

export default listSlice.reducer;
export const {
  setListCategory, setListRef, setListSearch, setOpenMenu,
} = listSlice.actions;
