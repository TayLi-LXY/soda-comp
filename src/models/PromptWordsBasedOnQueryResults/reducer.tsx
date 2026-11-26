import { createSlice } from '@reduxjs/toolkit';
import { defaultState } from './types';


const PromptWordsBasedOnQueryResultsModel = createSlice({
  name: 'PromptWordsBasedOnQueryResults',
  initialState: defaultState,
  reducers: {
    refreshComponentState(state = defaultState, { payload }) {
      const refreshState = { ...state };
      refreshState.component = { ...payload };
      return refreshState;
    },
  },
});

export default PromptWordsBasedOnQueryResultsModel;
