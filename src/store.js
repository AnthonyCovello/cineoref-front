// ? Import modules
import { configureStore } from '@reduxjs/toolkit';
import topNewReducer from './feature/topNewSlice';

export default configureStore({
  reducer: {
    topNew: topNewReducer,
  },
});
