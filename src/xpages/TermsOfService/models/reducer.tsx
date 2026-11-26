import { createSlice } from '@reduxjs/toolkit';
import { defaultState } from './types';


const TermsOfServiceModel = createSlice({
  name: 'TermsOfService',
  initialState: defaultState,
  reducers: {
    refreshPageState(state = defaultState, { payload }) {
      const refreshState = { ...state };
      refreshState.page = { ...payload };
      return refreshState;
    },
  },
});

export default TermsOfServiceModel;
