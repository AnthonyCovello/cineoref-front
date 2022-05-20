import { createAsyncThunk } from '@reduxjs/toolkit';
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

export default proposal;
