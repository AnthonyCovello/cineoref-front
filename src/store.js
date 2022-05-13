// ? Import modules
import { configureStore } from '@reduxjs/toolkit';
import dropdownReducer from './features/dropDownSlice';
import topNewReducer from './features/topNewSlice';
import authReducer from './features/authSlice';
import messageReducer from './features/messageSlice';
import randomRefReducer from './features/randomRefSlice';

const reducer = {
  dropdown: dropdownReducer,
  topNew: topNewReducer,
  auth: authReducer,
  message: messageReducer,
  randomRef: randomRefReducer,

};

// ? Store
export default configureStore({
  reducer,
});
