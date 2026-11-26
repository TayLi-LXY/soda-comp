import { createSlice } from '@reduxjs/toolkit';
import { defaultState } from './types';


const QRCodeDisplayModel = createSlice({
  name: 'QRCodeDisplay',
  initialState: defaultState,
  reducers: {
    refreshComponentState(state = defaultState, { payload }) {
      const refreshState = { ...state };
      refreshState.component = { ...payload };
      return refreshState;
    },
  },
});

export default QRCodeDisplayModel;
