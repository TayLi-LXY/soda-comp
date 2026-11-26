import { createSlice } from '@reduxjs/toolkit';
import { defaultState } from './types';


const TestPageModel = createSlice({
  name: 'TestPage',
  initialState: defaultState,
  reducers: {
    refreshPageState(state = defaultState, { payload }) {
      const refreshState = { ...state };
      refreshState.page = { ...payload };
      return refreshState;
    },
  },
});

export default TestPageModel;
