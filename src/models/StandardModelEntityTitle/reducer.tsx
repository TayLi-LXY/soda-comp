import { createSlice } from '@reduxjs/toolkit';
import { defaultState } from './types';


const StandardModelEntityTitleModel = createSlice({
  name: 'StandardModelEntityTitle',
  initialState: defaultState,
  reducers: {
    refreshComponentState(state = defaultState, { payload }) {
      const refreshState = { ...state };
      refreshState.component = { ...payload };
      return refreshState;
    },
  },
});

export default StandardModelEntityTitleModel;
