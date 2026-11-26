import { createSlice } from '@reduxjs/toolkit';
import { defaultState } from './types';


const CodeComponentModel = createSlice({
  name: 'CodeComponent',
  initialState: defaultState,
  reducers: {
    refreshComponentState(state = defaultState, { payload }) {
      const refreshState = { ...state };
      refreshState.component = { ...payload };
      return refreshState;
    },
  },
});

export default CodeComponentModel;
