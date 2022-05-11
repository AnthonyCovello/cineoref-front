import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ProposalService from '../services/proposal.service';
import { setMessage } from './messageSlice';

export const proposal = createAsyncThunk(
  'proposal/post',
  async ({
    title, category, character, artist, reference,
  }, thunkAPI) => {
    try {
      const response = await ProposalService.proposal(
        title,
        category,
        character,
        artist,
        reference,
      );
      thunkAPI.dispatch(setMessage(response.message));
      return response.message;
    }
    catch (error) {
      const message = (error.response
        && error.response.data
        && error.response.data.message)
        || error.message
        || error.toString();
      thunkAPI.dispatch(setMessage(message));
      return thunkAPI.rejectWithValue();
    }
  },
);

const initialState = {
  title: '',
  category: '',
  character: '',
  artist: '',
  reference: '',
};

const authSlice = createSlice({
  name: 'proposal',
  initialState,
  extraReducers: {
    [proposal.fulfilled]: (state, action) => {
      state.title = action.payload.title;
      state.category = action.payload.category;
      state.character = action.payload.character;
      state.artist = action.payload.artist;
      state.reference = action.payload.reference;
    },
    [proposal.rejected]: (state, action) => {
      state.isLoggedIn = false;
    },
  },
});

const { reducer } = authSlice;
export default reducer;
