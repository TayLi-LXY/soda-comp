import { createSlice } from '@reduxjs/toolkit';
import { defaultState } from './types';


const IntelligentAgentSingleComponentModel = createSlice({
  name: 'IntelligentAgentSingleComponent',
  initialState: defaultState,
  reducers: {
    refreshComponentState(state = defaultState, { payload }) {
      const refreshState = { ...state };
      refreshState.component = { ...payload };
      return refreshState;
    },
  },
});

export default IntelligentAgentSingleComponentModel;
