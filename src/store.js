// ? Import modules
import { configureStore } from '@reduxjs/toolkit';
import dropDownloginReducer from './feature/dropDownLoginSlice';
import topNewReducer from './features/topNewSlice';
export default configureStore({
  reducer: {
    dropDownlogin: dropDownloginReducer,
    topNew: topNewReducer,
  },
});
