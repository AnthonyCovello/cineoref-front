// ? Import modules
import { configureStore } from '@reduxjs/toolkit';
import topNewReducer from './features/topNewSlice';

export default configureStore({
  reducer: {
    topNew: topNewReducer,
  },
});
