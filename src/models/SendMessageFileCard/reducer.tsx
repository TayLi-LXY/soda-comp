import { createSlice } from '@reduxjs/toolkit';
import { defaultState } from './types';


const SendMessageFileCardModel = createSlice({
  name: 'SendMessageFileCard',
  initialState: defaultState,
  reducers: {
    refreshComponentState(state = defaultState, { payload }) {
      const refreshState = { ...state };
      refreshState.component = { ...payload };
      return refreshState;
    },
  },
});

export default SendMessageFileCardModel;
