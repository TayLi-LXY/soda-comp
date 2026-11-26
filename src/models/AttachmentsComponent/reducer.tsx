import { createSlice } from '@reduxjs/toolkit';
import { defaultState } from './types';


const AttachmentsComponentModel = createSlice({
  name: 'AttachmentsComponent',
  initialState: defaultState,
  reducers: {
    refreshComponentState(state = defaultState, { payload }) {
      const refreshState = { ...state };
      refreshState.component = { ...payload };
      return refreshState;
    },
  },
});

export default AttachmentsComponentModel;
